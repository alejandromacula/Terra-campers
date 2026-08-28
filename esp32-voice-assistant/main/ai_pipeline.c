#include "ai_pipeline.h"
#include "audio_io.h"
#include "secrets.h"

#include <string.h>
#include <stdlib.h>
#include <stdio.h>

#include "esp_http_client.h"
#include "esp_crt_bundle.h"
#include "esp_log.h"
#include "cJSON.h"

static const char *TAG = "ai_pipeline";

#define GROQ_TRANSCRIBE_URL "https://api.groq.com/openai/v1/audio/transcriptions"
#define GROQ_CHAT_URL       "https://api.groq.com/openai/v1/chat/completions"
#define GROQ_STT_MODEL      "whisper-large-v3-turbo"
#define GROQ_CHAT_MODEL     "llama-3.3-70b-versatile"

// Si tu cuenta gratuita de ElevenLabs no habilita PCM crudo, cambiá esto a
// "mp3_44100_128" y sumá un decodificador MP3 antes de audio_io_play_pcm16
// (ver nota en el README).
#define ELEVENLABS_OUTPUT_FORMAT "pcm_16000"

#define SYSTEM_PROMPT \
    "Sos un asistente de voz conversacional en español rioplatense. " \
    "Respondé de forma breve, natural y directa, como en una charla hablada " \
    "(sin markdown, sin listas, sin emojis), en un par de oraciones como máximo."

typedef struct {
    char *buf;
    size_t len;
    size_t cap;
} response_buf_t;

static esp_err_t capture_event_handler(esp_http_client_event_t *evt)
{
    if (evt->event_id == HTTP_EVENT_ON_DATA) {
        response_buf_t *rb = (response_buf_t *)evt->user_data;
        size_t space = rb->cap - rb->len - 1;
        size_t to_copy = evt->data_len < space ? evt->data_len : space;
        if (to_copy > 0) {
            memcpy(rb->buf + rb->len, evt->data, to_copy);
            rb->len += to_copy;
            rb->buf[rb->len] = '\0';
        }
    }
    return ESP_OK;
}

static esp_err_t stream_audio_event_handler(esp_http_client_event_t *evt)
{
    if (evt->event_id == HTTP_EVENT_ON_DATA && evt->data_len > 0) {
        // El PCM de ElevenLabs viene como bytes crudos de a pedazos; puede
        // llegar un byte "suelto" al final de un chunk si data_len es impar,
        // pero para audio de voz esto no se nota en la práctica.
        audio_io_play_pcm16((const int16_t *)evt->data, evt->data_len / 2, 16000);
    }
    return ESP_OK;
}

static void build_wav_header(uint8_t *hdr, uint32_t data_bytes,
                              uint32_t sample_rate, uint16_t bits, uint16_t channels)
{
    uint32_t byte_rate = sample_rate * channels * (bits / 8);
    uint16_t block_align = channels * (bits / 8);
    uint32_t riff_size = 36 + data_bytes;

    memcpy(hdr, "RIFF", 4);
    memcpy(hdr + 4, &riff_size, 4);
    memcpy(hdr + 8, "WAVEfmt ", 8);
    uint32_t fmt_size = 16;
    memcpy(hdr + 16, &fmt_size, 4);
    uint16_t audio_format = 1; // PCM
    memcpy(hdr + 20, &audio_format, 2);
    memcpy(hdr + 22, &channels, 2);
    memcpy(hdr + 24, &sample_rate, 4);
    memcpy(hdr + 28, &byte_rate, 4);
    memcpy(hdr + 32, &block_align, 2);
    memcpy(hdr + 34, &bits, 2);
    memcpy(hdr + 36, "data", 4);
    memcpy(hdr + 40, &data_bytes, 4);
}

esp_err_t ai_transcribe(const int16_t *pcm, size_t num_samples, uint32_t sample_rate_hz,
                         char *text_out, size_t text_out_size)
{
    const char *boundary = "----esp32voiceassistant";
    uint32_t data_bytes = (uint32_t)(num_samples * sizeof(int16_t));

    char part_pre[256];
    int pre_len = snprintf(part_pre, sizeof(part_pre),
        "--%s\r\n"
        "Content-Disposition: form-data; name=\"model\"\r\n\r\n"
        "%s\r\n"
        "--%s\r\n"
        "Content-Disposition: form-data; name=\"file\"; filename=\"rec.wav\"\r\n"
        "Content-Type: audio/wav\r\n\r\n",
        boundary, GROQ_STT_MODEL, boundary);

    char part_post[64];
    int post_len = snprintf(part_post, sizeof(part_post), "\r\n--%s--\r\n", boundary);

    size_t wav_size = 44 + data_bytes;
    size_t body_len = pre_len + wav_size + post_len;
    uint8_t *body = malloc(body_len);
    if (!body) {
        ESP_LOGE(TAG, "Sin memoria para el cuerpo del request (%u bytes)", (unsigned)body_len);
        return ESP_ERR_NO_MEM;
    }

    size_t offset = 0;
    memcpy(body + offset, part_pre, pre_len); offset += pre_len;
    build_wav_header(body + offset, data_bytes, sample_rate_hz, 16, 1); offset += 44;
    memcpy(body + offset, pcm, data_bytes); offset += data_bytes;
    memcpy(body + offset, part_post, post_len); offset += post_len;

    char content_type[64];
    snprintf(content_type, sizeof(content_type), "multipart/form-data; boundary=%s", boundary);

    char resp_buf[2048];
    response_buf_t rb = { .buf = resp_buf, .len = 0, .cap = sizeof(resp_buf) };
    resp_buf[0] = '\0';

    esp_http_client_config_t config = {
        .url = GROQ_TRANSCRIBE_URL,
        .method = HTTP_METHOD_POST,
        .event_handler = capture_event_handler,
        .user_data = &rb,
        .crt_bundle_attach = esp_crt_bundle_attach,
        .timeout_ms = 20000,
    };
    esp_http_client_handle_t client = esp_http_client_init(&config);

    char auth_header[64];
    snprintf(auth_header, sizeof(auth_header), "Bearer %s", GROQ_API_KEY);
    esp_http_client_set_header(client, "Authorization", auth_header);
    esp_http_client_set_header(client, "Content-Type", content_type);
    esp_http_client_set_post_field(client, (const char *)body, body_len);

    esp_err_t err = esp_http_client_perform(client);
    int status = esp_http_client_get_status_code(client);
    esp_http_client_cleanup(client);
    free(body);

    if (err != ESP_OK || status != 200) {
        ESP_LOGE(TAG, "Groq STT falló (err=%d, status=%d): %s", err, status, resp_buf);
        return ESP_FAIL;
    }

    cJSON *root = cJSON_Parse(resp_buf);
    if (!root) {
        ESP_LOGE(TAG, "Respuesta de Groq STT no es JSON válido: %s", resp_buf);
        return ESP_FAIL;
    }
    cJSON *text = cJSON_GetObjectItem(root, "text");
    if (!cJSON_IsString(text)) {
        ESP_LOGE(TAG, "Respuesta de Groq STT sin campo 'text': %s", resp_buf);
        cJSON_Delete(root);
        return ESP_FAIL;
    }
    strncpy(text_out, text->valuestring, text_out_size - 1);
    text_out[text_out_size - 1] = '\0';
    cJSON_Delete(root);
    return ESP_OK;
}

esp_err_t ai_chat(const char *user_text, char *reply_out, size_t reply_out_size)
{
    cJSON *root = cJSON_CreateObject();
    cJSON_AddStringToObject(root, "model", GROQ_CHAT_MODEL);
    cJSON *messages = cJSON_AddArrayToObject(root, "messages");

    cJSON *sys_msg = cJSON_CreateObject();
    cJSON_AddStringToObject(sys_msg, "role", "system");
    cJSON_AddStringToObject(sys_msg, "content", SYSTEM_PROMPT);
    cJSON_AddItemToArray(messages, sys_msg);

    cJSON *user_msg = cJSON_CreateObject();
    cJSON_AddStringToObject(user_msg, "role", "user");
    cJSON_AddStringToObject(user_msg, "content", user_text);
    cJSON_AddItemToArray(messages, user_msg);

    cJSON_AddNumberToObject(root, "temperature", 0.7);
    cJSON_AddNumberToObject(root, "max_tokens", 200);

    char *body = cJSON_PrintUnformatted(root);
    cJSON_Delete(root);

    char resp_buf[4096];
    response_buf_t rb = { .buf = resp_buf, .len = 0, .cap = sizeof(resp_buf) };
    resp_buf[0] = '\0';

    esp_http_client_config_t config = {
        .url = GROQ_CHAT_URL,
        .method = HTTP_METHOD_POST,
        .event_handler = capture_event_handler,
        .user_data = &rb,
        .crt_bundle_attach = esp_crt_bundle_attach,
        .timeout_ms = 20000,
    };
    esp_http_client_handle_t client = esp_http_client_init(&config);

    char auth_header[64];
    snprintf(auth_header, sizeof(auth_header), "Bearer %s", GROQ_API_KEY);
    esp_http_client_set_header(client, "Authorization", auth_header);
    esp_http_client_set_header(client, "Content-Type", "application/json");
    esp_http_client_set_post_field(client, body, strlen(body));

    esp_err_t err = esp_http_client_perform(client);
    int status = esp_http_client_get_status_code(client);
    esp_http_client_cleanup(client);
    free(body);

    if (err != ESP_OK || status != 200) {
        ESP_LOGE(TAG, "Groq chat falló (err=%d, status=%d): %s", err, status, resp_buf);
        return ESP_FAIL;
    }

    cJSON *resp_root = cJSON_Parse(resp_buf);
    if (!resp_root) {
        ESP_LOGE(TAG, "Respuesta de Groq chat no es JSON válido: %s", resp_buf);
        return ESP_FAIL;
    }
    cJSON *choices = cJSON_GetObjectItem(resp_root, "choices");
    cJSON *first = cJSON_GetArrayItem(choices, 0);
    cJSON *message = first ? cJSON_GetObjectItem(first, "message") : NULL;
    cJSON *content = message ? cJSON_GetObjectItem(message, "content") : NULL;
    if (!cJSON_IsString(content)) {
        ESP_LOGE(TAG, "Respuesta de Groq chat sin 'choices[0].message.content': %s", resp_buf);
        cJSON_Delete(resp_root);
        return ESP_FAIL;
    }
    strncpy(reply_out, content->valuestring, reply_out_size - 1);
    reply_out[reply_out_size - 1] = '\0';
    cJSON_Delete(resp_root);
    return ESP_OK;
}

esp_err_t ai_speak(const char *text)
{
    cJSON *root = cJSON_CreateObject();
    cJSON_AddStringToObject(root, "text", text);
    cJSON_AddStringToObject(root, "model_id", "eleven_multilingual_v2");
    char *body = cJSON_PrintUnformatted(root);
    cJSON_Delete(root);

    char url[256];
    snprintf(url, sizeof(url), "https://api.elevenlabs.io/v1/text-to-speech/%s?output_format=%s",
             ELEVENLABS_VOICE_ID, ELEVENLABS_OUTPUT_FORMAT);

    esp_http_client_config_t config = {
        .url = url,
        .method = HTTP_METHOD_POST,
        .event_handler = stream_audio_event_handler,
        .crt_bundle_attach = esp_crt_bundle_attach,
        .timeout_ms = 30000,
    };
    esp_http_client_handle_t client = esp_http_client_init(&config);
    esp_http_client_set_header(client, "xi-api-key", ELEVENLABS_API_KEY);
    esp_http_client_set_header(client, "Content-Type", "application/json");
    esp_http_client_set_post_field(client, body, strlen(body));

    esp_err_t err = esp_http_client_perform(client);
    int status = esp_http_client_get_status_code(client);
    esp_http_client_cleanup(client);
    free(body);

    if (err != ESP_OK || status != 200) {
        ESP_LOGE(TAG, "ElevenLabs TTS falló (err=%d, status=%d)", err, status);
        return ESP_FAIL;
    }
    return ESP_OK;
}

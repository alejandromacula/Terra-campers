#include <stdlib.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "esp_heap_caps.h"

#include "wifi_setup.h"
#include "audio_io.h"
#include "ai_pipeline.h"

static const char *TAG = "voice_assistant";

// ~8 segundos de margen a 16kHz mono 16-bit.
#define MAX_RECORD_SAMPLES (AUDIO_SAMPLE_RATE_HZ * 8)

void app_main(void)
{
    ESP_ERROR_CHECK(audio_io_init());
    ESP_ERROR_CHECK(wifi_setup_connect_blocking());
    ESP_LOGI(TAG, "Listo. Mantené apretado el botón BOOT y hablá.");

    int16_t *record_buf = heap_caps_malloc(MAX_RECORD_SAMPLES * sizeof(int16_t),
                                            MALLOC_CAP_SPIRAM);
    if (!record_buf) {
        ESP_LOGE(TAG, "No hay memoria PSRAM suficiente para el buffer de grabación");
        return;
    }

    char user_text[512];
    char reply_text[1024];

    while (1) {
        if (!talk_button_is_pressed()) {
            vTaskDelay(pdMS_TO_TICKS(20));
            continue;
        }

        ESP_LOGI(TAG, "Grabando...");
        size_t samples = audio_io_record_while_pressed(record_buf, MAX_RECORD_SAMPLES);
        ESP_LOGI(TAG, "Grabación terminada (%.1f s)", samples / (float)AUDIO_SAMPLE_RATE_HZ);

        if (samples < AUDIO_SAMPLE_RATE_HZ / 4) {
            ESP_LOGW(TAG, "Grabación muy corta, la ignoro.");
            continue;
        }

        if (ai_transcribe(record_buf, samples, AUDIO_SAMPLE_RATE_HZ,
                           user_text, sizeof(user_text)) != ESP_OK) {
            ESP_LOGE(TAG, "Falló la transcripción, reintentá.");
            continue;
        }
        ESP_LOGI(TAG, "Vos dijiste: %s", user_text);

        if (ai_chat(user_text, reply_text, sizeof(reply_text)) != ESP_OK) {
            ESP_LOGE(TAG, "Falló la respuesta del modelo, reintentá.");
            continue;
        }
        ESP_LOGI(TAG, "Respuesta: %s", reply_text);

        if (ai_speak(reply_text) != ESP_OK) {
            ESP_LOGE(TAG, "Falló la síntesis de voz.");
        }
    }
}

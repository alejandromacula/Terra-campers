/*
 * Capa de audio: I2C (control) + I2S (datos) + codecs ES8311/ES7210 vía el
 * componente oficial de Espressif "esp_codec_dev" (el mismo usado en
 * ESP32-S3-BOX / Korvo, que comparten este par de codecs).
 *
 * ADVERTENCIA: esta es la parte del proyecto con más riesgo de necesitar
 * ajustes -- no tengo forma de compilar/probar contra el hardware real ni
 * de confirmar los nombres exactos de los campos de esp_codec_dev en la
 * versión que PlatformIO te resuelva. Si algo no compila, mirá los headers
 * instalados en:
 *   .pio/libdeps/.../esp_codec_dev/include/esp_codec_dev.h
 *   .pio/libdeps/.../esp_codec_dev/include/esp_codec_dev_defaults.h
 * los nombres de función/struct deberían ser muy parecidos a los de acá.
 */

#include "audio_io.h"
#include "pins.h"

#include "driver/i2c.h"
#include "driver/i2s_std.h"
#include "driver/gpio.h"
#include "esp_log.h"

#include "esp_codec_dev.h"
#include "esp_codec_dev_defaults.h"
#include "es8311.h"
#include "es7210.h"

static const char *TAG = "audio_io";

static i2s_chan_handle_t s_tx_chan;
static i2s_chan_handle_t s_rx_chan;
static const audio_codec_data_if_t *s_data_if;
static esp_codec_dev_handle_t s_out_dev;
static esp_codec_dev_handle_t s_in_dev;

static esp_err_t i2c_init(void)
{
    i2c_config_t conf = {
        .mode = I2C_MODE_MASTER,
        .sda_io_num = PIN_I2C_SDA,
        .scl_io_num = PIN_I2C_SCL,
        .sda_pullup_en = GPIO_PULLUP_ENABLE,
        .scl_pullup_en = GPIO_PULLUP_ENABLE,
        .master.clk_speed = 100000,
    };
    ESP_ERROR_CHECK(i2c_param_config(I2C_CODEC_PORT, &conf));
    return i2c_driver_install(I2C_CODEC_PORT, conf.mode, 0, 0, 0);
}

static esp_err_t i2s_init(void)
{
    i2s_chan_config_t chan_cfg = I2S_CHANNEL_DEFAULT_CONFIG(I2S_NUM_0, I2S_ROLE_MASTER);
    ESP_ERROR_CHECK(i2s_new_channel(&chan_cfg, &s_tx_chan, &s_rx_chan));

    i2s_std_config_t std_cfg = {
        .clk_cfg = I2S_STD_CLK_DEFAULT_CONFIG(AUDIO_SAMPLE_RATE_HZ),
        .slot_cfg = I2S_STD_PHILIPS_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT,
                                                         I2S_SLOT_MODE_MONO),
        .gpio_cfg = {
            .mclk = PIN_I2S_MCLK,
            .bclk = PIN_I2S_BCLK,
            .ws   = PIN_I2S_WS,
            .dout = PIN_I2S_DOUT,
            .din  = PIN_I2S_DIN,
            .invert_flags = {
                .mclk_inv = false,
                .bclk_inv = false,
                .ws_inv   = false,
            },
        },
    };

    ESP_ERROR_CHECK(i2s_channel_init_std_mode(s_tx_chan, &std_cfg));
    ESP_ERROR_CHECK(i2s_channel_init_std_mode(s_rx_chan, &std_cfg));
    ESP_ERROR_CHECK(i2s_channel_enable(s_tx_chan));
    ESP_ERROR_CHECK(i2s_channel_enable(s_rx_chan));

    audio_codec_i2s_cfg_t i2s_cfg = {
        .port = I2S_NUM_0,
        .rx_handle = s_rx_chan,
        .tx_handle = s_tx_chan,
    };
    s_data_if = audio_codec_new_i2s_data(&i2s_cfg);
    return s_data_if ? ESP_OK : ESP_FAIL;
}

static esp_err_t codecs_init(void)
{
    // --- ES8311 (DAC / parlante) ---
    audio_codec_i2c_cfg_t es8311_i2c_cfg = {
        .port = I2C_CODEC_PORT,
        .addr = ES8311_I2C_ADDR,
    };
    const audio_codec_ctrl_if_t *es8311_ctrl_if = audio_codec_new_i2c_ctrl(&es8311_i2c_cfg);

    es8311_codec_cfg_t es8311_cfg = {
        .ctrl_if = es8311_ctrl_if,
        .codec_mode = ESP_CODEC_DEV_WORK_MODE_DAC,
        .pa_pin = -1, // si tu placa maneja el amplificador con un GPIO
                      // separado, poné ese pin acá en lugar de -1.
        .use_mclk = true,
    };
    const audio_codec_if_t *es8311_codec_if = es8311_codec_new(&es8311_cfg);

    esp_codec_dev_cfg_t out_dev_cfg = {
        .dev_type = ESP_CODEC_DEV_TYPE_OUT,
        .codec_if = es8311_codec_if,
        .data_if = s_data_if,
    };
    s_out_dev = esp_codec_dev_new(&out_dev_cfg);

    // --- ES7210 (ADC / micrófono) ---
    audio_codec_i2c_cfg_t es7210_i2c_cfg = {
        .port = I2C_CODEC_PORT,
        .addr = ES7210_I2C_ADDR,
    };
    const audio_codec_ctrl_if_t *es7210_ctrl_if = audio_codec_new_i2c_ctrl(&es7210_i2c_cfg);

    es7210_codec_cfg_t es7210_cfg = {
        .ctrl_if = es7210_ctrl_if,
        .mic_selected = ES7210_SEL_MIC1,
    };
    const audio_codec_if_t *es7210_codec_if = es7210_codec_new(&es7210_cfg);

    esp_codec_dev_cfg_t in_dev_cfg = {
        .dev_type = ESP_CODEC_DEV_TYPE_IN,
        .codec_if = es7210_codec_if,
        .data_if = s_data_if,
    };
    s_in_dev = esp_codec_dev_new(&in_dev_cfg);

    if (!s_out_dev || !s_in_dev) {
        ESP_LOGE(TAG, "No se pudieron crear los codec devices");
        return ESP_FAIL;
    }

    esp_codec_dev_sample_info_t fs = {
        .sample_rate = AUDIO_SAMPLE_RATE_HZ,
        .channel = AUDIO_CHANNELS,
        .bits_per_sample = AUDIO_BITS_PER_SAMPLE,
    };
    ESP_ERROR_CHECK(esp_codec_dev_open(s_out_dev, &fs));
    ESP_ERROR_CHECK(esp_codec_dev_open(s_in_dev, &fs));
    esp_codec_dev_set_out_vol(s_out_dev, 70);
    esp_codec_dev_set_in_gain(s_in_dev, 30);

    return ESP_OK;
}

esp_err_t audio_io_init(void)
{
    gpio_config_t btn_cfg = {
        .pin_bit_mask = 1ULL << PIN_TALK_BUTTON,
        .mode = GPIO_MODE_INPUT,
        .pull_up_en = TALK_BUTTON_ACTIVE_LOW ? GPIO_PULLUP_ENABLE : GPIO_PULLUP_DISABLE,
    };
    ESP_ERROR_CHECK(gpio_config(&btn_cfg));

    ESP_ERROR_CHECK(i2c_init());
    ESP_ERROR_CHECK(i2s_init());
    ESP_ERROR_CHECK(codecs_init());
    ESP_LOGI(TAG, "Audio inicializado (%d Hz, %d bits, %d canal/es)",
             AUDIO_SAMPLE_RATE_HZ, AUDIO_BITS_PER_SAMPLE, AUDIO_CHANNELS);
    return ESP_OK;
}

int talk_button_is_pressed(void)
{
    int level = gpio_get_level(PIN_TALK_BUTTON);
    return TALK_BUTTON_ACTIVE_LOW ? (level == 0) : (level == 1);
}

size_t audio_io_record_while_pressed(int16_t *out_buf, size_t max_samples)
{
    size_t total = 0;
    const size_t chunk_samples = 512;

    while (talk_button_is_pressed() && total + chunk_samples <= max_samples) {
        size_t bytes_read = 0;
        esp_err_t err = esp_codec_dev_read(s_in_dev, out_buf + total,
                                            chunk_samples * sizeof(int16_t));
        if (err != ESP_OK) {
            ESP_LOGW(TAG, "Error leyendo del mic: %d", err);
            break;
        }
        bytes_read = chunk_samples * sizeof(int16_t);
        total += bytes_read / sizeof(int16_t);
    }
    return total;
}

esp_err_t audio_io_play_pcm16(const int16_t *pcm, size_t num_samples, uint32_t sample_rate_hz)
{
    if (sample_rate_hz != AUDIO_SAMPLE_RATE_HZ) {
        ESP_LOGW(TAG, "Sample rate de reproducción (%u) distinto al configurado (%d); "
                      "puede sonar mal si no coincide.",
                 (unsigned)sample_rate_hz, AUDIO_SAMPLE_RATE_HZ);
    }
    return esp_codec_dev_write(s_out_dev, (void *)pcm, num_samples * sizeof(int16_t));
}

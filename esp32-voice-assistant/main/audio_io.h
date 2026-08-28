#pragma once

#include <stddef.h>
#include <stdint.h>
#include "esp_err.h"

#define AUDIO_SAMPLE_RATE_HZ  16000
#define AUDIO_BITS_PER_SAMPLE 16
#define AUDIO_CHANNELS        1

// Inicializa I2C (control de codecs) + I2S (datos) + los codecs ES8311
// (parlante) y ES7210 (mic) vía esp_codec_dev.
esp_err_t audio_io_init(void);

// Graba mientras talk_button_is_pressed() devuelva true (polling simple con
// un pequeño delay), hasta llenar max_samples o soltar el botón. Devuelve
// la cantidad de samples int16 grabados en out_buf.
size_t audio_io_record_while_pressed(int16_t *out_buf, size_t max_samples);

// Reproduce PCM 16-bit mono por el parlante (ES8311). Bloqueante.
esp_err_t audio_io_play_pcm16(const int16_t *pcm, size_t num_samples, uint32_t sample_rate_hz);

// true si el botón de "hablar" (BOOT, ver pins.h) está apretado.
int talk_button_is_pressed(void);

#pragma once

#include <stddef.h>
#include <stdint.h>
#include "esp_err.h"

// Sube el audio grabado (PCM 16-bit mono) a Groq Whisper y devuelve el
// texto transcripto en text_out (terminado en '\0').
esp_err_t ai_transcribe(const int16_t *pcm, size_t num_samples, uint32_t sample_rate_hz,
                         char *text_out, size_t text_out_size);

// Manda user_text a Groq (Llama 3.3 70B) con un prompt de sistema de
// asistente conversacional y devuelve la respuesta en reply_out.
esp_err_t ai_chat(const char *user_text, char *reply_out, size_t reply_out_size);

// Pide la voz a ElevenLabs (PCM 16kHz) y la va reproduciendo por streaming
// a medida que llega, sin esperar la respuesta completa.
esp_err_t ai_speak(const char *text);

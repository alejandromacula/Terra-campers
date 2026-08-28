#pragma once

/*
 * ¡COMPLETAR ANTES DE COMPILAR!
 *
 * No pude verificar el esquemático de la ESP32-S3-Touch-LCD-4B (el proxy de
 * red de este entorno bloquea waveshare.com), así que estos pines quedan a
 * propósito sin definir. Sacalos del demo oficial:
 *
 *   1. Entrá a https://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-4B
 *   2. Pestaña "Resource" -> bajate el ZIP de demos (carpeta ESP-IDF)
 *   3. Buscá el ejemplo de audio/codec (suele llamarse algo con
 *      "audio", "es8311" o "codec") y copiá sus #define de I2C/I2S acá.
 *
 * La placa usa el mismo par de codecs que la ESP32-S3-BOX-3 (ES8311 para
 * el parlante, ES7210 para el micrófono), así que si el demo no lo deja
 * explícito, comparar contra el board support package de esp-box también
 * sirve como referencia.
 */

// --- I2C (bus de control de los codecs) ---
#define PIN_I2C_SDA        (-1)   // TODO: completar
#define PIN_I2C_SCL        (-1)   // TODO: completar
#define I2C_CODEC_PORT      0

// --- I2S (audio: mic ES7210 + parlante ES8311, suelen compartir el bus) ---
#define PIN_I2S_MCLK       (-1)   // TODO: completar
#define PIN_I2S_BCLK       (-1)   // TODO: completar
#define PIN_I2S_WS         (-1)   // TODO: completar (LRCK / word select)
#define PIN_I2S_DOUT       (-1)   // TODO: hacia el ES8311 (parlante)
#define PIN_I2S_DIN        (-1)   // TODO: desde el ES7210 (mic)

// --- Direcciones I2C de los codecs (valores típicos, confirmar) ---
#define ES8311_I2C_ADDR     0x18
#define ES7210_I2C_ADDR     0x40

// --- Botón "mantener apretado para hablar" ---
// La placa no tiene un botón de usuario dedicado además de BOOT/RESET, así
// que usamos el botón BOOT (GPIO0). Es un patrón estándar en proyectos
// ESP32 con Arduino/IDF -- después de bootear, GPIO0 se puede leer como
// una entrada digital normal.
#define PIN_TALK_BUTTON      0
#define TALK_BUTTON_ACTIVE_LOW 1

#if PIN_I2C_SDA < 0 || PIN_I2C_SCL < 0 || PIN_I2S_MCLK < 0 || \
    PIN_I2S_BCLK < 0 || PIN_I2S_WS < 0 || PIN_I2S_DOUT < 0 || PIN_I2S_DIN < 0
#error "Completá los pines en main/pins.h con los valores del demo oficial de Waveshare antes de compilar (ver comentario arriba)."
#endif

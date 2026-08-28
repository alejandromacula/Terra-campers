# Asistente de voz para Waveshare ESP32-S3-Touch-LCD-4B

Firmware (ESP-IDF, vía PlatformIO) para convertir la placa en un asistente
de voz: apretás el botón BOOT, hablás, y te responde por el parlante de la
placa. Todo el "cerebro" corre en la nube (gratis) — el ESP32 solo graba,
manda audio/texto por HTTPS, y reproduce la respuesta.

## Por qué esta arquitectura

- Tu suscripción de Claude.ai **no sirve acá**: es un plan de uso personal,
  no una API key programable. Para hablar con una IA desde un
  microcontrolador hace falta una API con clave.
- El ESP32-S3 no tiene potencia para correr un modelo de voz o de lenguaje
  él solo. Elegí tres APIs en la nube con capa gratuita generosa, así no
  necesitás mantener ningún servidor propio (PC, Raspberry Pi, etc.):

| Paso | Servicio | Por qué | Costo |
|---|---|---|---|
| Voz → texto | **Groq** (`whisper-large-v3-turbo`) | Rapidísimo, capa gratuita amplia | Gratis |
| Texto → respuesta | **Groq** (`llama-3.3-70b-versatile`) | Conversación natural, misma cuenta que STT | Gratis |
| Texto → voz | **ElevenLabs** | La voz más natural entre las gratuitas | Gratis (10k caracteres/mes) |

Las tres son llamadas HTTPS directas desde el ESP32 — no hay servidor
puente intermedio.

## ⚠️ Lo que TENÉS que verificar antes de armar (importante)

No tengo acceso al esquemático ni al demo oficial de Waveshare para esta
placa exacta (el proxy de red de este entorno bloquea waveshare.com), así
que **los pines de I2C/I2S en `main/pins.h` son placeholders (`-1`) que vos
tenés que completar**. Waveshare publica, para cada placa, un ZIP de demo
en la pestaña **Resource** de:

https://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-4B

Adentro del demo (carpeta ESP-IDF, ejemplo de audio/codec) vas a encontrar
los `#define` reales de:

- Pines I2C que controlan los codecs ES8311 (parlante) y ES7210 (mic)
- Pines I2S (MCLK, BCLK, WS, DIN, DOUT)
- Direcciones I2C de cada chip (normalmente `0x18` para ES8311 y `0x40`
  para ES7210, pero confirmalo)

Copiá esos valores a `main/pins.h`. Si armás el proyecto sin completarlos,
directamente no va a compilar (a propósito, para que no pase por alto este
paso).

## Estructura

```
esp32-voice-assistant/
├── platformio.ini          # entorno PlatformIO (framework = espidf)
├── sdkconfig.defaults       # PSRAM octal (chip S3R8), tamaño de flash, etc.
├── main/
│   ├── pins.h               # <-- COMPLETAR con el demo oficial de Waveshare
│   ├── secrets.h.example    # copiar a secrets.h y completar
│   ├── wifi_setup.c/.h
│   ├── audio_io.c/.h        # I2C + I2S + codec (grabar/reproducir)
│   ├── ai_pipeline.c/.h     # Groq STT, Groq LLM, ElevenLabs TTS
│   └── main.c               # botón BOOT -> pipeline completo
```

## Configuración

1. Copiá `main/secrets.h.example` a `main/secrets.h` y completá:
   - `WIFI_SSID` / `WIFI_PASS`
   - `GROQ_API_KEY` — gratis en https://console.groq.com/keys
   - `ELEVENLABS_API_KEY` y `ELEVENLABS_VOICE_ID` — gratis en
     https://elevenlabs.io (Voice ID lo sacás de "Voices" en tu dashboard)
2. Completá `main/pins.h` como se explica arriba.
3. Instalá PlatformIO (extensión de VS Code o `pip install platformio`).
4. `pio run -t upload -t monitor`

## Cómo funciona el flujo

1. Mantenés apretado el botón **BOOT** (GPIO0) → graba audio 16kHz/16-bit
   mono en un buffer de PSRAM.
2. Soltás el botón → se arma un WAV en memoria y se manda por HTTPS a
   Groq (`/openai/v1/audio/transcriptions`) para transcribir.
3. El texto transcripto se manda a Groq Chat (`llama-3.3-70b-versatile`)
   con un prompt de sistema de asistente conversacional.
4. La respuesta en texto se manda a ElevenLabs TTS pidiendo
   `output_format=pcm_16000` (PCM crudo, sin necesidad de decodificador
   MP3 en el firmware).
5. El PCM que va llegando se escribe directo al codec de salida (ES8311)
   por streaming, así empieza a sonar sin esperar la respuesta completa.

## Notas / límites conocidos

- `main/audio_io.c` usa el componente oficial `esp_codec_dev` de Espressif
  para manejar los codecs ES8311/ES7210 (evita que yo tenga que inventar
  secuencias de registros I2C). Los nombres exactos de los campos de sus
  structs (`es8311_codec_cfg_t`, `es7210_codec_cfg_t`, etc.) pueden variar
  un poco según la versión que PlatformIO te resuelva -- si al compilar te
  tira error de "campo no existe", abrí el header instalado en
  `.pio/libdeps/.../esp_codec_dev*/include/` y ajustá el nombre del campo;
  la lógica general (crear ctrl_if I2C, data_if I2S, codec_if, después
  esp_codec_dev_new/open/read/write) no cambia.
- Si tu cuenta gratuita de ElevenLabs no te habilita `pcm_16000` como
  `output_format`, cambiá `AI_TTS_OUTPUT_FORMAT` en `ai_pipeline.h` a
  `mp3_44100_128` — pero ahí vas a necesitar sumar un decodificador MP3
  (por ejemplo el componente `esp-idf-lib`/`libhelix-mp3` o la librería
  Arduino `ESP32-audioI2S` si migrás a framework Arduino). No lo incluí
  por defecto para no sumar una dependencia que quizás no necesites.
- El botón de pantalla táctil (en vez del botón físico BOOT) queda como
  siguiente paso: requiere levantar el panel RGB + el controlador táctil
  GT911 con LVGL, que depende de timings específicos de esta placa que
  tampoco pude confirmar sin el demo oficial. Con el botón BOOT ya tenés
  un "toco un botón y hablo" funcional end-to-end.
- Groq y ElevenLabs son gratis pero con límites de uso — si los superás,
  las respuestas van a fallar hasta el próximo período (revisá tu
  dashboard de cada servicio).

idf_component_register(
    SRCS "main.c" "wifi_setup.c" "audio_io.c" "ai_pipeline.c"
    INCLUDE_DIRS "."
    REQUIRES esp_wifi esp_event nvs_flash esp_http_client esp-tls mbedtls
             json driver heap esp_codec_dev es8311 es7210
)

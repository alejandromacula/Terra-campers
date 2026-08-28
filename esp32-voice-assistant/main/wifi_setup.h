#pragma once

#include "esp_err.h"

// Inicializa NVS + netif + WiFi en modo estación y bloquea hasta conectar
// (o hasta agotar los reintentos). Devuelve ESP_OK si quedó conectado.
esp_err_t wifi_setup_connect_blocking(void);

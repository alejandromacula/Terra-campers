# Brief — Maquetación de la guía Terra Campers

Tenés que pasar el texto investigado de una región al formato de página del diseño aprobado, y escribir los prompts para generar sus imágenes. **No hace falta investigar en la web**: todo sale del archivo de texto de tu región. No uses git. Escribí solo en tus dos archivos de salida.

## Qué es cada página

Una página impresa de 17 × 25,5 cm por lugar, muy visual: foto grande arriba, título, recuadro "Datos para el viaje" con íconos, tres bloques cortos de texto con una foto destacada al lado, una fila de 2 o 3 miniaturas con epígrafe y un cierre de dos columnas. **El espacio es fijo**: si te pasás de los límites, el texto se sale de la hoja. Es más importante que entre y se lea fácil que meter todo: elegí lo mejor de cada lugar.

Mirá los tres ejemplos ya aprobados en `/home/user/Terra-campers/guia-camper-argentina/diseno/datos/01-norte.json` (NOR-01 a NOR-03): copiá ese tono, ese largo y esa estructura.

## Formato (JSON)

Tu archivo de datos es una **lista JSON** de lugares, en el orden del índice de tu región. Cada lugar:

```json
{
  "codigo": "NOR-04",
  "region": "NOR",
  "ubicacion": "Cafayate · Salta",
  "titulo": "Cafayate y los vinos de altura",
  "bajada": "…",
  "datos": [["Desde Salta", "~185 km · ~3 h 30"], ["Camino", "Asfalto (RN 68)"], ["Altura", "~1.680 msnm"], ["Tiempo de visita", "1 a 2 días"]],
  "iconos": [["pernocte", "ok", "Camping municipal"], ["combustible", "ok", "En el pueblo"], ["camino", "aviso", "Curvas en la quebrada"]],
  "bloques": [["Historia", "…"], ["Paisaje", "…"], ["Vino de altura", "…"]],
  "destacada": {"img": "NOR-04-torrontes", "titulo": "Torrontés", "sub": "La cepa emblema de los Valles"},
  "fila": {"titulo": "Para ver", "items": [
    {"img": "NOR-04-bodega", "nombre": "…", "texto": "…"},
    {"img": "NOR-04-…", "nombre": "…", "texto": "…"},
    {"img": "NOR-04-…", "nombre": "…", "texto": "…"}
  ]},
  "cierre": [["Consejo fotográfico", "…"], ["En la camper", "…"]]
}
```

### Límites (estrictos)

| Campo | Límite |
|---|---|
| `ubicacion` | pueblo base · provincia, ≤ 38 caracteres |
| `titulo` | ≤ 34 caracteres (entra en 2 líneas en mayúsculas grandes) |
| `bajada` | 1 oración, **≤ 22 palabras**, con un dato concreto que enganche |
| `datos` | **exactamente 4 filas**. Rótulo ≤ 22 caracteres; valor ≤ 28 caracteres |
| `iconos` | 2 o 3. Tipo: `pernocte`, `combustible`, `camino` o `altura`. Estado: `ok` (bien), `aviso` (prestá atención), `no` (no se puede). Texto ≤ 24 caracteres |
| `bloques` | **exactamente 3**. Título ≤ 16 caracteres. Texto de **25 a 42 palabras** cada uno; **los tres juntos ≤ 115 palabras** |
| `destacada` | `titulo` ≤ 22 caracteres, `sub` ≤ 38 caracteres |
| `fila.titulo` | "Fauna", "Flora y fauna", "Para ver", "En el camino", "Qué hacer", etc. ≤ 16 caracteres |
| `fila.items` | 2 o 3. `nombre` ≤ 24 caracteres, `texto` **≤ 12 palabras** |
| `cierre` | **exactamente 2**. El segundo siempre es "En la camper". El primero es la sección opcional más valiosa del lugar ("Consejo fotográfico", "Cielo nocturno", "Dónde comer", "Si tenés un día más", "Antes de ir", "Para pajarear"…); si no hay ninguna, usá un dato práctico útil. Cada texto **≤ 28 palabras** |

### Reglas de contenido

- **Nada de marcas `[VERIFICAR]` ni `[PENDIENTE]` en el texto impreso.** Si un dato estaba marcado como dudoso, dejalo afuera o reformulalo de forma prudente ("consultá horarios antes de ir"). Nunca lo presentes como seguro.
- No inventes nada que no esté en el texto de la región.
- Sin precios. Distancias y tiempos con "~".
- Español rioplatense con voseo, como los ejemplos.
- Los tres bloques suelen ser: historia, paisaje/geología, y un tercero con lo más propio del lugar (senderos, el nombre, el vino, el cielo, la fauna…). Elegí títulos específicos cuando sumen ("Por qué se rompe", "La subida").
- "En la camper" tiene que decir dónde dormir (o que no se puede), y lo crítico: combustible, ripio, altura, cortes.
- `iconos`: usá `no` para pernocte cuando no se puede dormir en el lugar; `aviso` para ripio, curvas, altura o distancias largas sin combustible.

### Nombres de imagen (`img`)

- La foto principal de cada página se llama siempre `{codigo}-principal` y **no va en el JSON** (el diseño la pone sola).
- `destacada.img` y cada `fila.items[].img`: `{codigo}-{palabra}`, en minúsculas, sin tildes ni espacios (guiones). Ej.: `NOR-04-torrontes`, `AUS-12-pinguino-magallanes`. Únicos en toda la guía.
- La foto destacada y las miniaturas deben mostrar cosas distintas a la principal.

### Pueblitos de Buenos Aires

- `datos`: ["Desde CABA", "~165 km · ~2 h"], ["Rutas", "RN 3"], ["Ideal para", "…"], ["Tiempo sugerido", "1 o 2 días"].
- Bloques: "Por qué ir", "Historia" y un tercero propio del pueblo.
- `fila.titulo`: "Qué hacer", con 3 lugares puntuales del texto. Cada item lleva además **`"contacto"`**: el contacto publicado más útil (WhatsApp, teléfono o Instagram), ≤ 40 caracteres. Si no hay contacto publicado, omití el campo. Priorizá los lugares con contacto (son candidatos a convenio).
- `cierre`: "Dónde comer" (si hay) o "Antes de ir", y "En la camper".

## Prompts de imagen

En tu archivo de prompts va **un prompt por cada imagen** de tus páginas: la `-principal` de cada lugar, la `destacada` y cada miniatura. Se los vamos a pasar a ChatGPT para que las genere: tienen que dar **fotos realistas y lindas**, de nivel revista de viajes.

Formato de cada entrada:

```
### `NOR-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Prompt en inglés, detallado.
```

Formatos según el uso:

- `-principal`: **horizontal 3:2**; se recorta a franja panorámica, así que el motivo tiene que ir en la franja horizontal central.
- `destacada`: **vertical 2:3**; se recorta a 4:5.
- Miniaturas: **horizontal 3:2**; se recortan a 16:9 (o más angosto si la fila es de 2).

Cómo escribir cada prompt (en inglés, que los generadores entienden mejor):

1. Arrancá con "Photorealistic editorial travel photograph of…" (o "wildlife photograph" o "close-up botanical photograph").
2. **Qué es y dónde**, con los rasgos reconocibles del lugar real tal como los describe el texto: colores, forma, vegetación, agua, montañas.
3. **Luz y momento**: golden hour, amanecer, luz suave de mañana, cielo nocturno con Vía Láctea si corresponde.
4. **Composición y cámara**: plano general, primer plano, teleobjetivo, gran angular, profundidad de campo.
5. **Paleta y clima**: cálida, natural, sin saturar de más.
6. Cerrá siempre con: "natural colors, high detail, no people unless stated, no text, no watermark, no logos".

**Animales y plantas: precisión de especie.** Poné el nombre científico y 2 o 3 rasgos que los diferencien de especies parecidas (los generadores se equivocan: dibujan el cóndor con cabeza blanca, por ejemplo). Ej.: *Andean condor (Vultur gryphus): black body, white neck ruff, large white patches on the upper wings, bare dark head — not white-headed.*

**Edificios o negocios concretos** (una bodega, un almacén, un museo, una capilla, una casa de té): una imagen generada no se va a parecer al lugar real. Escribí un prompt de ambiente genérico y verosímil (ej. "rustic wine cellar with oak barrels in the pampas"), y agregá al final de la entrada la línea `**Mejor foto real del lugar.**`

## Archivos de salida

- Datos: el JSON que te indiquen, validado: `python3 -c "import json;json.load(open('RUTA'))"` tiene que correr sin error.
- Prompts: el Markdown que te indiquen; empezá con `## {Nombre de la región}` y una entrada por imagen, en el orden de las páginas.

Escribí de forma incremental (guardá cada pocos lugares) para no perder trabajo si hay un corte.

Al terminar, respondé en pocas líneas: cuántos lugares, cuántas imágenes con prompt y qué datos dudosos dejaste afuera.

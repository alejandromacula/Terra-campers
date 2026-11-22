# Imágenes para las primeras páginas

Generá cada imagen con el prompt de abajo, guardala en `diseno/img/` con el **nombre exacto** que figura (`.jpg` o `.png`) y volvé a correr `python3 generar.py && node render.js`. Las que falten siguen apareciendo como recuadro rayado con su nombre.

Los prompts están en inglés porque los generadores de imágenes responden mejor así. Todos piden foto realista, sin texto ni logos.

**Ojo con las especies.** Los generadores suelen equivocarse: por ejemplo, dibujan el cóndor con cabeza blanca, como un águila. Antes de usar cada imagen de un animal o una planta, chequeala contra los rasgos que dice el prompt.

| Uso | Proporción |
|---|---|
| Portada | vertical 2:3 |
| Apertura de región | horizontal 3:2 |
| Foto principal de cada lugar | panorámica 3:1 (se recorta a ~2,7:1) |
| Foto destacada al lado del texto | vertical 4:5 |
| Miniaturas (fila de 3) | 16:9 |
| Miniaturas (fila de 2) | muy horizontal ~2,6:1 |

---

### `portada` — vertical 2:3
Photorealistic travel photograph: a modern white camper van parked on the gravel shoulder of Ruta 40 in Argentina at golden hour, long empty straight road, dry Patagonian-Andean landscape, snow-capped Andes in the background, warm low sun, plenty of empty sky in the upper half, no people, no text, no logos.

### `NOR-apertura` — horizontal 3:2
Photorealistic landscape photograph of the Cerro de los Siete Colores in Purmamarca, Jujuy, Argentina: a striped mountain in red, ochre, purple and green layers rising behind adobe houses and tall cardón cacti, deep blue sky, early morning side light, no people, no text.

### `NOR-01-principal` — panorámica 3:1
Photorealistic photograph of a montane cloud forest of Andean alder trees (Alnus acuminata) on the eastern slope of the Aconquija range, Tucumán, Argentina; mist drifting between the trunks, mossy ground, soft diffuse light, no people, no text.

### `NOR-01-ciudacita` — vertical 4:5
Photorealistic photograph of Inca stone ruins at more than 4,000 m on the Aconquija range, Tucumán, Argentina (La Ciudacita): low rectangular dry-stone walls on a high Andean grassland plateau, rocky peaks with patches of snow behind, thin cold light, no people, no text.

### `NOR-01-taruca` — 16:9
Photorealistic wildlife photograph of a taruca, the north Andean deer (Hippocamelus antisensis): stocky grey-brown deer with large rounded ears and a dark Y-shaped marking on the face, standing on a rocky high-Andean slope with tussock grass, telephoto, natural light, no text.

### `NOR-01-aliso` — 16:9
Photorealistic close-up of Andean alder (Alnus acuminata) branches: oval serrated leaves and small woody cone-like catkins, misty forest background out of focus, no text.

### `NOR-01-amancay` — 16:9
Photorealistic close-up of an amancay flower from the Tucumán yungas, with green montane forest background. **Antes de generarla, confirmá con el parque qué especie llaman "amancay" ahí:** no es la misma flor que el amancay amarillo de la Patagonia.

### `NOR-02-principal` — panorámica 3:1
Photorealistic photograph of the menhirs of Tafí del Valle at El Mollar, Tucumán, Argentina: several tall grey standing stones on a green grassy hill, La Angostura reservoir and green rounded mountains behind, clear afternoon light, no people, no text.

### `NOR-02-menhir` — vertical 4:5
Photorealistic close-up of a tall grey granite menhir from the Tafí culture with a simple carved human face and geometric lines, soft raking afternoon light that reveals the carving, green hill background out of focus, no text.

### `NOR-02-los-sosa` — 16:9
Photorealistic photograph of the Quebrada de Los Sosa, Tucumán: a winding mountain road along a boulder-filled river, dense green subtropical cloud forest with ferns and epiphytes on the slopes, light mist, no people, no text.

### `NOR-02-condor` — 16:9
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) soaring: all-black body, **white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head** (not white-headed like an eagle), wide fingered wingtips, blue sky over Andean ridges, no text.

### `NOR-02-infiernillo` — 16:9
Photorealistic photograph of the Abra del Infiernillo mountain pass, Tucumán, Argentina, at 3,042 m: dry high-altitude grassland with scattered cardón cacti, a paved road winding over the pass, wide open sky, no people, no text.

### `NOR-03-principal` — panorámica 3:1
Photorealistic photograph of the Ruins of Quilmes (Ciudad Sagrada de los Quilmes), Tucumán, Argentina: terraces and low dry-stone walls climbing a rocky hillside dotted with tall cardón cacti, the dry Calchaquí valley spreading below, strong clear light, no people, no text.

### `NOR-03-pirca` — vertical 4:5
Photorealistic close-up of an ancient dry-stone wall (pirca) at the Quilmes ruins: stacked flat stones without mortar, a tall cardón cactus behind it, dry rocky hillside, warm light, no text.

### `NOR-03-cardon` — ~2,6:1
Photorealistic photograph of tall columnar cardón cacti (Leucostele terscheckii) on a dry rocky slope of the Calchaquí Valleys, Argentina, blue sky, no text.

### `NOR-03-centro` — ~2,6:1
**Para este conviene una foto real** del Centro de Interpretación: una imagen generada de un edificio concreto podría no parecerse al real. Si no tenés una, alternativa genérica: *photorealistic photograph of a small museum display of ancient Diaguita ceramics in warm light, no text.*

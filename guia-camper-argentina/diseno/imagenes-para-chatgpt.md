# Imágenes de la Guía de Ruta Terra Campers — prompts para ChatGPT

La guía usa **16 imágenes**. Cada una tiene abajo un prompt en inglés (los generadores responden mejor así) y su formato.

## Cómo usarlo

1. En ChatGPT, pegá primero este mensaje para fijar el estilo de toda la serie:

   > I'm going to send you prompts one by one for a printed travel guide of Argentina. For each one, generate a single photorealistic image that looks like a real photograph from a high-end travel magazine: natural colors, real light, accurate geography, flora and fauna of Argentina, no text, no logos, no watermarks, no borders. Use the aspect ratio I indicate.

2. Pegá cada prompt e indicá el formato (**horizontal 3:2** o **vertical 2:3**).
3. Descargá la imagen y guardala en `guia-camper-argentina/diseno/img/` con **el nombre exacto** del título (por ejemplo `NOR-04-principal.jpg`). Sirve `.jpg`, `.png` o `.webp`.
4. Abrí `guia-terra-campers.html` en el navegador: cada imagen aparece sola en su lugar, sin regenerar nada. Para el PDF, corré `node render.js`.

## Qué revisar en cada imagen

- **Animales y plantas:** compará con los rasgos que dice el prompt. Los generadores se equivocan seguido (el cóndor con cabeza blanca, pingüinos de otra especie, cactus que no son de la zona).
- **Lugares famosos:** que se parezcan al real (forma del cerro, color del agua). Si no, pedí "make it closer to the real place".
- **Sin carteles inventados:** si aparece texto o letras raras en la imagen, pedí que lo saque.
- **1 imágenes** llevan la nota **"Mejor foto real del lugar"**: son negocios, edificios o museos concretos. Una imagen generada no se va a parecer al lugar real; conviene pedir una foto al lugar (sirve para el convenio) o sacarla vos.

## Formatos

| Uso en la página | Pedile a ChatGPT | Cómo queda recortada |
|---|---|---|
| Portada | vertical 2:3 | página completa |
| Apertura de región | horizontal 3:2 | franja ancha arriba |
| `-principal` (foto grande de cada lugar) | horizontal 3:2 | franja panorámica ~2,7:1: lo importante en el centro |
| Foto destacada al lado del texto | vertical 2:3 | ~4:5 |
| Miniaturas | horizontal 3:2 | 16:9, o ~2,6:1 cuando la fila tiene 2 |

## Portada y aperturas de región

### `portada`
**Formato:** vertical 2:3 (página completa: arriba va el logo y abajo el título en blanco, dejá cielo limpio arriba y suelo oscuro abajo)
Photorealistic editorial travel photograph of a modern white camper van parked on the gravel shoulder of the Ruta 40 in Argentina at golden hour. A long, empty, perfectly straight road runs toward the horizon through dry steppe with low golden shrubs; snow-capped Andes rise in the distance. Warm, low side light, long soft shadows, a few thin high clouds. The van sits in the lower third, slightly off-center; the upper half is open sky with a gentle warm-to-blue gradient. Shot with a 35 mm lens at eye level, deep depth of field. Natural colors, high detail, no people, no text, no watermark, no logos, no brand names on the van.

### `NOR-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha: el cerro en el centro)
Photorealistic editorial travel photograph of the Cerro de los Siete Colores in Purmamarca, Jujuy, Argentina: a folded mountain striped in red, ochre, purple, pink and green rock layers, rising behind low adobe houses and tall columnar cardón cacti. Deep blue high-altitude sky, crisp early-morning side light that makes the colored strata glow. Wide shot from the edge of the village, 24 mm lens. Natural colors, high detail, no people, no text, no watermark, no logos.

### `LIT-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha: las cataratas en el centro)
Photorealistic editorial travel photograph of the Iguazú Falls, Misiones, Argentina: dozens of wide waterfalls pouring over basalt ledges in a horseshoe, surrounded by dense green subtropical rainforest, mist rising and catching a soft rainbow. Morning light, clear sky with a few white clouds. Wide panoramic composition from the upper walkways, 24 mm lens. Natural lush greens and reddish-brown river water, high detail, no people, no text, no watermark, no logos.

### `CUY-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha: la montaña en el centro)
Photorealistic editorial travel photograph of the Aconcagua south face seen from the Laguna de Horcones, Mendoza, Argentina: the massive snow- and ice-covered peak at the end of a dry valley, a small turquoise lagoon reflecting it in the foreground, brown and ochre slopes with sparse yellow tussock grass. Clear early-morning light, deep blue sky. Wide shot, 28 mm lens. Natural colors, high detail, no people, no text, no watermark, no logos.

### `COR-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha)
Photorealistic editorial travel photograph of the Sierras de Córdoba, Argentina, from the Camino de las Altas Cumbres: rolling granite highlands covered in golden tussock grass, rounded boulders in the foreground, a winding paved road descending toward a wide valley, layered blue ridges fading into the distance. Late-afternoon golden light, a few clouds casting shadows. Wide shot, 28 mm lens. Natural warm colors, high detail, no people, no text, no watermark, no logos.

### `AND-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha: lago y volcán en el centro)
Photorealistic editorial travel photograph of the Lanín volcano, Neuquén, Argentina: a perfect snow-capped cone rising above a calm deep-blue lake, slopes covered with dark green southern beech forest (Nothofagus) and, in the foreground, a few monkey-puzzle trees (Araucaria araucana) with their umbrella-shaped crowns of upturned spiky branches. Clear morning light, still water with reflections. Wide shot, 24 mm lens. Natural colors, high detail, no people, no text, no watermark, no logos.

### `AUS-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha: los picos en el centro)
Photorealistic editorial travel photograph of the Fitz Roy massif near El Chaltén, Santa Cruz, Argentina, at sunrise: sheer granite spires lit pink and orange by the first sun ("alpenglow"), glaciers below them, a forest of lenga trees (Nothofagus pumilio) in autumn red and orange in the foreground, wind-swept lenticular clouds. Wide shot, 35 mm lens. Natural colors, high detail, no people, no text, no watermark, no logos.

### `BSA-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha)
Photorealistic editorial travel photograph of the Sierra de la Ventana, Buenos Aires province, Argentina: low rocky quartzite ridges in grey and ochre rising above golden pampas grassland, the Cerro de la Ventana with its natural window-like hole near the summit visible on the skyline, scattered fence posts and a dirt track in the foreground. Late-afternoon golden light, big sky with soft clouds. Wide shot, 35 mm lens. Natural colors, high detail, no people, no text, no watermark, no logos.

### `BSA-P-apertura`
**Formato:** horizontal 3:2 (se recorta a una franja ancha)
Photorealistic editorial travel photograph of a small pampas town in Buenos Aires province, Argentina, at golden hour: a dirt street lined with old low brick houses with high doors and iron grilles, a 19th-century corner general store ("almacén de ramos generales") with wooden shutters, tall eucalyptus trees and an old windmill behind, endless flat green fields beyond. Warm low light, long shadows, calm and nostalgic mood. Wide shot, 35 mm lens. Natural colors, high detail, no people, no text, no readable signs, no watermark, no logos.

## Norte argentino (NOR-01 a NOR-03)

### `NOR-01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a montane cloud forest of Andean alder trees (Alnus acuminata) on the eastern slope of the Aconquija range, Tucumán, Argentina: pale grey trunks, mist drifting between them, mossy ground and ferns, soft diffuse morning light filtering through. Wide shot, 35 mm lens. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-01-ciudacita`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of Inca stone ruins above 4,000 m on the Aconquija range, Tucumán, Argentina (La Ciudacita): low rectangular dry-stone walls on a high Andean grassland plateau with yellow tussock grass, rocky peaks with patches of snow behind, thin cold clear light, deep blue sky. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-01-taruca`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a taruca, the north Andean deer (Hippocamelus antisensis): stocky grey-brown deer with large rounded ears and a dark Y-shaped marking on the face; males with short forked antlers. Standing on a rocky high-Andean slope with tussock grass, telephoto lens, soft natural light, background out of focus. Natural colors, high detail, no text, no watermark, no logos.

### `NOR-01-aliso`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of Andean alder (Alnus acuminata) branches: oval, serrated, bright green leaves and small woody cone-like catkins, misty forest background out of focus, soft light. Natural colors, high detail, no text, no watermark, no logos.

### `NOR-01-amancay`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of an amancay flower in the Tucumán yungas, green montane forest background out of focus, soft light. Natural colors, high detail, no text, no watermark, no logos.
**Antes de generarla, confirmá con el parque qué especie llaman "amancay" ahí:** no es la misma flor que el amancay amarillo de la Patagonia.

### `NOR-02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the menhirs of Tafí del Valle at El Mollar, Tucumán, Argentina: several tall grey standing stones on a green grassy hill, La Angostura reservoir and rounded green mountains behind, clear afternoon light, a few clouds. Wide shot, 35 mm lens. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-02-menhir`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up of a tall grey granite menhir from the Tafí culture with a simple carved human face and geometric lines, soft raking afternoon light that reveals the carving, green hill background out of focus. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-02-los-sosa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Quebrada de Los Sosa, Tucumán, Argentina: a winding mountain road along a boulder-filled river, dense green subtropical cloud forest with ferns and epiphytes on the steep slopes, light mist. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-02-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of an Andean condor (Vultur gryphus) soaring: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head (not white-headed like an eagle), wide fingered wingtips. Blue sky over dry Andean ridges, telephoto lens. Natural colors, high detail, no text, no watermark, no logos.

### `NOR-02-infiernillo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Abra del Infiernillo mountain pass, Tucumán, Argentina, at 3,042 m: dry high-altitude grassland with scattered cardón cacti, a paved road winding over the pass, wide open sky. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Ruins of Quilmes (Ciudad Sagrada de los Quilmes), Tucumán, Argentina: terraces and low dry-stone walls climbing a rocky hillside dotted with tall cardón cacti, the dry Calchaquí valley spreading below, strong clear late-afternoon light. Wide shot. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-03-pirca`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up of an ancient dry-stone wall (pirca) at the Quilmes ruins: stacked flat stones without mortar, a tall cardón cactus behind it, dry rocky hillside, warm light. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-03-cardon`
**Formato:** horizontal 3:2 (se recorta a una franja muy angosta, ~2,6:1: el motivo en el centro)
Photorealistic editorial travel photograph of tall columnar cardón cacti (Leucostele terscheckii, many-armed, ribbed, up to 10 m tall) on a dry rocky slope of the Calchaquí Valleys, Argentina, blue sky. Natural colors, high detail, no people, no text, no watermark, no logos.

### `NOR-03-centro`
**Formato:** horizontal 3:2 (se recorta a una franja muy angosta, ~2,6:1)
Photorealistic photograph of a small museum display of ancient Diaguita ceramics (painted urns with geometric black-and-red motifs) in warm light. Natural colors, high detail, no people, no text, no watermark, no logos.
**Mejor foto real del lugar.**

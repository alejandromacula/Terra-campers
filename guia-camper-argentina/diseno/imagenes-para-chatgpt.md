# Imágenes de la Guía de Ruta Terra Campers — prompts para ChatGPT

La guía usa **735 imágenes**. Cada una tiene abajo un prompt en inglés (los generadores responden mejor así) y su formato.

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
- **188 imágenes** llevan la nota **"Mejor foto real del lugar"**: son negocios, edificios o museos concretos. Una imagen generada no se va a parecer al lugar real; conviene pedir una foto al lugar (sirve para el convenio) o sacarla vos.

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

---

## Norte argentino

### `NOR-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of high-altitude vineyards of Torrontés grapes on the floor of the Calchaquí Valley around Cafayate, Salta, Argentina, at about 1,700 m: long straight rows of green vines on sandy soil, dry ochre and reddish mountain ranges closing the valley behind, a few scattered green shrubs at the edge of the vineyard. Late afternoon golden light raking across the rows, long soft shadows, clear deep-blue sky. Wide-angle landscape, vine rows leading the eye toward the mountains, horizon and main subject in the central horizontal band. Warm, natural palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-04-torrontes`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of a ripe bunch of Torrontés grapes (Vitis vinifera, white variety) hanging on the vine in Cafayate, Argentina: medium-sized, fairly loose cluster of round golden-green to pale amber berries with a light natural bloom, broad lobed green vine leaves around it. Soft late-afternoon backlight making the berries glow, shallow depth of field with the dry valley and vine rows blurred behind. Warm, natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-04-museo-vino`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a small wine museum in a northern Argentine valley town: old wooden wine press, antique oak barrels, clay vessels and vintage winemaking tools displayed on whitewashed adobe walls, warm museum lighting. Medium shot with gentle depth of field. Warm, natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-04-jarilla`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of jarilla (Larrea divaricata) in bloom in the dry Monte scrubland of the Calchaquí Valley, Salta, Argentina: dense evergreen shrub with tiny paired, glossy, resinous bright-green leaflets and small yellow five-petaled star-shaped flowers along the twigs. Soft morning light, shallow depth of field, sandy soil and arid mountains blurred in the background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-04-zorro-gris`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a South American grey fox, zorro gris (Lycalopex griseus), in the dry Monte scrub of the Calchaquí Valley, Argentina: small slender fox with grizzled silver-grey back, pale buff-tan legs and ears, white throat, small dark spot on the chin and a bushy grey tail with a black tip — not a red fox, no orange body. Standing alert among low shrubs and sandy ground, early-morning soft light, telephoto lens, background softly blurred. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Quebrada de las Conchas, Salta, Argentina: the paved Ruta Nacional 68 winding along a dry riverbed through a canyon of tilted, deep red and orange sandstone walls, eroded ridges and pinnacles, sparse green shrubs and a few columnar cardón cacti on the slopes. Late afternoon warm sidelight intensifying the red rock, clear blue sky. Wide-angle landscape from a roadside viewpoint, road and canyon in the central horizontal band. Warm, natural palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-05-anfiteatro`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph inside El Anfiteatro, Quebrada de las Conchas, Salta, Argentina: a narrow, enclosed side gorge with towering vertical walls of layered red sandstone curving around a sandy floor, a slit of blue sky high above. Soft indirect light bouncing off the red walls, low wide-angle viewpoint looking up to show the height. One small person standing on the sandy floor for scale. Warm natural palette. Natural colors, high detail, no text, no watermark, no logos.

### `NOR-05-garganta`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Garganta del Diablo in the Quebrada de las Conchas, Salta, Argentina: a deep, narrow cleft carved by water into red sandstone, with smooth, rounded walls that keep the shape of an ancient dry waterfall, layered rock bands in red, ochre and pink. Soft diffuse light inside the gorge, wide-angle composition looking up the chute. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-05-castillos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Los Castillos in the Quebrada de las Conchas, Salta, Argentina: tall eroded red sandstone formations and pinnacles rising above the dry slopes beside Ruta 68, sparse green shrubs at their base. Golden hour light, warm tones, medium telephoto view that compresses the formations. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-05-quirquincho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a screaming hairy armadillo, quirquincho chico (Chaetophractus vellerosus): small armadillo with a flattened banded carapace, long pale whitish hairs sticking out between the bands and along the sides, pointed head with a small head shield, short legs with strong claws. On sandy ground among dry shrubs of the Monte at dusk, soft low light, low camera angle, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the city of Salta, Argentina, seen from the summit of Cerro San Bernardo at sunset: the city grid spreading across the green Lerma Valley, church domes and low rooftops, surrounded by ranges of mountains on all sides, first city lights turning on. Warm sunset light with a soft pink and orange sky. Wide panoramic view, city and valley in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-06-ofrendas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic museum photograph of Inca ritual offerings in a glass display case: tiny human figurines made of gold, silver and red spondylus shell dressed in miniature woven textiles with feathered headdresses, small llama figurines, against a dark background with soft spotlighting. Close-up, shallow depth of field, rich but natural tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-06-teleferico`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of small cable car cabins gliding on a cable up a green wooded hillside above a city in a mountain valley in northern Argentina, the town rooftops visible below and mountains behind. Clear late-afternoon light, medium telephoto composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-06-plaza`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a colonial main square in northern Argentina: palm trees and green gardens in the plaza, a pink-and-cream neoclassical cathedral facade with twin bell towers, colonial arcades around the square. Warm early-evening light, wide-angle composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-06-xamena`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an enormous rectangular public swimming pool, as large as a lake, with turquoise water, surrounded by trees and lawns in a green valley at the edge of a city, mountains in the background. Bright summer afternoon light, elevated wide view showing its huge size. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Recta de Tin Tin in Los Cardones National Park, Salta, Argentina: a perfectly straight road running for kilometres across a high, dry plateau above 3,000 m, flanked by hundreds of giant columnar cardón cacti, bare brown and ochre mountains on the horizon. Late afternoon golden light with long cactus shadows, deep blue sky. Wide-angle view along the road, road vanishing point and cacti in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-07-pasacana`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of a giant cardón or pasacana cactus (Leucostele atacamensis, syn. Trichocereus atacamensis) in Los Cardones National Park, Argentina: massive ribbed column branching like a candelabra, covered in dense long yellowish spines, large white funnel-shaped flowers near the top of the stems. Low-angle view from the base to emphasise its almost 15 m height, clear deep-blue sky, soft morning light. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-07-cuesta-obispo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Cuesta del Obispo, Salta, Argentina, seen from above: a mountain road zigzagging in tight hairpin bends down a steep green and brown slope into the Quebrada de Escoipe, layered ridges fading into the distance, a few clouds below the peaks. Soft morning light, elevated wide view. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-07-ojo-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a short gravel footpath winding between giant columnar cardón cacti on a high Andean slope in Los Cardones National Park, Argentina, low dry shrubs and bare mountains behind. Warm late-afternoon light, medium wide composition at eye level. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-07-gato-andino`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of an Andean cat, gato andino (Leopardus jacobita): small wild cat with thick ash-grey fur marked with brownish-orange vertical spots and stripes, pale belly, and a very long, thick, bushy tail with 6 to 9 wide dark rings — not a domestic cat, not a Geoffroy's cat. Crouching on bare rocks of a high-Andean slope with sparse tussock grass, soft overcast light, telephoto with blurred background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a small whitewashed adobe colonial church on the main square of an Andean village in the Calchaquí Valleys, Salta, Argentina: simple white facade with a bell gable, low adobe houses beside it, dry hills with cardón cacti behind and a large snow-capped mountain (Nevado de Cachi) on the horizon. Clear morning light, deep blue sky. Wide composition, church and snowy peak in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-08-techo-cardon`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic interior photograph of a ceiling made of cardón cactus wood in an old adobe church in northern Argentina: pale, porous, honeycomb-patterned slats of dried cactus wood laid over rustic beams, whitewashed adobe walls below, warm light coming in from a small window. Looking up, detail of the texture with soft shadows. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-08-calle-adobe`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a quiet cobbled street in an Andean village in the Calchaquí Valleys, Argentina: low whitewashed adobe houses with wooden doors and windows, dry mountains rising at the end of the street. Warm late-afternoon light, eye-level composition with the street leading toward the hills. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-08-nevado`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic landscape photograph of the Nevado de Cachi, Salta, Argentina: a massive snow-capped mountain range rising above the dry, high Calchaquí Valley, foreground of arid slopes dotted with columnar cardón cacti and green fields along the river. Clear early-morning light, telephoto compression to make the peak loom large. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-08-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a guanaco (Lama guanicoe) in the high Calchaquí Valleys, Argentina: slender camelid with reddish-cinnamon upper body, white belly and inner legs, grey-black face and pointed ears — not a llama, not a vicuña. Standing on a dry slope among cardón cacti and low shrubs, soft morning light, telephoto, blurred mountain background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the La Polvorilla viaduct near San Antonio de los Cobres, Salta, Argentina, at 4,220 m: a long, curved steel railway viaduct on slender lattice steel pylons spanning a dry ravine of the Puna, with a red-and-white tourist train crossing it, brown and ochre treeless high-altitude hills around. Crisp clear midday-to-afternoon light, intense deep-blue sky. Wide view from the side, viaduct across the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-09-cielo-puna`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic night photograph of the sky over the high Puna desert of Salta, Argentina, near 4,900 m: the Milky Way core arching vertically over a dark, barren high-altitude plateau, thousands of stars, a small silhouetted observatory dome or radio dish on a distant ridge. Very dark, clear, dry sky, long exposure, wide-angle lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-09-quebrada-toro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Quebrada del Toro, Salta, Argentina: a narrow mountain valley with a road and an old railway line running side by side along a stony riverbed, steep slopes in reds, greens and ochres with scattered cardón cacti. Soft morning light, wide-angle composition following the road and tracks. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-09-estacion`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small, simple railway station in a high Andean mining town of the Argentine Puna: a low building beside the tracks, an old passenger train waiting at the platform, bare brown hills and deep-blue sky behind. Clear, crisp high-altitude light, medium wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-09-zorro-colorado`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a culpeo or Andean fox, zorro colorado (Lycalopex culpaeus), in the Puna of Argentina: medium-large fox with a reddish-tawny head, ears and legs, grizzled grey back, white throat and chin, and a long bushy tail with a black tip. Standing on high-altitude steppe with yellow tussock grass, cold clear morning light, telephoto with blurred background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Salinas Grandes, Jujuy, Argentina, at 3,450 m: rectangular salt-extraction pools of turquoise water cut into a vast, flat, bright white salt crust with polygonal patterns, brown mountains on the far horizon. Clear afternoon light, deep blue sky, low wide-angle viewpoint with the pools leading the eye, horizon in the central band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-10-panes-sal`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of hand-cut blocks of salt stacked in neat piles on the white salt flat of Salinas Grandes, Jujuy, Argentina, rough crystalline texture of the blocks, a few salt-harvesting tools leaning against them, the flat white plain stretching to distant mountains. Strong clear high-altitude light, close-medium shot. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-10-lipan`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the Cuesta de Lipán, Jujuy, Argentina, seen from above: a paved road snaking in many tight hairpin bends up a steep, bare mountainside of red, ochre and greenish rock toward 4,170 m. Clear morning light, deep blue sky, elevated wide view. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-10-salar-espejo`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic landscape photograph of Salinas Grandes, Jujuy, Argentina, in the rainy season: a thin sheet of water over the white salt flat forming a perfect mirror that reflects a snow-dusted mountain (Nevado de Chañi) and the sky with scattered white clouds. Soft late-afternoon light, symmetrical composition with the horizon in the middle. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Cerro de los Siete Colores in Purmamarca, Jujuy, Argentina: a striped mountain with bands of violet, pink, green, ochre and red rising behind the flat earthen roofs of adobe houses and tall cardón cacti. Early morning side light bringing out each band, clear deep-blue sky. Wide composition from a small hill above the village, rooftops and striped mountain in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-11-franjas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up landscape photograph of the folded, multicolored rock layers of the Cerro de los Siete Colores, Purmamarca, Argentina: tilted bands of violet, rose, green, mustard ochre and brick red stacked across the slope, eroded gullies cutting through them. Telephoto detail shot, soft late-afternoon light. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-11-colorados`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the Paseo de los Colorados near Purmamarca, Jujuy, Argentina: a dirt trail winding between eroded deep-red and orange rock formations and spires, scattered cardón cacti and dry shrubs. Golden late-afternoon light making the red rock glow, wide-angle view along the path. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-11-calle-adobe`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a narrow dirt street in Purmamarca, Jujuy, Argentina: low earthen adobe houses with wooden doors, a colorful striped mountain visible at the end of the street. Warm morning light, eye-level view. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Pucará de Tilcara, Jujuy, Argentina: a pre-Hispanic hilltop settlement of low rectangular dry-stone (pirca) enclosures climbing a rocky hill dotted with tall cardón cacti, the wide gravelly bed of the Río Grande and the multicolored mountains of the Quebrada de Humahuaca behind. Clear late-morning light, deep blue sky. Wide elevated view from near the top, ruins and valley in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-12-recintos`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a partially reconstructed pre-Hispanic stone house in an Andean hilltop fortress: rectangular walls of stacked flat stones without mortar, a low doorway, a flat roof of cactus-wood beams and mud, a tall cardón cactus beside it, colored mountains blurred behind. Warm side light that reveals the stone texture. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-12-monumento`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a simple stone monument shaped like a truncated pyramid standing on the summit of a rocky hill among pre-Hispanic dry-stone ruins and cardón cacti, the wide Quebrada de Humahuaca valley behind. Clear afternoon light, deep blue sky. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-12-jardin-botanico`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a high-altitude botanical garden in the Quebrada de Humahuaca, Argentina: columnar cardón cacti, low cushion cacti, spiny shrubs and yellow tussock grasses arranged along a stone-lined path, dry rocky hill behind. Soft morning light, medium wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-12-museo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a small archaeological museum in an Andean town of northern Argentina: glass cases with ancient painted ceramic vessels, stone tools and textiles, whitewashed walls and a colonial wooden ceiling, warm soft lighting. Medium shot, gentle depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Serranía de Hornocal near Humahuaca, Jujuy, Argentina, seen from the viewpoint at 4,350 m: a long mountain range folded into sharp zigzag triangular "teeth" of alternating colored layers — magenta, ochre, mustard yellow, green and purple — above a dry valley with yellow puna grass in the foreground. Afternoon light striking the face of the range, deep blue sky. Wide panoramic view, the zigzag ridge across the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-13-dientes`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic telephoto landscape photograph of a detail of the Serranía de Hornocal, Jujuy, Argentina: two or three sharp triangular folds of limestone layers in vivid but natural bands of magenta, ochre, cream, green and purple, eroded gullies running down them. Warm afternoon light, crisp detail. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-13-monumento`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a large stone and bronze independence monument on top of a hill in an Andean town of northern Argentina, reached by a wide, long stone staircase rising from the town square, low adobe houses around and dry mountains behind. Clear morning light, deep blue sky. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-13-calle`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a narrow cobblestone street in Humahuaca, Jujuy, Argentina: old whitewashed adobe houses with wooden doors, iron lanterns and balconies, a dry brown hill at the end of the street. Warm late-afternoon light, eye-level composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-14-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the village of Iruya, Salta, Argentina, seen from the viewpoint across the valley: small adobe houses stacked on a steep slope at the bottom of a narrow gorge, a white church with a bell tower standing out among them, almost vertical brown and reddish mountain walls rising on all sides, a stony riverbed below. Soft morning light, wide view, village in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-14-iglesia`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small colonial Andean church in a mountain village of northern Argentina: whitewashed adobe facade, a single bell tower, wooden door, steep brown mountain slope rising directly behind. Clear morning light, deep blue sky, vertical composition from the small square in front. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-14-abra-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Abra del Cóndor, a high mountain pass at about 4,000 m on the border between Jujuy and Salta, Argentina: a narrow gravel road cresting a bare ridge and then dropping in a cliff-hanging ledge into a deep gorge, layered ridges in browns, reds and greens beyond. Clear crisp light, wide elevated view. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-14-san-isidro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a footpath following a wide stony riverbed up a narrow Andean gorge toward a tiny hamlet of adobe houses perched on a slope, steep reddish mountains on both sides. Soft morning light, wide-angle composition along the trail. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-14-cachis`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a traditional Andean masked dance at a village patron-saint festival in northern Argentina: several dancers (people stated) in traditional colorful Andean festival clothing dancing in a line in front of a whitewashed adobe church, mountains behind. Bright clear daylight, medium shot from a distance freezing the movement, faces not in close-up. Natural colors, high detail, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-15-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic wildlife and landscape photograph of the Laguna de los Pozuelos, Jujuy, Argentina: a large flock of hundreds of pink flamingos wading in shallow, still water along the shore of a wide lagoon in the high Puna, yellow tussock steppe and rounded brown mountains on the horizon. Soft early-morning light, telephoto from the shore, the flock and horizon in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-15-parina-grande`
**Formato:** vertical 2:3 (se recorta a 4:5)
Wildlife photograph of an Andean flamingo, parina grande (Phoenicoparrus andinus), in a shallow Puna lagoon: pale pink body with a deeper pink neck and breast, a large black triangular patch on the rear when the wings are folded, bright yellow legs, and a bill that is pale yellow at the base and black on the front half — not orange-red overall. Standing in calm water with its reflection, soft morning light, telephoto, blurred steppe behind. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-15-parina-chica`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of James's flamingo, parina chica (Phoenicoparrus jamesi), the smallest of the three Andean flamingos: pale pink plumage with bright crimson streaks on the neck base and back, bright brick-red legs, and a short bright yellow bill with a small black tip. A small group feeding in a shallow high-Andean lagoon, soft light, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-15-flamenco-austral`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a Chilean flamingo, flamenco austral (Phoenicopterus chilensis): pale salmon-pink plumage, long grey-greenish legs with distinctly pink knee joints and feet, and a whitish-pink bill with black covering more than half of it. Wading in a shallow lagoon of the Argentine Puna, soft morning light, telephoto, reflections on calm water. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-15-suri`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a Puna rhea, suri (Rhea pennata tarapacensis / Rhea tarapacensis): large flightless bird with grey-brown plumage finely flecked with white spots on the back and wings, long neck, and relatively short legs partly feathered at the top — not an ostrich, no black-and-white plumage. Walking across yellow tussock steppe of the high Puna, cold clear light, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-16-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the yungas cloud forest in Calilegua National Park, Jujuy, Argentina, seen from Provincial Route 83: steep mountain slopes covered in dense, layered subtropical forest in many shades of green, mist and low clouds drifting between the ridges, a gravel road ledge in the lower part of the frame. Soft diffuse light after rain. Wide view, forested ridges and mist in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-16-mono-cai`
**Formato:** vertical 2:3 (se recorta a 4:5)
Wildlife photograph of a hooded capuchin monkey, mono caí (Sapajus cay): medium-sized brown monkey with darker limbs and tail, a black cap on the head forming two small tufts, paler buff face sides and shoulders. Sitting on a mossy branch high in the canopy of a subtropical montane forest, soft diffuse light, telephoto, green bokeh background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-16-tipa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic botanical photograph of a tipa tree (Tipuana tipu) in the foothill forest of the yungas, Jujuy, Argentina: large spreading tree with a broad crown of fine pinnate leaves covered in yellow-orange pea-like flowers, surrounded by green forest. Soft morning light, medium wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-16-tapir`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a South American tapir, anta (Tapirus terrestris): large, heavy-bodied dark brown-grey animal with a short prehensile trunk-like snout, a short bristly mane along the neck, and rounded ears edged in white. Standing at the edge of a muddy stream in dense subtropical forest at dusk, soft low light, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-16-pino-cerro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic botanical photograph of pino del cerro (Podocarpus parlatorei), a native conifer of the Andean montane forest: evergreen tree with narrow, flat, linear dark-green leaves arranged spirally along the twigs — not a true pine, no needle bundles or pine cones. Growing on a misty mountain slope with alders and moss, soft diffuse light. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-17-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Baritú National Park, Salta, Argentina: very steep mountain slopes completely covered in dense, humid, tropical-looking montane forest, low clouds hanging in the valley and wrapping the ridges, a river glimpsed at the bottom. Soft diffuse light, wide view, forest and clouds in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-17-yaguarete`
**Formato:** vertical 2:3 (se recorta a 4:5)
Wildlife photograph of a jaguar, yaguareté (Panthera onca): powerful stocky big cat with a broad head and golden-tawny coat covered in large black rosettes that have small black spots inside them — not a leopard, not a cheetah. Walking along a stream bank in dense subtropical forest, dappled soft light, telephoto, green background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-17-cruce-bermejo`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a river border crossing in subtropical northern Argentina: a road bridge over a wide brown river, simple customs buildings on the riverbank, green forested hills on both sides. Soft overcast light, wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-17-lipeo`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a small, rustic park ranger station in a remote jungle valley of northern Argentina: a simple single-storey building with a tin roof and a wooden porch at the edge of dense green forest, a dirt road in front. Soft diffuse light, medium wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-18-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of El Rey National Park, Salta, Argentina: forested sierras of the yungas rising in layers above a green valley with open grassland, mist clinging to the slopes and drifting over the canopy. Soft early-morning light. Wide view, sierras and mist in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-18-los-patitos`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small, calm forest lagoon in El Rey National Park, Salta, Argentina: still dark water edged with reeds and aquatic plants, a few waterbirds on the surface, surrounded by lush subtropical montane forest reflected in the water. Soft morning light, vertical composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-18-pecari`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a herd of white-lipped peccaries, pecarí labiado (Tayassu pecari): pig-like animals with coarse dark blackish-brown hair and a distinct white patch on the lower jaw and lips — not a collared peccary, no pale collar band. Moving through the undergrowth of a humid subtropical forest, soft diffuse light, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-18-pava-monte`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a dusky-legged guan, pava de monte (Penelope obscura): large dark olive-brown bird with a long broad tail, whitish edges on the neck and breast feathers, a bare bright red dewlap on the throat and dark legs. Perched on a mossy branch in a montane forest, soft light, telephoto, green blurred background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-18-charata`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a chaco chachalaca, charata (Ortalis canicollis): slim brown bird with a grey head and neck, a small patch of bare reddish skin on the throat, and a long tail with rufous-chestnut outer feathers. Perched on a branch at the edge of a subtropical forest, calling with its beak open, soft morning light, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-19-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Campo de Piedra Pómez, Catamarca, Argentina, at 3,300 m: endless rows of white and cream wind-carved pumice ridges and spires (yardangs) aligned in the same direction, some surfaces darkened with a brownish patina, dark volcanic peaks on the horizon. Low late-afternoon light casting long shadows that sculpt every ridge, intense deep-blue Puna sky. Wide-angle view, ridges and horizon in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-19-pomez`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of white pumice rock in the high Puna of Catamarca, Argentina: light, porous volcanic stone full of tiny holes and bubbles, sculpted into smooth wind-polished curves and grooves, a thin brownish patina on part of the surface. Low raking afternoon light revealing the texture, white ridges blurred behind. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-19-carachi-pampa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic landscape photograph of the Carachi Pampa volcano in the Puna of Catamarca, Argentina: a dark, almost black volcanic cone rising from a pale, flat high-altitude plain, black lava fields at its base, distant mountains behind. Clear crisp light, deep blue sky, wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-19-flamencos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a small group of pink flamingos wading in a shallow, still lagoon in the high Puna of Catamarca, Argentina, white salt edges on the shore and barren volcanic mountains behind, reflections on the water. Soft early-morning light, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos. **Antes de generarla, preguntá en las excursiones de El Peñón qué especie se ve en esas lagunas** y sumá los rasgos de esa especie (ver los prompts de `NOR-15`).

### `NOR-19-el-penon`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a tiny Puna village in Catamarca, Argentina: a handful of low adobe houses with flat earthen roofs, a few poplar trees, stone walls, a dirt road, and vast barren high-altitude plains and volcanic peaks around. Warm late-afternoon light, wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-20-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Ruta Nacional 60, the Ruta de los Seismiles, in the Puna of Catamarca, Argentina: an empty paved road crossing a vast, barren high-altitude plain toward a huge snow-capped volcanic massif (Monte Pissis) on the horizon, other volcanoes along the skyline. Clear morning light, intense deep-blue sky. Wide-angle view along the road, road and volcano in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-20-termas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of terraced natural hot-spring pools cascading down a dry mountain ravine in Catamarca, Argentina: a series of stepped stone-edged pools of warm, slightly steaming water, each spilling into the next, dry hills and a few shrubs around. Early-morning soft light with gentle steam, vertical composition from the top looking down the terraces. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-20-dunas-saujil`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic landscape photograph of the Saujil dunes near Fiambalá, Catamarca, Argentina: huge golden sand dunes over 90 m high with sharp, wind-shaped crests, barren mountains rising behind. Early-morning low light carving strong light-and-shadow patterns on the dune ridges, clear blue sky, wide composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `NOR-20-san-pedro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an 18th-century adobe church in a small village of western Catamarca, Argentina: thick whitewashed earthen walls, a simple facade with a bell gable, wooden doors, poplars and dry mountains behind. Warm late-afternoon light, deep blue sky, eye-level composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `NOR-20-vicuna`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a small herd of vicuñas (Vicugna vicugna) beside a high-altitude road in the Puna of Catamarca, Argentina: slender, delicate camelids with bright cinnamon-fawn backs, white underparts and a long white bib of hair on the chest, small heads with no grey face — not llamas, not guanacos. Grazing on sparse yellow tussock grass, snow-capped volcanoes behind, crisp morning light, telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

---

## Litoral

### `LIT-01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a carnival comparsa parading at night in the Corsódromo of Gualeguaychú, Entre Ríos, Argentina: a line of dancers in huge feathered headdresses and sequined costumes in gold, magenta and turquoise moving along a long straight parade track, a large illuminated carnival float behind them, packed grandstands softly blurred on both sides. Night scene lit by warm stage spotlights and colored LEDs, glitter and feathers catching the light, slight motion blur on the plumes. Wide shot from the side of the track at mid-height, the dancers and float filling the central horizontal band. Vivid but natural festival colors, not oversaturated. People: carnival dancers in costume, faces not in close-up. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-01-nandubay`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a ñandubay tree (Prosopis affinis), a small thorny native mesquite of the Espinal woodland of Entre Ríos, Argentina: a short, twisted, dark-barked trunk, a low wide umbrella-shaped crown of fine feathery bipinnate leaves, small paired spines on the branches, standing in a grassy open field near the Uruguay River. Warm late-afternoon light, long soft shadows. Vertical composition with the whole tree in frame, slightly low camera angle, background softly out of focus. Warm natural palette of olive greens and golden grass. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-01-playa-nandubaysal`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Ñandubaysal beach on the Uruguay River near Gualeguaychú, Entre Ríos, Argentina: a wide beach of soft golden sand sloping gently into calm brownish river water, willow trees and low native woodland along the shore, the far Uruguayan bank as a thin green line on the horizon. Soft golden morning light, a few white clouds, glassy water. Wide-angle shot from the sand, horizon in the middle. Warm, natural summer palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-01-carpincho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a capybara (Hydrochoerus hydrochaeris) standing at the muddy edge of a marsh on the Uruguay River, Entre Ríos, Argentina: large barrel-shaped rodent with coarse reddish-brown fur, blunt square muzzle, small rounded ears, no visible tail, wet legs, reeds and floating water plants around it. Soft early-morning light, calm water reflections. Telephoto lens at animal eye level, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-01-nandu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a greater rhea (Rhea americana) walking through open grassland in Entre Ríos, Argentina: tall flightless bird with grey-brown shaggy plumage, long bare legs with three toes, long neck with a darker band at the base, small head — not an ostrich, no black-and-white plumage, no pink neck. Tall golden grass, a few scattered trees on the horizon, soft late-afternoon light. Telephoto lens, bird in sharp focus, background softly blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the central courtyard of a grand 19th-century Italianate country palace in Entre Ríos, Argentina (Palacio San José): a square patio surrounded by white arched galleries with slender columns on two levels, terracotta-red details, a central well or fountain, terracotta-tiled floor, a few palm trees and green lawn. Warm soft afternoon light raking through the arches, long shadows on the tiles, clear blue sky. Wide symmetrical shot from one corner of the gallery, arches framing the scene in the central band. Warm, elegant palette of white, terracotta and green. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `LIT-02-oratorio`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial interior photograph of a small private 19th-century oratory in an Argentine historic country house: a simple wooden altar with a crucifix and candlesticks, whitewashed walls, an old wooden door half-open, a dark wooden floor, soft daylight entering from a tall shuttered window. Quiet, solemn atmosphere. Vertical composition from the doorway, gentle window light, deep shadows. Muted warm palette of white, brown and gold. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `LIT-02-termas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of outdoor thermal pools on the bank of the Uruguay River in Colón, Entre Ríos, Argentina: several clean turquoise hot-spring pools with light steam rising, green lawns and leafy trees around them, the wide river visible in the background. Soft early-morning light with mist over the water. Wide shot from a slightly elevated position. Calm, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `LIT-02-costanera`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic editorial travel photograph of the riverside promenade of Colón, Entre Ríos, Argentina: a wide sandy beach along the Uruguay River, tall shade trees lining a riverside walkway, calm water and the green Uruguayan shore on the far horizon. Warm golden-hour light, soft clouds. Wide panoramic composition with the beach and river in a thin central band. Warm natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the yatay palm savanna of El Palmar National Park, Entre Ríos, Argentina, seen from a viewpoint at sunset: hundreds of tall slender yatay palms (Butia yatay) with grey-brown trunks and round crowns of arching blue-green fronds scattered across rolling golden grassland, their silhouettes stretching to the horizon. Low warm sun, orange and pink sky, long shadows across the grass. Wide-angle panoramic view, the palm line in the central horizontal band. Warm, natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-03-yatay`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up botanical photograph of a yatay palm (Butia yatay) in El Palmar, Entre Ríos, Argentina: a thick grey trunk covered with the old cut bases of fallen leaves, a crown of stiff arching pinnate blue-green fronds, and a heavy hanging bunch of small oval orange-yellow fruits under the crown — a feather-leaf palm, not a coconut palm. Soft late-afternoon side light, clear sky. Vertical composition from below, crown and fruit cluster in sharp focus. Natural warm palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-03-carpincho`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic wildlife photograph of a family of capybaras (Hydrochoerus hydrochaeris) resting on the grassy bank of a slow creek (arroyo Los Loros, El Palmar, Argentina): large barrel-shaped rodents with coarse reddish-brown fur, blunt square muzzles, small rounded ears, two young beside an adult, riverside gallery forest behind. Soft morning light, calm water. Telephoto lens, low angle, shallow depth of field, animals in a central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-03-nandu`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic wildlife photograph of a greater rhea (Rhea americana) in open grassland among scattered yatay palms in El Palmar, Entre Ríos, Argentina: tall flightless bird with grey-brown shaggy plumage, long bare legs, long neck with a darker band at the base — not an ostrich, no black-and-white plumage. Golden grass, soft late-afternoon light. Telephoto lens, bird and palms in a wide central band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Laguna Iberá, Esteros del Iberá, Corrientes, Argentina, at sunset seen from a small boat: a vast calm lagoon reflecting an orange and violet sky, low floating islands of grasses and reeds (embalsados) scattered on the water, a thin dark line of gallery forest on the far shore. Warm low sun near the horizon, mirror-like water. Wide-angle panoramic view at water level, horizon and floating islands in the central horizontal band. Warm, natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-04-yacare`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a yacare caiman (Caiman yacare) resting half-submerged among floating water plants in the Iberá wetlands, Corrientes, Argentina: dark olive-black armored body, a bony ridge between the eyes like spectacles, dark spots on the lower jaw, eyes and snout above the water, small water hyacinths around it. Soft early-morning light, calm reflective water. Vertical composition, telephoto lens from a boat at water level, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-04-ciervo-pantanos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a marsh deer (Blastocerus dichotomus) standing knee-deep in a flooded grassland of the Esteros del Iberá, Argentina: the largest South American deer, reddish-chestnut coat, black lower legs, large ears with white inner fur, a black band on the muzzle, the male with large branched antlers. Tall green reeds and water around it, soft golden morning light. Telephoto lens from a boat, deer sharp, background softly blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-04-caraya`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of black-and-gold howler monkeys (Alouatta caraya) in a gallery forest tree in Colonia Carlos Pellegrini, Corrientes, Argentina: an adult male with all-black fur and a bearded face, and a female with golden-buff fur, both gripping the branch with long prehensile tails. Soft filtered light through green leaves. Telephoto lens from below, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-04-carpincho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a capybara (Hydrochoerus hydrochaeris) swimming in the Laguna Iberá, Corrientes, Argentina: only the head and back above the calm water, blunt square muzzle, small rounded ears, coarse reddish-brown fur, a small V-shaped wake behind it, floating grasses nearby. Warm late-afternoon light, golden reflections. Telephoto lens at water level, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the ruined Baroque church facade of the Jesuit-Guaraní mission of San Ignacio Miní, Misiones, Argentina: a tall roofless facade of carved reddish-ochre sandstone blocks with a large arched doorway, columns and ornate relief carvings, low ruined stone walls in the foreground, green lawn, tall subtropical trees and palms around it. Late-afternoon golden light making the red stone glow, deep blue sky. Wide shot from the front, facade centered in the central horizontal band. Warm natural palette of red stone and lush green. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `LIT-05-piedra-tallada`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of a carved stone relief on a ruined 17th–18th-century Jesuit-Guaraní mission wall in Misiones, Argentina: weathered reddish sandstone blocks with Baroque carved motifs (scrolls, angels or floral patterns), patches of green moss and lichen in the joints, a fern growing from a crack. Low warm late-afternoon side light revealing the texture of the carving. Vertical framing, macro-like detail, shallow depth of field. Warm natural palette of rust red and green. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-05-santa-ana`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the ruins of a Jesuit-Guaraní mission partly swallowed by subtropical forest in Misiones, Argentina (Santa Ana): long low walls of reddish stone blocks, an old stone stairway, large tree roots growing over the stones, tall trees and vines around. Soft filtered morning light, humid atmosphere. Wide shot, the ruins in the middle band. Natural greens and reds. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `LIT-05-casa-quiroga`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a simple early-20th-century writer's house in the subtropical forest of Misiones, Argentina: a small rustic house with whitewashed walls and a sloping roof among tall trees, bamboo and palms, a red earth path leading to it, the Paraná River glimpsed through the vegetation. Soft warm afternoon light. Wide shot, house in the center. Natural greens and red soil tones. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `LIT-05-teyu-cuare`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph from a cliff-top viewpoint in Teyú Cuaré Provincial Park, San Ignacio, Misiones, Argentina: dense green subtropical forest on reddish rocky bluffs dropping to the wide, calm Paraná River, the far Paraguayan shore on the horizon. Warm golden-hour light, a few clouds. Wide-angle view, river in the central band. Natural greens, red rock and blue water. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Garganta del Diablo (Devil's Throat) at Iguazú Falls, Misiones, Argentina, seen from the end of the walkway: an enormous U-shaped chasm where reddish-brown river water plunges about 80 m over dark basalt ledges, thick white mist rising and a rainbow arching in the spray, edges of green rainforest on the rim. Bright mid-morning sun from behind the camera, clear sky. Wide-angle shot, the curve of the falls filling the central horizontal band. Natural colors with lush greens, white water and brown river. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-06-vencejo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of great dusky swifts (Cypseloides senex) at Iguazú Falls, Argentina: medium-sized, uniformly sooty dark-brown swifts with a slightly paler greyish head, long narrow scythe-shaped wings and short square tail — not swallows, no white underparts — some clinging to wet dark basalt rock beside a curtain of falling water, others flying through the spray. Soft backlight in the mist. Vertical composition, telephoto lens, fast shutter. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-06-coati`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a South American coati (Nasua nasua) walking on a metal-grated walkway railing in the rainforest of Iguazú National Park, Argentina: slender reddish-brown body, long upturned flexible snout, small rounded ears, white marks around the eyes, long bushy tail with dark rings held upright. Green jungle out of focus behind. Soft diffuse morning light. Telephoto, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-06-tucan`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a toco toucan (Ramphastos toco) perched on a branch in the subtropical rainforest of Iguazú, Misiones, Argentina: black body, white throat, huge orange bill with a black tip and a black patch at the base, blue bare skin around the eye, red under the tail. Soft light filtering through leaves, green bokeh background. Telephoto lens, bird in sharp focus. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-06-palo-rosa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial nature photograph of a giant palo rosa tree (Aspidosperma polyneuron) in the Paranaense rainforest of Iguazú, Argentina: a very tall, straight, massive trunk with grey-brown fissured bark rising above the understory of ferns, palmito palms and vines, its crown far above in the canopy. Soft green light filtering down, light haze. Low wide-angle shot looking up the trunk. Natural deep greens and browns. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Moconá Falls on the Uruguay River, Misiones, Argentina, seen from a boat: a long line of low waterfalls, 5 to 10 m high, running lengthwise along the river for kilometers, water pouring sideways from a higher shelf of the riverbed into a deep channel, white foam and spray, dense green subtropical forest covering both banks. Soft morning light, a few clouds, light mist over the water. Wide-angle panoramic view at water level, the long line of falls in the central horizontal band. Natural greens and reddish-brown water. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-07-pindo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up botanical photograph of a queen palm (pindó, Syagrus romanzoffiana) in the Paranaense forest of Misiones, Argentina: a slender smooth grey ringed trunk, a crown of long arching feathery pinnate fronds with drooping leaflets, and a hanging cluster of small round orange fruits. Soft late-afternoon light, rainforest blurred behind. Vertical composition from below. Natural greens and orange. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-07-yacaratia`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic botanical photograph of a yacaratiá tree (Jacaratia dodecaphylla) in the subtropical forest of Misiones, Argentina: a thick, pale grey, smooth, somewhat swollen trunk with few branches, palmately compound leaves at the top, small elongated papaya-like fruits hanging from the branches. Soft diffuse forest light. Wide shot, tree centered, forest background softly blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-07-ambai`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic botanical photograph of an ambaí tree (Cecropia pachystachya) at the edge of the Paranaense forest, Misiones, Argentina: slender pale trunk with ring scars, candelabra-like branches holding large umbrella-shaped, deeply lobed palmate leaves, dark green above and silvery-white beneath, long finger-like flower spikes. Soft morning light, green forest behind. Wide shot, tree in the center band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Salto Encantado waterfall, Misiones, Argentina, seen from a viewpoint: a slender white waterfall about 64 m high dropping in a single plume down a dark rock wall into a deep valley completely covered by dense green subtropical forest, mist at the base. Soft morning light, a few low clouds. Wide shot from the opposite side of the valley, the fall and the forested walls in the central horizontal band. Lush natural greens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-08-la-olla`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small jungle waterfall falling into a round dark natural pool (La Olla) on the Cuñá Pirú creek, Misiones, Argentina: water pouring over dark basalt rock, the pool surrounded by moss-covered boulders, ferns and dense subtropical vegetation. Soft diffuse light under the canopy. Vertical composition, slight long exposure to soften the water. Natural deep greens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-08-sendero-deck`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic editorial travel photograph of a wooden boardwalk trail winding through dense subtropical rainforest in Misiones, Argentina: a raised wooden deck path with simple railings, tree ferns, vines, palms and tall trees on both sides, red earth visible below. Soft green filtered light, light humidity in the air. Wide shot along the path, central band composition. Natural greens and warm wood. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-08-cuna-piru`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic editorial travel photograph of the Cuñá Pirú creek in Misiones, Argentina: clear amber water running over flat dark basalt slabs and small cascades in a valley of dense subtropical forest, ferns and overhanging branches along the banks. Soft morning light, gentle mist. Wide shot at water level, creek leading through the central band. Natural greens and amber water. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a tall yatay palm grove (Butia yatay) at the edge of the Santa Lucía marsh in Mburucuyá National Park, Corrientes, Argentina: scattered slender palms with round crowns of arching blue-green fronds standing in golden grassland, a wide shallow marsh of reeds and still water beyond, a low line of dark forest on the horizon. Warm early-morning light, thin mist over the water. Wide-angle panoramic view, palms and marsh in the central horizontal band. Warm natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-09-aguara-guazu`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a maned wolf (aguará guazú, Chrysocyon brachyurus) standing in tall golden grassland in Corrientes, Argentina: fox-like face on a tall slim body with extremely long thin black legs, reddish-orange coat, black mane on the nape and shoulders, large upright ears, white throat and white tail tip — not a red fox, much taller legs. Warm low dusk light. Vertical composition, telephoto lens, animal in sharp focus, grass softly blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-09-yacare-overo`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic wildlife photograph of a broad-snouted caiman (yacaré overo, Caiman latirostris) basking on a grassy bank of a marsh lagoon in Corrientes, Argentina: very broad, short, rounded snout, olive-green to pale greyish armored body with darker mottling, heavy bony scutes on the back. Calm water and floating plants nearby, soft morning light. Telephoto lens at ground level, animal stretched across the central band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-09-lobito-rio`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic wildlife photograph of a Neotropical otter (lobito de río, Lontra longicaudis) on a log at the edge of a quiet stream in Corrientes, Argentina: sleek dark-brown fur, paler silvery throat and chest, flat head with small ears, long thick tapering tail, wet whiskers — not a giant otter, no cream throat blotches. Soft early light, dark water with reflections. Telephoto lens, low angle, animal in the central band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Panza de Cabra lagoon in Chaco National Park, Argentina, at sunset: a wide calm lagoon fringed by reeds, surrounded by dense dry forest of tall quebracho colorado trees and scattered caranday palms with fan-shaped fronds, the sky orange and pink reflected in the water. Warm low sun, long reflections, a few waterbirds as silhouettes. Wide-angle panoramic view, shoreline and palms in the central horizontal band. Warm natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-10-abuelo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial nature photograph of a huge, very old quebracho colorado tree (Schinopsis balansae) in the Chaco forest, Argentina: a massive, thick, slightly twisted trunk with deeply furrowed dark grey-brown bark, heavy irregular branches and a sparse crown of small glossy leaves, dense thorny forest around it. Soft filtered morning light. Vertical composition from the base looking up, emphasizing age and size. Natural earthy palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `LIT-10-caraya`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a black-and-gold howler monkey (Alouatta caraya) male calling from a high branch in the Chaco forest, Argentina: all-black long fur, bearded face, throat swollen while howling, long prehensile tail wrapped around the branch. Soft early-morning light, green leaves around. Telephoto lens from below, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-10-guazuncho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a gray brocket deer (guazuncho, Mazama gouazoubira) standing alert at the edge of a dry Chaco forest clearing, Argentina: small, slender deer with greyish-brown coat, white belly and white underside of the short tail, large ears, a male with short simple unbranched spike antlers. Soft dappled morning light. Telephoto lens, deer sharp, background blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-10-carpincho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a group of capybaras (Hydrochoerus hydrochaeris) grazing on the edge of a lagoon in the Chaco forest, Argentina: large barrel-shaped rodents with coarse reddish-brown fur and blunt square muzzles, caranday palms and quebracho forest behind. Warm late-afternoon light. Telephoto lens at low angle, animals in the central band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Bermejo River in El Impenetrable National Park, Chaco, Argentina: a wide, winding, reddish-brown muddy river with sandbanks, its banks lined by dense dry Chaco forest of quebracho trees and thorny scrub. Warm golden late-afternoon light, a few clouds, soft reflections on the water. Wide-angle panoramic view from a high bank, river curving through the central horizontal band. Warm natural palette of ochre water and olive-green forest. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-11-tapir`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a South American tapir (Tapirus terrestris) walking out of the dry Chaco forest to a muddy riverbank in El Impenetrable, Argentina: heavy dark grey-brown body, short flexible proboscis-like snout, small rounded ears with white tips, a short bristly mane along the neck — solid color, not the black-and-white Malayan tapir. Soft dawn light. Vertical composition, telephoto lens, animal in sharp focus. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-11-yaguarete`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a jaguar (yaguareté, Panthera onca) walking along a sandy riverbank in the Chaco forest, Argentina: powerful stocky body, broad head, golden-yellow coat covered with large black rosettes that have small black spots inside — not a leopard, not a cheetah. Soft early-morning light, dry forest behind. Telephoto lens, animal in sharp focus, background blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-11-palo-santo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial nature photograph of a palo santo forest (Bulnesia sarmientoi) in the low lands of the dry Chaco, Argentina: medium-sized trees with smooth greenish-grey trunks, small paired rounded leaflets and a few pale yellow-white flowers, growing close together on a flat clay floor. Soft late-afternoon light. Wide shot among the trunks, central band composition. Natural muted greens and greys. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-11-kayak`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of two people paddling sit-on-top kayaks on the calm, narrow, brown Bermejito River in El Impenetrable, Chaco, Argentina, seen from behind at a distance: dense dry Chaco forest on both banks, a yacaré caiman resting on a muddy bank in the foreground. Soft early-morning light, mist on the water. Wide shot at water level. People: two kayakers seen from behind, small in frame, no faces. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the champales of Bañado La Estrella, Formosa, Argentina, at sunrise: a long flat-bottomed wooden canoe gliding on still dark water between hundreds of dead grey tree trunks standing in the flooded wetland, trunks without bark draped with green vines and moss, perfect reflections in the water, floating aquatic plants. Soft pink and gold dawn light, light mist. Wide-angle panoramic view at water level, canoe and trunks in the central horizontal band. Natural, calm palette. People: one boatman seen small and from behind, no face. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-12-jabiru`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a jabiru stork (Jabiru mycteria) standing in shallow water in Bañado La Estrella, Formosa, Argentina: very large white stork with a bare black head and neck, a broad red band at the base of the neck, and a massive black slightly upturned bill — not a wood stork, no white neck. Calm reflective water and dead tree trunks behind. Soft morning light. Vertical composition, telephoto lens, bird sharp. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-12-yacare`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a yacare caiman (Caiman yacare) floating in a still channel of Bañado La Estrella, Formosa, Argentina: dark olive-black armored body, a bony ridge between the eyes like spectacles, dark spots on the lower jaw, eyes and snout above the water, duckweed and floating plants around it, a dead tree trunk reflected behind. Soft morning light. Telephoto lens at water level, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-12-carpincho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a capybara (Hydrochoerus hydrochaeris) standing in shallow water among floating plants in Bañado La Estrella, Formosa, Argentina: large barrel-shaped rodent with coarse reddish-brown fur, blunt square muzzle, small rounded ears, dead grey tree trunks in the background. Soft golden light. Telephoto lens, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-12-curiyu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a yellow anaconda (boa curiyú, Eunectes notaeus) partly coiled on a mat of floating water plants in a wetland in Formosa, Argentina: thick heavy-bodied snake, yellowish-olive skin covered with irregular black blotches and spots, eyes and nostrils on top of the head. Soft diffuse light, dark water around. Telephoto lens, close framing on the coils and head, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Laguna Blanca in Río Pilcomayo National Park, Formosa, Argentina, at sunset: a wide calm shallow lagoon edged with reeds and water plants, tall caranday palms (Copernicia alba) with fan-shaped fronds standing along the shore, low subtropical forest behind. Warm orange and violet sky mirrored in the still water. Wide-angle panoramic view, shoreline and palm silhouettes in the central horizontal band. Warm natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-13-yacare-negro`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a yacare caiman (yacaré negro, Caiman yacare) resting on a muddy bank of a marsh in Formosa, Argentina: dark olive-black armored body with faint yellowish crossbands on the tail, a bony ridge between the eyes like spectacles, dark spots on the lower jaw, mouth slightly open showing teeth. Floating plants and calm water nearby. Soft morning light. Vertical composition, telephoto lens at ground level, head in sharp focus. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-13-yacare-overo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a broad-snouted caiman (yacaré overo, Caiman latirostris) half-submerged among water hyacinths in a lagoon in Formosa, Argentina: very broad, short, rounded snout, olive-green to pale greyish skin with darker mottling, eyes above the surface. Soft warm morning light, calm water. Telephoto lens at water level, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-13-caraya`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a female black-and-gold howler monkey (Alouatta caraya) with a baby on her back, sitting on a branch in subtropical forest in Formosa, Argentina: golden-buff to light-brown fur, dark face, long prehensile tail wrapped around the branch. Soft filtered light through leaves. Telephoto lens, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-13-caraguata`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of caraguatá (Bromelia serra), a terrestrial bromeliad covering the forest floor in the Chaco of Formosa, Argentina: dense rosettes of long, narrow, stiff, arching leaves with hooked spiny edges, bright red inner leaves at the center of a flowering rosette, shaded forest floor with dry leaves. Soft dappled light. Low angle, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-14-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the upper Paraná Delta seen from a high natural riverbank viewpoint in Pre-Delta National Park, Diamante, Entre Ríos, Argentina: a vast flat landscape of low green islands, winding brown riachos and small lagoons stretching to the horizon, willow and alder gallery forest along the channels, lush riverside forest on the bank in the foreground. Warm golden late-afternoon light, a few soft clouds. Wide-angle panoramic view, islands and channels in the central horizontal band. Natural greens and brown water. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-14-lobito-rio`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a Neotropical otter (lobito de río, Lontra longicaudis) emerging from brown river water onto a muddy bank among reeds in the Paraná Delta, Entre Ríos, Argentina: sleek wet dark-brown fur, paler silvery throat and chest, flat head with small ears, long thick tapering tail — not a giant otter, no cream throat blotches. Soft early-morning light. Vertical composition, telephoto lens at water level. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-14-yacare-overo`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic wildlife photograph of a broad-snouted caiman (yacaré overo, Caiman latirostris) basking on a muddy bank of a delta lagoon in Entre Ríos, Argentina: very broad, short, rounded snout, olive-green to greyish armored body with darker mottling, willows and reeds behind. Soft warm morning light. Telephoto lens at ground level, animal stretched across the central band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `LIT-14-sauce-criollo`
**Formato:** horizontal 3:2 (se recorta a muy horizontal ~2,6:1, fila de 2)
Photorealistic editorial nature photograph of a riverside forest of sauce criollo (Salix humboldtiana) on the banks of a delta channel in Entre Ríos, Argentina: tall, slender willows with narrow upright crowns of long thin light-green leaves, rough grey bark, reflected in calm brown water. Soft hazy morning light. Wide shot along the bank, trees and reflections in the central band. Natural soft greens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

---

## Cuyo

### `CUY-01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the view from the Mirador del Sol (about 1,470 m) on the Sierra de los Comechingones above Villa de Merlo, San Luis, Argentina: a wide flat valley (the Conlara valley) stretching west to the horizon, patchwork of green fields and scattered small towns, rocky granite slopes with low serrano scrub and grasses in the foreground, the paved mountain road curving along the ridge. Late-afternoon golden hour, warm low sun from the west, soft haze over the valley. Wide-angle landscape, horizon and valley kept in the central horizontal band, deep depth of field. Warm, natural palette of ochre grass, olive scrub and blue distance. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-01-algarrobo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of an ancient, enormous algarrobo tree (Prosopis sp., native carob tree) in Piedra Blanca, Merlo, San Luis, Argentina: a massive, gnarled, twisted dark trunk split into several thick leaning limbs, deeply furrowed bark, a wide airy crown of fine feathery bipinnate leaves, dry sierra ground around it. Soft morning light filtering through the foliage. Vertical composition with the whole trunk and crown in frame, low camera angle to show its age and size. Warm natural palette of browns and olive greens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-01-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of an adult Andean condor (Vultur gryphus) soaring over the granite ridges of the Sierra de los Comechingones, San Luis, Argentina: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head — not white-headed like an eagle — with long fingered black primary feathers spread wide. Clear morning light, blue sky, rocky ridge blurred below. Telephoto lens, bird sharp and centered, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-01-tabaquillo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of tabaquillo trees (Polylepis australis) on a high rocky slope of the Sierra de los Comechingones, Argentina: small twisted trees with reddish-orange, papery bark peeling in thin layers, dense clusters of small dark green compound leaves, growing among granite boulders and tussock grass. Soft diffuse light of a cloudy mountain morning, light mist in the background. Medium shot, trunks in focus, background softly blurred. Natural earthy palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-01-peperina`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of peperina (Minthostachys verticillata), an aromatic mint-family shrub of the Argentine central sierras: upright square stems with small opposite, oval, slightly toothed leaves and tight whorls of tiny white-lilac flowers clustered at the leaf joints, growing among dry rocks of a sierra slope. Soft warm morning side light. Macro lens, shallow depth of field, out-of-focus serrano scrub behind. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Potrero de la Aguada in Sierra de las Quijadas National Park, San Luis, Argentina, seen from the viewpoint: a vast natural amphitheater of eroded red sandstone cliffs, canyons and badlands, layered walls in brick red, orange and pale pink, dry scrub (jarilla bushes) dotting the slopes. Low late-afternoon light raking across the red walls, long shadows in the ravines, clear sky. Wide-angle panoramic view with the amphitheater in the central horizontal band. Warm natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-02-pterodaustro`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic scientific reconstruction of Pterodaustro guinazui, a Cretaceous pterosaur from San Luis, Argentina, standing in a shallow lagoon: long, slender, strongly upward-curved jaws with a dense comb of hundreds of fine bristle-like teeth on the lower jaw used for filter feeding, small head crest, furry body, membranous wings folded while walking on all fours in the water, pinkish-tinged plumage. Ancient arid landscape with red cliffs behind, soft morning light. Natural-history museum quality, vertical composition, animal in sharp focus. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-02-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) standing on a dry scrubland slope in Sierra de las Quijadas, San Luis, Argentina: slender long-necked camelid with cinnamon-brown back, white belly and inner legs, grey-black face, upright pointed ears. Red sandstone cliffs softly blurred behind, warm late-afternoon light. Telephoto lens, animal in sharp focus, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-02-tortuga`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Chaco tortoise (Chelonoidis chilensis), the Argentine land tortoise, walking on dry sandy ground among scrub in San Luis, Argentina: high domed yellowish-brown shell with dark-edged scutes and growth rings, scaly elephant-like front legs, small head. Low eye-level camera angle, soft morning light, background of dry jarilla bushes out of focus. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-02-mara`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Patagonian mara (Dolichotis patagonum) in dry Monte scrubland, San Luis, Argentina: large hare-like rodent with long slender legs, grey-brown back, distinctive white patch on the rump, white belly, large dark eyes and long upright ears, sitting alert on sandy ground among jarilla bushes. Warm early-morning light, telephoto lens, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of El Hongo (the Mushroom) rock formation in Ischigualasto Provincial Park (Valle de la Luna), San Juan, Argentina: a tall eroded sandstone pillar with a wide flat cap on a narrow neck, standing on pale grey-beige barren desert ground, with the high red cliffs of the Barrancas Coloradas behind. Warm late-afternoon light, long shadows, clear deep-blue sky. Wide-angle composition with the formation and red cliffs in the central horizontal band. Natural desert palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-03-bochas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Cancha de Bochas in Ischigualasto Provincial Park, San Juan, Argentina: dozens of near-perfect round stone spheres (concretions) of different sizes scattered on flat grey-ochre clay ground, eroded badlands in the background. Soft low morning light that shapes the round stones, low camera angle close to the ground, vertical composition with spheres in the foreground. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-03-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of two guanacos (Lama guanicoe) walking across the barren grey-ochre desert of Ischigualasto, San Juan, Argentina: slender long-necked camelids with cinnamon-brown backs, white bellies, grey-black faces and upright ears, sparse desert shrubs around them, eroded badlands blurred behind. Warm afternoon light, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-03-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of an adult Andean condor (Vultur gryphus) gliding over red sandstone cliffs in Ischigualasto, San Juan, Argentina: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head — not white-headed like an eagle — long fingered wingtips. Seen from slightly above or level against the red cliff face, warm afternoon light, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-03-zorro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a South American grey fox (Lycalopex griseus) sitting on dry sandy desert ground in Ischigualasto, San Juan, Argentina: small slim fox with grizzled grey back, pale buff-cinnamon legs and head sides, white throat, large ears and a bushy grey tail with a black tip, alert expression. Soft golden late-afternoon light, telephoto lens, shallow depth of field with desert shrubs blurred behind. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph from the floor of the Talampaya Canyon, Talampaya National Park, La Rioja, Argentina: immense vertical red sandstone walls nearly 150 m high, smooth and streaked with dark desert varnish, rising on both sides of a dry sandy riverbed, a small safari-style tour vehicle in the distance for scale. Warm mid-morning light hitting one wall while the other is in shade, deep blue sky strip. Wide-angle, walls and vehicle in the central horizontal band. Natural warm red palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-04-petroglifos`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of ancient petroglyphs at the entrance of Talampaya Canyon, La Rioja, Argentina: pecked rock-art figures — spirals, stylized animals such as llamas, human figures and footprints — carved into a dark-varnished reddish sandstone surface. Soft raking side light that reveals the engravings, close-up vertical composition, sharp texture. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-04-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of an adult Andean condor (Vultur gryphus) perched on a ledge of a towering red sandstone wall in Talampaya Canyon, La Rioja, Argentina: all-black body, white fluffy ruff at the base of the neck, white patches on the upper wings visible on the folded wing, bare dark grey-black head — not white-headed like an eagle. Warm morning light on the red rock, telephoto lens, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-04-mara`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a pair of Patagonian maras (Dolichotis patagonum) resting on sandy ground in the Monte scrubland of Talampaya, La Rioja, Argentina: large hare-like rodents with long legs, grey-brown backs, a white rump patch, long upright ears. Red cliffs softly blurred in the background, warm early-morning light, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-04-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a small group of guanacos (Lama guanicoe) crossing a dry plain beside Ruta 76 in Talampaya National Park, La Rioja, Argentina: slender camelids with cinnamon-brown backs, white bellies and grey-black faces, low desert shrubs around them, red sandstone walls on the horizon. Golden late-afternoon light, telephoto lens compressing the red cliffs behind. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Cuesta de Miranda on Ruta Nacional 40, La Rioja, Argentina, seen from the Bordo Atravesado viewpoint (2,020 m): a narrow paved mountain road winding in many tight hairpin curves along steep deep-red rock cliffs and ravines, sheer drops of hundreds of meters, slopes dotted with dark green jarilla shrubs and columnar cardón cacti. Warm late-afternoon light intensifying the red walls, clear blue sky. Elevated wide-angle view with the winding road in the central horizontal band. Natural red and dark-green palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-05-cardon`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a tall columnar cardón cactus (Leucostele terscheckii) growing on an eroded deep-red rocky slope of the Cuesta de Miranda, La Rioja, Argentina: thick upright green-grey ribbed trunk with a few vertical arms, long yellowish spines, red cliffs and a glimpse of the winding road far below. Warm side light, vertical composition with the cactus filling the frame, background slightly soft. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-05-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of an adult Andean condor (Vultur gryphus) soaring in front of deep-red cliffs at the Cuesta de Miranda, La Rioja, Argentina: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head — not white-headed like an eagle — wide fingered wingtips. Warm afternoon light, telephoto lens, bird sharp against the softly blurred red rock. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-05-jarilla`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of jarilla (Larrea divaricata), the creosote bush of the Argentine Monte: dense shrub with small glossy, resinous dark-green leaves in pairs (two leaflets joined at the base, slightly divergent) and small bright yellow five-petaled flowers, growing on red rocky soil. Red eroded cliffs out of focus behind, warm morning light, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-05-camino-viejo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph from a high viewpoint in the Cuesta de Miranda, La Rioja, Argentina: an old narrow gravel mountain track clinging to the red slopes, running alongside a newer paved road with hairpin curves, both cutting across deep-red eroded hills with sparse dark-green shrubs. Clear afternoon light, telephoto compression to stack the two roads, documentary feel. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Laguna Brava, a high-altitude salt lagoon at over 4,200 m in La Rioja, Argentina: a still blue-turquoise lagoon with white salt crusts along the shore, a flock of pink Andean flamingos wading in the foreground shallows, and a line of high snow-capped volcanoes behind under a deep, clear Andean sky. Crisp late-morning light, thin dry air, perfect reflections. Wide-angle panoramic view with lagoon, flamingos and volcanoes in the central horizontal band. Natural cold palette with pink accents. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-06-refugio`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of an old stone shelter (refugio de arrieros) in the high Andes of La Rioja, Argentina, on the route to Laguna Brava: a small round or beehive-shaped hut built of stacked dry stones with a low narrow doorway, standing alone on a barren high plateau of ochre gravel and scattered yellow grass, distant volcano peaks behind. Clear cold morning light, deep-blue sky, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-06-vicuna`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a small group of vicuñas (Vicugna vicugna) on the high-Andean plain near Laguna Brava, La Rioja, Argentina: slender, delicate camelids with light cinnamon-tan back, a sharply defined white underside and white bib of long hair on the chest, smaller and finer than guanacos, without the guanaco's grey face. Golden morning light, open puna steppe with tussocks, volcanoes blurred behind, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-06-parina`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a James's flamingo or puna flamingo (Phoenicoparrus jamesi, parina chica) feeding in a shallow high-Andean salt lagoon, La Rioja, Argentina: smallest of the Andean flamingos, pale pink body with bright crimson streaks on the back and around the base of the neck, short bright yellow bill with a black tip, dark red legs without visible red "knees". Reflection in still water, soft morning light, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-06-corona-del-inca`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Corona del Inca volcanic crater at about 5,500 m in La Rioja, Argentina: a vast circular crater with steep reddish and grey volcanic walls holding a deep blue meltwater lagoon, patches of snow and ice on the rim, the massive Monte Pissis rising behind under a dark-blue high-altitude sky. Clear crisp midday light, aerial-like elevated wide-angle view from the crater rim. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial wildlife-landscape photograph of a herd of vicuñas (Vicugna vicugna) grazing on the vast high-altitude plateau of San Guillermo National Park, San Juan, Argentina: slender light cinnamon camelids with white bellies and white chest bibs, spread across a golden puna grassland with low cushion plants, the snow-capped Andes cordillera along the horizon. Golden early-morning light, long shadows, deep-blue sky. Wide panoramic composition, herd and mountains in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-07-huarpea`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of Huarpea andina, a rare endemic Andean daisy found only in San Guillermo, San Juan, Argentina: a low woody cushion-forming shrub with small greyish-green, hairy leaves and composite daisy-like flower heads, growing among volcanic stones on a dry high-Andean slope. Bright clean mountain light, macro lens, shallow depth of field, barren scree blurred behind. If unsure of the exact flower shape, keep it a plausible small Andean composite flower. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-07-yareta`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of yareta (Azorella compacta), a high-Andean cushion plant: a hard, dome-shaped, moss-like mound of bright green made of thousands of tiny tightly packed rosettes, so compact it looks like a green boulder, growing among grey volcanic rocks on the high plateau of San Juan, Argentina. Crisp cold morning light, low angle, rocky puna and distant peaks blurred behind. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-07-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) standing on a high-Andean plateau in San Guillermo, San Juan, Argentina: larger and sturdier than a vicuña, cinnamon-brown back, white belly, distinctly grey-black face and head, upright pointed ears. Golden grassland and snowy peaks blurred behind, warm early light, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-07-puma`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a puma (Puma concolor) walking across rocky high-Andean terrain in San Guillermo, San Juan, Argentina: large muscular cat with uniform tawny-grey coat without spots, pale throat and muzzle, dark marks at the sides of the muzzle, long thick tail with a dark tip. Low soft dawn light, telephoto lens, shallow depth of field, rocks and puna grass blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Cerro Alcázar near Calingasta, San Juan, Argentina: a castle- or fortress-like hill of eroded sedimentary layers in bands of cream, ochre, pink and grey, with turret-like pinnacles along its crest, rising above the green poplar-lined valley and the braided Río de los Patos. Warm sunset light glowing on the colored layers, clear sky. Wide-angle composition with the hill and the river in the central horizontal band. Natural warm palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-08-capilla`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small, very old adobe chapel in an Andean valley of San Juan, Argentina: thick whitewashed adobe walls, a simple wooden door, a small bell gable on the façade, packed-earth surroundings, tall poplars and dry mountains behind. Soft warm late-afternoon light, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-08-mercedario`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Cerro Mercedario (6,770 m), San Juan, Argentina, seen from the Calingasta valley: a massive snow- and glacier-covered Andean peak towering above brown foothills, a line of tall poplars and green fields of the valley in the foreground. Clear early-morning light, crisp air, telephoto compression to make the mountain dominant. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-08-rio-de-los-patos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Río de los Patos in the Calingasta valley, San Juan, Argentina: a wide braided river of grey-green glacial water running over a gravel bed, willows and poplars along the banks, arid layered hills in ochre and pink tones behind. Soft golden late-afternoon light, wide-angle view along the river. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a land-sailing cart (carro a vela, a small three-wheeled sand yacht with a tall single sail) gliding across the Pampa del Leoncito (Barreal Blanco), San Juan, Argentina: a perfectly flat, pale dry lakebed of cracked clay stretching to the horizon, with the snow-capped Andes cordillera and the massive Cerro Mercedario along the background. Late-afternoon golden light, long shadow of the sail on the cracked ground, deep-blue sky. Wide-angle panoramic composition with the cart and mountains in the central horizontal band, slight motion feel. Natural pale palette. A single small pilot inside the cart, seen from afar, is fine. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-09-barro`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the cracked dry clay surface of the Pampa del Leoncito, San Juan, Argentina: a close, low-angle view of polygonal plates of pale beige-white mud with deep dark cracks, curling edges, receding toward a distant line of mountains at the top of the frame. Low raking sunset light that brings out the texture, vertical composition, deep depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-09-barreal`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a quiet street in Barreal, a small Andean village in the Calingasta valley, San Juan, Argentina: an unpaved or simple tree-lined street with tall poplars and willows, low adobe houses, irrigation ditches and small orchards and farms (chacras), dry brown mountains and snowy peaks behind. Soft warm late-afternoon light, eye-level view along the street. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-09-rio`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Río de los Patos near Barreal, San Juan, Argentina: a broad, fast braided river of grey-brown glacial water over a wide stony bed, low willows on the banks, the high Andes with snow on the summits filling the horizon. Clear morning light, crisp air, wide-angle view looking upstream toward the cordillera. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial night photograph of the astronomical observatory domes of CASLEO in El Leoncito National Park, San Juan, Argentina: white telescope domes on a dry mountain ridge at over 2,500 m, under an extremely clear, dark desert sky with the bright core of the Milky Way arching above, countless stars, faint airglow on the horizon. Long exposure, wide-angle lens, domes silhouetted in the lower part of the central horizontal band, Milky Way across the middle. Natural night palette, deep blues, no light pollution. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-10-suri`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a lesser rhea, Darwin's rhea (Rhea pennata, suri cordillerano / choique) standing on a dry shrubby plain in El Leoncito, San Juan, Argentina: large flightless bird, smaller than the greater rhea, grey-brown plumage with distinctive white spots and speckles on the back and wings, long neck, feathered upper legs. Warm early-morning light, jarilla shrubs and mountains blurred behind, telephoto lens, vertical framing of the whole bird. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-10-cascada`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Cascada El Rincón in El Leoncito National Park, San Juan, Argentina: a small waterfall about 5 m high falling into a clear pool inside a narrow rocky desert ravine, a thin strip of green vegetation and moss along the water contrasting with dry ochre rock walls. Soft shaded light, slight long exposure for silky water. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-10-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) standing among rocks and resinous jarilla shrubs in El Leoncito National Park, San Juan, Argentina: slender camelid with cinnamon-brown back, white belly, grey-black face and upright ears, alert pose. Dry hills behind, warm late-afternoon light, telephoto lens, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-10-casco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the ruined adobe walls of an old estancia homestead in an arid Andean valley of San Juan, Argentina: crumbling thick mud-brick walls, empty window openings, a few old poplars or willows nearby, dry shrubland and mountains behind. Warm low afternoon light, wide-angle view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the wide Uspallata valley, Mendoza, Argentina: a straight paved road (Ruta Nacional 7) crossing a broad high valley of dry golden grassland and scattered shrubs, rows of poplars marking the small town, multicolored precordillera hills and the snow-capped main Andes cordillera on the horizon. Golden late-afternoon light, clear sky. Wide-angle panoramic composition with road, valley and mountains in the central horizontal band. Warm natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-11-bovedas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of old colonial smelting furnaces in an Andean valley of Mendoza, Argentina: a row of small domed adobe and brick vaults (bóvedas) with arched openings, 18th-century style, earth-colored walls, set among poplars with dry mountains behind. Warm soft late-afternoon light, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-11-siete-colores`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Cerro de los Siete Colores near Uspallata, Mendoza, Argentina: an eroded hillside striped with diagonal mineral bands in red, ochre, yellow, green-grey and purple tones, sparse dry shrubs, a short walking trail at the base. Low sunset light making the colored bands glow, clear sky. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-11-potrerillos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Potrerillos reservoir, Mendoza, Argentina: a long turquoise-blue mountain lake about 12 km long surrounded by bare brown and ochre precordillera mountains, with snowy Andean peaks in the distance and the paved Ruta 7 running along the shore. Bright clear morning light, calm water with reflections, elevated wide view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Puente del Inca, Mendoza, Argentina: a natural stone arch spanning the rushing grey Río Las Cuevas, its surface crusted with mineral deposits in vivid yellow, orange and ochre from hot springs, small dripping mineral formations under the arch, and beside it the stone ruins of an old thermal bath building built into the riverbank; high bare Andean mountains with snow patches behind. Clear midday mountain light, deep-blue sky. Wide-angle composition with the arch in the central horizontal band. Natural colors, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-12-estalactitas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of the mineral stalactites under the Puente del Inca natural arch, Mendoza, Argentina: rows of small hanging mineral formations and rippled crusts colored bright yellow, orange, rust and cream by thermal spring water, wet and glistening, a little dripping water. Soft shaded light with warm reflections, vertical composition, macro detail. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-12-hotel`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the ruins of an early-20th-century stone thermal hotel beside a mountain river at Puente del Inca, Mendoza, Argentina: broken stone walls and foundations partly stained yellow and orange by mineral water, the rushing river below, steep bare Andean slopes behind. Clear afternoon light, documentary style. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-12-cementerio`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small, austere high-mountain cemetery for climbers in the Andes of Mendoza, Argentina: simple stone and metal crosses and plaques set in rocky ground inside a low stone wall, a few weathered flowers, bare brown mountains with snow-capped peaks rising behind. Clear cold light, quiet and respectful mood, wide view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Laguna de Horcones in Aconcagua Provincial Park, Mendoza, Argentina: a small calm green-blue high-Andean lagoon at about 2,950 m, fringed by grass and a wooden viewpoint trail, reflecting the colossal snow- and ice-covered South Face (Pared Sur) of Aconcagua (6,961 m) rising at the end of the Horcones valley, bare brown and grey moraine slopes on both sides. Clear crisp morning light, deep-blue sky, perfect reflection. Wide-angle composition with lagoon and mountain face in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-13-guanaco`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) standing on a rocky slope of a high-Andean valley in Aconcagua Provincial Park, Mendoza, Argentina: slender camelid with cinnamon-brown back, white belly, grey-black face and upright ears, sparse yellow grass and scree around it, snowy peaks blurred behind. Cold clear morning light, telephoto lens, vertical framing. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-13-vega`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a high-Andean wetland meadow (vega altoandina) at the bottom of a valley in Aconcagua Provincial Park, Mendoza, Argentina: a bright green carpet of cushion grasses and small pools of water winding through a barren grey-brown glacial valley, steep rocky slopes and snow patches above. Soft morning light, wide view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-13-laguna-helada`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Laguna de Horcones in winter, Aconcagua Provincial Park, Mendoza, Argentina: the small lagoon partly frozen with white and grey ice plates and a patch of dark open water, snow covering the surrounding slopes, the snowy South Face of Aconcagua in the distance. Cold bluish winter light, clear sky, quiet mood. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-14-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of vineyards in Luján de Cuyo, Mendoza, Argentina: long straight rows of Malbec vines on trellises with deep-green leaves and dark bunches of grapes, converging toward a line of poplars and the snow-capped Andes cordillera on the horizon. Warm golden late-afternoon light, long shadows between the rows, clear sky. Wide-angle composition with vine rows and the white mountain line in the central horizontal band. Warm natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-14-malbec`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a glass of deep purple-red Malbec wine on a rustic wooden table outdoors, with a vineyard and the snowy Andes softly out of focus behind, a bunch of dark blue-black Malbec grapes beside the glass. Warm golden late-afternoon backlight glowing through the wine, shallow depth of field, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-14-cerro-gloria`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Monument to the Army of the Andes on top of Cerro de la Gloria in Parque General San Martín, Mendoza, Argentina: a large bronze monumental sculpture group with soldiers, horses and a winged figure of Liberty on top, set on a massive stone base, with the city and the precordillera behind. Warm late-afternoon light, low angle. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-14-acequia`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a typical street in Mendoza city, Argentina: an open irrigation channel (acequia) running along the sidewalk with clear flowing water, lined by large old plane trees whose canopies form a green tunnel over the street, dappled sunlight on the pavement. Soft morning light, eye-level view along the acequia. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-14-plaza`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Plaza Independencia, the main square of Mendoza, Argentina: a wide square with tall leafy trees, paved walkways, a large fountain with water jets, surrounded by city buildings. Soft golden early-evening light, wide-angle view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-15-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Uco Valley, Mendoza, Argentina, in autumn: rows of grapevines with leaves turned golden yellow, orange and red, stretching toward the foot of the high Andes cordillera covered in fresh snow, a line of poplars in autumn color in the middle distance. Soft warm morning light, crisp clear air. Wide-angle panoramic composition with vineyards and the snowy wall of mountains in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-15-manzano`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of an old apple tree (Malus domestica) standing alone in a small grassy clearing in the Andean foothills of Tunuyán, Mendoza, Argentina: gnarled trunk, spreading branches with green leaves and a few small red apples, a simple low fence around it, dry foothills and snowy peaks behind. Soft warm afternoon light, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-15-monumento`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a monumental stone and bronze memorial to General San Martín in the Andean foothills of Mendoza, Argentina: a large sculpture on a broad stone base set on a hillside, with poplars, dry slopes and the snow-capped cordillera behind. Warm late-afternoon light, slightly low angle. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-15-altamira`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a modern winery built of stone and concrete blending into the landscape in Paraje Altamira, Uco Valley, Mendoza, Argentina: low architectural building with natural stone walls among vineyard rows, the snow-capped Andes behind. Golden late-afternoon light, wide view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-15-laguna-diamante`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Laguna del Diamante, Mendoza, Argentina, at 3,300 m: a deep-blue high-Andean lake with the perfect cone of the snow-capped Maipo volcano (5,323 m) reflected on its calm surface, golden steppe grass and dark volcanic rocks on the shore. Clear early-morning summer light, deep-blue sky, still water. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-16-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Valle Grande reservoir in the Atuel Canyon, San Rafael, Mendoza, Argentina, seen from the viewpoint above the dam: a winding turquoise lake enclosed by steep, eroded red, ochre and pink rock walls of the Sierra Pintada, sculpted rock formations along the shore. Warm late-afternoon light, clear sky. Wide-angle elevated view with the turquoise water and red walls in the central horizontal band. Natural warm palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-16-monjes`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of Los Monjes rock formation in the Atuel Canyon, Mendoza, Argentina: a row of tall eroded reddish-ochre rock pinnacles that look like hooded monks standing side by side on a canyon slope, dry shrubs at their base, deep-blue sky. Warm side light from the low sun, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-16-lagarto`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of El Lagarto rock formation in the Atuel Canyon, Mendoza, Argentina: a long eroded reddish rock ridge on a canyon wall whose shape resembles a giant lizard climbing the slope, the gravel road and the river below. Warm afternoon light, clear sky, medium telephoto. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-16-submarino`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of El Submarino, a rock formation emerging from the turquoise water of the Valle Grande reservoir in the Atuel Canyon, Mendoza, Argentina: an elongated reddish rock with a tower-like top that looks like a submarine surfacing, steep colored canyon walls behind. Bright midday light, calm water with reflections. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-16-rafting`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a rafting boat with a small group of people wearing helmets and life jackets paddling through white-water rapids on the Atuel River at Valle Grande, Mendoza, Argentina: splashing water, willows on the banks, reddish canyon walls behind. Bright sunny light, fast shutter freezing the spray. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-17-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the main avenue of Malargüe, a small town on Ruta 40 in southern Mendoza, Argentina: a wide straight avenue lined with tall poplars and low buildings, leading toward the snow-capped Andes cordillera that closes the horizon, dry steppe light. Clear early-morning light, crisp air, eye-level view down the avenue with the mountains in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-17-detector`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a single surface detector of the Pierre Auger cosmic-ray observatory on the open pampa near Malargüe, Mendoza, Argentina: a squat beige-white cylindrical water tank about 3.6 m wide and 1.2 m high, with a small solar panel on a pole and a slim antenna mast on top, standing alone on flat dry steppe with yellow bunchgrass, the Andes faint on the horizon. Golden late-afternoon light, big sky, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-17-auger`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small modern science visitor center interior: interactive exhibits about cosmic rays and particle detectors, illuminated panels, a scale model of a cylindrical water-tank detector, clean contemporary design in warm light. Wide view, no readable text on the panels. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-17-planetario`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a modern planetarium building in a small Andean town of southern Mendoza, Argentina: a striking contemporary building with a dome, set against a twilight sky with the first stars appearing and dark mountains on the horizon, soft exterior lights. Blue-hour light, wide view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `CUY-18-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Castillos de Pincheira near Malargüe, Mendoza, Argentina: a massive rock formation of layered sedimentary and volcanic rock eroded into towers, needles, battlements and caves that look like a fairy-tale castle, rising above the clear Río Malargüe, whose calm water reflects it, with willows and green riverbank grass. Warm late-afternoon light on the cream, ochre and grey towers, clear sky. Wide-angle composition with the castle and its reflection in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-18-torres`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the eroded rock towers of the Castillos de Pincheira, Mendoza, Argentina: close view of tall pinnacles and battlement-like ridges in layered cream, ochre and grey rock, with small cave openings and fluted erosion grooves, against a deep-blue sky. Warm side light from the low sun revealing textures, low-angle vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-18-cuevas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of shallow caves and rock shelters eroded into the base of the layered rock towers of Castillos de Pincheira, Mendoza, Argentina: dark rounded openings in cream and ochre rock, scree and dry shrubs at the foot, soft warm light with deep shadows inside the caves. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-18-puntas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic close-up photograph of several ancient stone arrowheads (projectile points) knapped from obsidian, basalt and flint, displayed on a neutral linen surface in a small regional museum of Patagonian-Andean Argentina: triangular and leaf-shaped points with visible flake scars, warm museum light, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-19-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial wildlife-landscape photograph of Laguna Llancanelo, Malargüe, Mendoza, Argentina: a large shallow salty lagoon in the open steppe with a long flock of Chilean flamingos (Phoenicopterus chilensis: pale pink body, greyish legs with pink "knees" and feet, bill pale at the base with a black tip bent downward) wading along the shore, low saltbush vegetation, and the snow-capped Andes on the far horizon. Soft golden early-morning light, calm water with reflections. Wide telephoto panoramic view with birds and mountains in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-19-cisne`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a black-necked swan (Cygnus melancoryphus) swimming on calm water at Laguna Llancanelo, Mendoza, Argentina: pure white body, velvety black neck and head, a thin white stripe behind the eye, a large bright red knob (caruncle) at the base of the blue-grey bill. Soft morning light, clean reflection, telephoto lens, vertical framing with reeds blurred behind. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-19-coscoroba`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a coscoroba swan (Coscoroba coscoroba) on a shallow steppe lagoon in Mendoza, Argentina: all-white plumage except black wingtips (visible in flight or partly when folded), bright pinkish-red bill without a knob, pink legs, smaller and more goose-like than other swans. Soft early light, telephoto lens, reflections in calm water. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-19-maca`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a white-tufted grebe (Rollandia rolland, macá común) swimming among aquatic vegetation in a steppe wetland of Mendoza, Argentina: small dark grebe with black head and neck, a conspicuous white fan-shaped tuft on the side of the head, bright red eye, rufous-chestnut underparts in breeding plumage, short pointed dark bill. Soft morning light, telephoto lens, low angle at water level. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-19-monjita`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Salinas monjita (Neoxolmis salinarum, formerly Xolmis salinarum; monjita salinera) perched on a low saltbush at the edge of a salt flat in Argentina: slim pale tyrant flycatcher with rufous-brown upperparts, clean white underparts, black wings with a broad white patch, black tail with white outer edges, small dark bill. Soft early-morning light, telephoto lens, whitish salt flat and dry shrubs blurred behind. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Antes de generarla, confirmá con la reserva qué especie llaman "monjita salinera" ahí:** podría ser la monjita castaña (Neoxolmis rubetra), de lomo rojizo y pecho rayado.

### `CUY-20-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph inside the Caverna de las Brujas, Malargüe, Mendoza, Argentina: a limestone cave chamber full of stalactites hanging from the ceiling and stalagmites rising from the floor, flowstone curtains in cream, ochre and pale orange, lit by the warm beams of helmet lamps and flashlights from the side, deep darkness behind. Rich textures, wide-angle lens, formations in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-20-estalagmitas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of stalagmites rising from the floor of a limestone cave in the Caverna de las Brujas, Mendoza, Argentina: several cream and ochre calcite columns with wet, glistening rippled surfaces, small drops falling from stalactites above, lit by a single warm headlamp beam from the side, dark background. Vertical composition, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-20-boca`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the entrance of the Caverna de las Brujas in Cerro Moncol, Mendoza, Argentina: a dark cave mouth opening in a steep grey limestone hillside with nearly vertical rock layers, sparse steppe shrubs and a short footpath leading to it, clear blue sky. Bright clear morning light, wide view. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-20-estalactitas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic photograph of a cluster of slender stalactites hanging from the ceiling of a limestone cave in the Caverna de las Brujas, Mendoza, Argentina: thin soda-straw and cone-shaped formations in white, cream and amber, a drop of water at each tip catching the light, lit by warm flashlight beams, dark background. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-21-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Pampas Negras in La Payunia Reserve, Malargüe, Mendoza, Argentina: a vast plain of jet-black volcanic lapilli dotted with bright golden tufts of coirón amarillo grass like brush strokes, rounded reddish-brown and black volcanic cones scattered across the landscape, and the large smooth cone of the Payún Liso volcano rising behind. Warm low late-afternoon light, deep-blue sky. Wide-angle panoramic composition with the black plain, cones and volcano in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-21-payun-matru`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Payún Matrú shield volcano in La Payunia, Mendoza, Argentina: a broad, low-angled shield volcano with a large summit caldera, its flanks streaked with dark lava flows and reddish scoria, black volcanic plain with yellow grass tufts in the foreground. Clear crisp morning light, big sky, vertical composition with the volcano in the lower half. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-21-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a herd of guanacos (Lama guanicoe) crossing a black volcanic plain in La Payunia, Mendoza, Argentina: slender camelids with cinnamon-brown backs, white bellies, grey-black faces and upright ears, walking in single file among golden coirón grass tufts, volcanic cones behind. Golden late-afternoon light, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-21-choique`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a lesser rhea or choique (Rhea pennata) walking across the volcanic steppe of La Payunia, Mendoza, Argentina: large flightless bird, smaller than the greater rhea, grey-brown plumage with distinctive white spots and speckles on the back, long neck, feathered upper legs, among yellow grass tufts on dark volcanic soil. Warm morning light, telephoto lens. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `CUY-21-lagarto`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a lagarto cola de piche (Phymaturus sp., a stout endemic Patagonian rock lizard) basking on dark volcanic rock in La Payunia, Mendoza, Argentina: flattened robust body, short thick tail with whorls of large spiny scales (like a little armadillo tail), grey-brown mottled skin. Warm midday light, macro-telephoto, rock texture sharp. Check the exact species with the reserve before using. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

---

## Córdoba

### `COR-01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the lakeshore promenade (costanera) of Miramar de Ansenuza on the vast salt lake Mar Chiquita, Córdoba, Argentina, at sunset: a flat, endless sheet of shallow pale water reaching a perfectly low horizon, a large flock of Chilean flamingos wading and taking flight in the foreground shallows, their pink bodies reflected in the still water, a low simple waterfront and a few low native trees of the Espinal along the shore at one side. Golden-hour light turning the sky peach and violet, mirror-like reflections. Wide-angle panoramic composition with the flock and the horizon in the central horizontal band. Soft warm palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-01-flamenco-austral`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a Chilean flamingo (Phoenicopterus chilensis) standing in shallow salty water at Laguna Mar Chiquita (Ansenuza), Córdoba, Argentina: pale pink body with brighter crimson-pink wing coverts, long greyish legs with distinctly pink "knees" (ankle joints) and pink feet, bill pale whitish at the base with a black tip covering about half of it — not the yellow-and-black bill of the Andean or James's flamingo. Soft early-morning light, calm water with gentle reflection, out-of-focus flock behind. Telephoto lens, vertical framing with the whole bird and its reflection, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-01-aves-playeras`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of migratory shorebirds feeding on the wet muddy shore of Laguna Mar Chiquita (Ansenuza), Córdoba, Argentina: a mixed group of small sandpipers and long-legged yellowlegs (Tringa flavipes: slim grey-brown speckled waders with bright yellow legs and a thin straight dark bill) probing the shallow water edge, salt crust and ripples around them. Soft morning side light, low eye-level camera angle, telephoto lens with blurred water background. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-01-aguara-guazu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a maned wolf, aguará guazú (Chrysocyon brachyurus), in the tall grassy wetlands of the Río Dulce, Córdoba, Argentina: a fox-like canid with reddish-orange coat, extremely long thin black legs ("stockings"), large upright ears, black mane along the nape and a white-tipped tail and white throat. Standing alert among golden reeds and pampas grass. Dusk light, telephoto lens, animal sharp, background softly blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-01-hotel-viena`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the weathered ruins of a large 1940s lakeside spa hotel partly flooded by a salt lake: crumbling pale walls with empty window openings, salt-crusted lower floors, shallow water and white salt deposits around the base, flat open horizon behind. Late-afternoon warm light, melancholic atmosphere. Medium-wide shot from the shore. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the baroque church of the Jesuit Estancia Santa Catalina, Córdoba, Argentina: a whitewashed colonial church façade with two bell towers and curving baroque gables, a large open grassy atrium in front enclosed by a low white wall, dry hills of the northern Córdoba sierras and native trees around. Warm late-afternoon golden light on the white façade, deep blue sky. Wide-angle composition with the façade and atrium centered in the horizontal middle band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-02-bodega-jesuitica`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a 17th-century colonial Jesuit wine cellar in Córdoba, Argentina: thick whitewashed adobe walls, a vaulted brick ceiling, old wooden wine barrels and clay jars (tinajas), a narrow window letting in a beam of warm light, worn stone floor. Quiet museum atmosphere. Vertical composition, deep perspective, soft warm interior light. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-02-estancia-caroya`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a rustic colonial estancia interior in Colonia Caroya, Córdoba, Argentina: an old massive wooden wine press, simple heavy wooden furniture, whitewashed walls and a tiled floor, soft daylight entering through a deep window. Calm, museum-like atmosphere. Medium shot, warm natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-02-platanos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the long main avenue of Colonia Caroya, Córdoba, Argentina, lined on both sides by tall century-old plane trees (Platanus) whose branches meet overhead forming a green tunnel, a straight paved road disappearing to a vanishing point, dappled sunlight on the asphalt. Morning light, symmetrical one-point perspective, deep depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-02-doma`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial sports photograph of a gaucho rider on a bucking criollo horse at a traditional Argentine rodeo (jineteada) in an open-air amphitheater in Jesús María, Córdoba: the rider in boina, bombachas and boots holding on with one arm raised, dust flying from the arena, blurred crowd in the stands behind. Late-afternoon summer light, fast shutter freezing the motion, telephoto lens. People: one rider (as stated). natural colors, high detail, no text, no watermark, no logos.

### `COR-03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Cerro Colorado, northern Córdoba, Argentina, at sunset seen from the riverbank: a reddish sandstone hill with rounded rock outcrops and caves, covered in dry native scrub and small trees of the Chaco serrano, a shallow stony stream in the foreground reflecting the glowing rock. Low warm sunset light making the rock deep red-orange, clear sky. Wide-angle panoramic composition with the hill in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-03-pintura-rupestre`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of ancient rock paintings under a sandstone rock shelter at Cerro Colorado, Córdoba, Argentina: red, white and black pictographs of stylized human figures, llamas and a rider on horseback, painted on a reddish rock surface with natural cracks and lichen. Soft even shade light, no flash, vertical composition, sharp detail on the pigments. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-03-casa-yupanqui`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a simple rustic country house in the northern Córdoba sierras, Argentina, with whitewashed walls, a tiled roof and a wooden veranda, a large old oak tree beside it shading the yard, an acoustic guitar resting on a wooden chair on the porch. Calm late-afternoon light, peaceful atmosphere. Wide horizontal composition with house and tree in the center. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-03-museo-arqueologico`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic photograph of a small rural archaeology museum display in Córdoba, Argentina: glass cases with stone tools, mortars and ceramic fragments of the Comechingón culture, a large panel photograph of rock paintings on the wall, warm soft lighting. Wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Ongamira valley, northern Punilla, Córdoba, Argentina: huge reddish-orange sandstone cliffs and rounded rock walls with dark cave openings rising above a lush green valley of soft rolling hills, native trees and grassland, deep ravines between them. Golden late-afternoon light warming the red walls against the green, a few clouds. Wide-angle panoramic composition with cliffs and valley in the central horizontal band. Warm natural palette, red versus green, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-04-grutas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Grutas de Ongamira, Córdoba, Argentina: a large natural cave mouth eroded into a massive red sandstone wall, smooth honeycomb-like hollows and overhangs, a dirt path and native shrubs at the base. Soft afternoon light with warm glow on the rock and cool shade inside the cave. Vertical composition from below to show the height of the wall. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-04-charalqueta`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the view from the summit of Cerro Charalqueta (Colchiquí), Ongamira, Córdoba, Argentina: rocky reddish summit ledge in the foreground and a wide green valley of rolling hills, red cliffs and ravines spreading below to distant sierras. Clear morning light, wide-angle panoramic view, horizon in the middle. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-04-los-terrones`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the Los Terrones reserve (Quebrada de la Luna), Córdoba, Argentina: strange eroded red and ochre sandstone towers, rounded knobs and narrow ravines, green native shrubs and grass in between, a narrow footpath winding among the formations. Low golden late-afternoon light emphasizing textures, blue sky. Wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Cerro Uritorco, the highest peak of the Sierras Chicas (1,979 m), rising above the small town of Capilla del Monte in the Punilla valley, Córdoba, Argentina: a massive rocky mountain with a bare grey-brown summit and slopes covered in green native scrub, the low roofs and trees of the town in the foreground. Early-morning sunlight lighting the eastern face of the mountain, soft haze in the valley, clear sky. Wide-angle panoramic composition with the mountain and town in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-05-cumbre-uritorco`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph from the rocky summit of Cerro Uritorco, Córdoba, Argentina: grey granite boulders and tufts of mountain grass in the foreground, the long Punilla valley with a small reservoir, towns and layered sierras fading into blue distance below. Clear late-morning light, deep blue sky. Vertical composition with summit rocks at the bottom and valley in the middle, deep depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-05-calle-techada`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a short pedestrian street covered by a roof in a small Argentine sierra town, with small shop fronts on both sides, warm hanging lights and plants, soft daylight entering at the far end. Calm early-morning atmosphere, wide horizontal one-point perspective. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-05-dique-el-cajon`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the Dique El Cajón reservoir near Capilla del Monte, Córdoba, Argentina: a calm blue lake among dry rocky sierra hills covered in native scrub, a small concrete dam wall at one end, a lone kayak on the water. Soft afternoon light, gentle reflections, wide horizontal landscape. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lago San Roque, Córdoba, Argentina: a wide blue reservoir surrounded by the rolling hills of the Sierras Chicas, the long curved concrete dam wall of the San Roque dam in the middle distance, a few small sailboats on the water. Late-afternoon golden light, calm water with soft reflections, a few clouds. Wide-angle panoramic composition with the lake and dam in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-06-cola-de-la-novia`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the "cola de la novia" at the San Roque dam, Córdoba, Argentina: when the valves open, a powerful wide curtain of white foaming water bursts out of the base of a concrete dam and falls into a rocky river channel, mist and spray rising, rainbow hint in the spray. Bright midday light, fast shutter freezing the water. Vertical composition from below. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-06-aerosilla`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a classic open double chairlift climbing a green wooded sierra slope above Villa Carlos Paz, Córdoba, Argentina, with empty colorful chairs on the cable and the blue Lago San Roque and the town spreading below. Clear morning light, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-06-viejo-paredon`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of an old 1890s masonry dam wall of dark cut stone emerging from the low water of a reservoir during a drought, cracked mud banks and dry lake bed in the foreground, sierra hills behind. Soft afternoon light, documentary feel, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Los Gigantes, Sierras Grandes, Córdoba, Argentina: jagged towers and walls of pale grey granite rising above a high-altitude grassland of golden tussock grass and scattered granite boulders, a few twisted tabaquillo trees in sheltered gullies. Early-morning light with long shadows, deep blue sky with a few clouds. Wide-angle panoramic composition with the granite towers in the central horizontal band and grassland in the foreground. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-07-condor`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of an adult Andean condor (Vultur gryphus) soaring close to grey granite towers in the Sierras Grandes, Córdoba, Argentina: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head — not white-headed like an eagle — long fingered black primaries spread wide. Clear morning light, rock wall softly blurred behind. Telephoto lens, vertical framing, bird sharp. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-07-tabaquillo`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of tabaquillo trees (Polylepis australis) in a rocky gully of the Sierras Grandes, Córdoba, Argentina: small gnarled twisted trees with reddish-orange papery bark peeling in thin layers and dense clusters of small dark green compound leaves, among granite boulders and tussock grass. Soft diffuse light with light mist. Wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-07-escalada`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial adventure photograph of one rock climber with helmet and rope climbing a vertical crack on a pale grey granite tower at Los Gigantes, Córdoba, Argentina, high grassland and distant sierras far below. Warm late-afternoon light on the rock, wide horizontal composition with the climber small in the frame to show scale. People: one climber (as stated). natural colors, high detail, no text, no watermark, no logos.

### `COR-08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the isolated Jesuit Estancia La Candelaria, Córdoba, Argentina: a small whitewashed colonial chapel with a simple bell gable and low stone and adobe buildings enclosed by a thick fieldstone wall, standing alone on a vast high grassy plateau with low rocky hills on the horizon. Late-afternoon golden light, big open sky. Wide-angle panoramic composition with the estancia small in the central horizontal band to convey isolation. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-08-puerta-1683`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of an old weathered colonial wooden door set in a thick whitewashed adobe wall, with the year 1683 carved into the stone or wooden lintel above it, worn hand-forged iron hardware, cracked lime plaster. Soft raking side light revealing the carved numbers. Vertical composition. natural colors, high detail, no people unless stated, no other text besides the carved year, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-08-camino-ripio`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a narrow rough gravel road with loose stones and tight curves crossing a high, empty grassy plateau in the Córdoba sierras, Argentina, granite outcrops and low hills, no vehicles. Clear midday light with cloud shadows on the grassland, wide horizontal composition, road leading into the distance. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-08-capilla`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the interior of a small 17th-century Jesuit colonial chapel in rural Córdoba, Argentina: thick whitewashed walls, wooden roof beams, a simple altar with a small image of the Virgin, soft light from a single side window. Quiet, austere atmosphere, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Jesuit Estancia of Alta Gracia, Córdoba, Argentina: the colonial church of Nuestra Señora de la Merced, with a whitewashed baroque façade and a single bell tower, and the long arcaded residence beside it, reflected in the still water of the Tajamar, a 17th-century artificial pond lined with old trees. Early-morning golden light, mirror-like reflection, soft clouds. Wide-angle panoramic composition with church and reflection in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-09-residencia-liniers`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the inner courtyard of a 17th-century Jesuit residence in Córdoba, Argentina: whitewashed arcades with thick round arches, a terracotta tiled roof, a stone-paved patio with a well and a lone tree, colonial wooden doors. Soft late-afternoon light and gentle shadows under the arches. Vertical composition through an archway. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-09-villa-nydia`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a 1930s single-storey suburban chalet in an Argentine sierra town, with white walls, a pitched tiled roof, green wooden shutters, a small front garden and a low fence, tall trees behind. Soft morning light, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-09-museo-falla`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the quiet study of a 1940s composer's house in the Córdoba hills, Argentina: an old upright piano, sheet music on a wooden desk, simple period furniture and a window opening onto a leafy garden. Soft warm afternoon light, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the main street of Villa General Belgrano, Calamuchita valley, Córdoba, Argentina: Alpine and Central-European style buildings with steep roofs, half-timbered façades, wooden balconies with flower boxes, tall pine trees and green sierras in the background. Soft early-morning light, empty street. Wide-angle panoramic composition with the street and façades in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-10-oktoberfest`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a beer festival in a small Alpine-style town in Córdoba, Argentina: close view of several glass beer steins being raised in a toast, a man in traditional lederhosen and a woman in a dirndl blurred behind, festive wooden stalls and string lights. Warm evening light, shallow depth of field, vertical composition. People: festival-goers (as stated), faces not the focus. natural colors, high detail, no text, no watermark, no logos.

### `COR-10-cerveceria`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a craft brewery taproom in an Alpine-style sierra town in Argentina: a row of copper and steel brewing tanks behind a wooden bar, a tasting flight of four beers from pale golden to dark brown on a wooden board in the foreground. Warm interior light, wide horizontal composition, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-10-las-acacias`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a white motorhome parked on a grassy campsite under acacia and pine trees in the Calamuchita valley, Córdoba, Argentina, a water service point and a small river nearby, green sierras behind. Soft late-afternoon light, peaceful atmosphere, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a pedestrian dirt lane in La Cumbrecita, Córdoba, Argentina: Alpine-style chalets with steep roofs, stone bases and wooden balconies scattered among a dense forest of tall pines and other conifers, a small stream with a wooden footbridge, green mountain slopes behind. Soft morning light filtering through the trees, light mist. Wide-angle panoramic composition with the lane and chalets in the central horizontal band. Fresh, natural green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-11-cascada-grande`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Cascada Grande in La Cumbrecita, Córdoba, Argentina: a waterfall falling over dark granite rocks into a clear pool, surrounded by ferns, mossy boulders and tall conifers. Soft diffuse light, slight long exposure for silky water. Vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-11-la-olla`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of La Olla in La Cumbrecita, Córdoba, Argentina: a round natural pool of transparent green water in a mountain stream, enclosed by smooth granite boulders and a small cascade feeding it, pine forest around. Bright midday summer light, water clear enough to see the rocky bottom. Medium-wide shot. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-11-goulash`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic food photograph of a plate of Central-European goulash with spätzle: a rich dark red-brown beef stew with paprika sauce next to small golden egg noodle dumplings, a sprig of parsley, on a rustic ceramic plate on a wooden table, a mug of amber beer blurred behind. Warm window light, shallow depth of field, slightly overhead angle. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-11-penon-del-aguila`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial adventure photograph of a zipline cable stretched over a forested sierra valley near La Cumbrecita, Córdoba, Argentina, one rider in harness and helmet gliding along it, granite rocks and pine forest below, distant mountains. Clear morning light, wide shot with the rider small for scale. People: one rider (as stated). natural colors, high detail, no text, no watermark, no logos.

### `COR-12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the summit area of Cerro Champaquí (2,790 m), the highest peak of Córdoba, Argentina: broad rounded grassy summit ridge of golden tussock grass and grey granite outcrops, a small dark mountain lagoon in a hollow near the top, endless layered sierras fading into the blue distance. Early-morning light with long shadows and a sea of clouds in the lower valleys. Wide-angle panoramic composition with the ridge and lagoon in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-12-laguna`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small high-mountain lagoon near the summit of Cerro Champaquí, Córdoba, Argentina, in winter: the surface frozen with white and blue-grey ice, frost on the surrounding tussock grass and granite boulders, a light dusting of snow on the slopes. Cold clear morning light, deep blue sky. Vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-12-rio-tabaquillo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of two trekkers with large backpacks crossing a clear rocky mountain stream on stepping stones on the way to Cerro Champaquí, Córdoba, Argentina, tabaquillo trees with reddish peeling bark on the banks, grassy slopes. Late-afternoon light, medium-wide shot. People: two trekkers (as stated), seen from behind. natural colors, high detail, no text, no watermark, no logos.

### `COR-12-refugio`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a simple stone mountain refuge with a tin roof in a grassy high valley of the Sierras Grandes, Córdoba, Argentina, a few tents pitched nearby and a stream, peaks behind. Blue-hour dusk light with a warm glow from the window. Medium-wide shot. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-12-villa-alpina`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Villa Alpina, a tiny rural hamlet in the Calamuchita sierras, Córdoba, Argentina: a few wooden cabins among tall dark conifers beside a clear stream, a dirt track and green slopes rising toward the Champaquí. Soft morning light with mist in the valley. Medium-wide shot. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Camino de las Altas Cumbres (provincial road E-34), Córdoba, Argentina, on its descent toward Traslasierra: a paved two-lane mountain road with tight serpentine bends winding down steep granite slopes covered in golden grass, the wide green Traslasierra valley and distant blue sierras spread out below. Late-afternoon golden light, long shadows, clear sky. Wide-angle panoramic composition with the winding road and valley in the central horizontal band, no vehicles. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-13-pampa-de-achala`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Pampa de Achala, the high plateau of the Sierras Grandes, Córdoba, Argentina (about 2,000 m): a vast rolling highland of pale golden tussock grass dotted with rounded grey granite boulders and slabs, small clumps of tabaquillo trees in a gully, enormous sky with towering clouds. Soft late-afternoon light, vertical composition with boulders in the foreground. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-13-ruta-nevada`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of a paved mountain road across a high grassy plateau in the Córdoba sierras, Argentina, after a winter snowfall: white snow covering the grass and granite boulders, icy patches on the asphalt, a road barrier closing the way, grey overcast sky. Cold blue-white light, wide horizontal composition, no vehicles. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-13-puente-colgante`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of an old early-20th-century suspension bridge on a historic gravel mountain road in the Córdoba sierras, Argentina: steel cables and a narrow deck spanning a rocky gorge with a small river, dry-stone walls (pircas) along the road, grassy slopes. Soft morning light, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-14-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Quebrada del Condorito, Córdoba, Argentina, seen from the Balcón Norte viewpoint: a deep, narrow gorge about 800 m deep with sheer grey granite walls dropping to a thin river at the bottom, the grassy rim of the Pampa de Achala above, and an adult Andean condor (Vultur gryphus: all-black body, white neck ruff, large white patches on the upper wings, bare dark head — not white-headed) soaring in the void of the canyon. Morning light raking across the walls. Wide-angle panoramic composition with the gorge and condor in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-14-tabaquillo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up botanical photograph of a tabaquillo tree (Polylepis australis), endemic to Argentina, in the Quebrada del Condorito: a gnarled, twisted trunk with reddish-orange to cinnamon papery bark peeling in many thin translucent layers, small dark green compound leaves with silvery undersides clustered at the branch tips, granite rocks and tussock grass behind. Soft diffuse light with mountain mist, vertical composition, bark texture in sharp focus. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-14-lagarto-achala`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic wildlife photograph of the Achala lizard (Pristidactylus achalensis), endemic to the Pampa de Achala, Córdoba, Argentina: a robust medium-sized lizard with a large broad head and strong jaws, rough scales, olive to brownish body with darker irregular transverse bands, basking on a grey granite rock among tussock grass. Low eye-level angle, warm morning light, telephoto, background blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
Antes de usarla, chequeá la coloración contra fotos del parque: los machos y las hembras pueden diferir.

### `COR-14-zorro-colorado`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic wildlife photograph of a culpeo or zorro colorado (Lycalopex culpaeus) on the Pampa de Achala, Córdoba, Argentina: a large fox with a rufous-tawny head, ears and legs, grizzled grey back, white throat and a long bushy tail with a black tip — redder and larger than the grey pampas fox. Standing among golden tussock grass and granite boulders. Soft early-morning light, telephoto lens, animal sharp. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-15-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Mina Clavero river in Traslasierra, Córdoba, Argentina: crystal-clear cold water flowing between smooth rounded granite boulders, forming deep emerald-green natural pools (ollas) and small chutes, patches of golden sand on the banks, dry sierra slopes with native shrubs behind. Bright late-morning summer light revealing the pebbly bottom. Wide-angle panoramic composition with the river and pools in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-15-museo-rocsen`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the crowded interior of an eclectic private collection museum in rural Argentina: tall shelves and glass cases packed with antiques, old tools, clocks, ceramics, religious figures and curiosities, an old vintage car in a corner, warm overhead light. Vertical composition with a deep perspective down the hall. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-15-nido-del-aguila`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the Nido del Águila swimming spot on the Mina Clavero river, Córdoba, Argentina: the river squeezed into a narrow channel between tall smooth granite rock walls, forming a deep dark-green pool, sunlight on the rock. Midday summer light, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-15-panaholma`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic editorial travel photograph of the Panaholma river in Traslasierra, Córdoba, Argentina: a wide, calm, shallow river of warm-looking water flowing over sand and rounded stones, willows and native trees on the banks, low sierras behind. Soft golden late-afternoon light, quiet mood, wide horizontal composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-16-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic wildlife and landscape photograph of a small herd of guanacos (Lama guanicoe: slender long-necked camelids with cinnamon-brown back, white belly and inner legs, grey-black face, upright pointed ears) grazing on a natural grassland in Traslasierra National Park, western Córdoba, Argentina, with dry Chaco serrano woodland and the low Sierra de Guasapampa behind. Warm late-afternoon light, long shadows. Wide-angle panoramic composition with the herd and the sierra in the central horizontal band. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-16-estancia-pinas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the old main house (casco) of a historic cattle estancia in the dry hills of western Córdoba, Argentina: low whitewashed adobe buildings with a gallery of wooden posts, a tiled roof, a large old tree in the yard, dry Chaco woodland around. Warm afternoon light, vertical composition. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `COR-16-aguila-coronada`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic wildlife photograph of a crowned eagle or Chaco eagle (Buteogallus coronatus) perched on a dead branch in dry Chaco woodland, Córdoba, Argentina: large, uniformly ash-grey to grey-brown raptor with a prominent pointed crest on the back of the head, yellow legs and cere, short dark tail crossed by a single broad white band — not the black-and-white harpy eagle. Soft morning light, telephoto lens, bird sharp, background blurred. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `COR-16-boa-chaquena`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo en el centro)
Photorealistic wildlife photograph of an Argentine rainbow boa (Epicrates alvarezi) coiled on dry leaf litter in Chaco Seco woodland, Córdoba, Argentina: medium-sized boa with greyish-brown to tan body covered in dark rings and blotches with lighter centers, smooth scales with a subtle iridescent sheen in the light. Low eye-level angle, soft dappled light, shallow depth of field. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

---

## Patagonia Andina

### `AND-01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of fossil dinosaur footprints on the western shore of the Ezequiel Ramos Mexía reservoir at Villa El Chocón, Neuquén, Argentina: a flat shelf of reddish-ochre sandstone with a row of large three-toed theropod tracks, low-water exposed shoreline, deep blue artificial lake behind, eroded reddish sandstone badlands (bardas) and sparse dry Monte shrub steppe on the far shore. Mid-afternoon warm light raking across the rock to reveal the footprint relief. Wide-angle shot from low height, tracks in the middle horizontal band, lake and bardas across the center of the frame, clear sky above. Warm, dry palette of red, ochre and blue, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-01-giganotosaurus`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a mounted skeleton of Giganotosaurus carolinii in a small paleontology museum in Patagonia: a huge theropod about 14 m long, massive long skull with many blade-like serrated teeth, short arms with three-fingered hands, long tail held horizontally, standing on two powerful legs, bones in warm brown fossil tones. Soft museum spotlights from above, dark neutral background. Low-angle vertical framing that emphasizes the skull and the height of the animal, shallow depth of field on the background. Warm, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-01-buggy`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an old weathered off-road dune buggy from the 1990s, small open tubular frame and big tires, displayed indoors in a modest regional paleontology museum, beside fossil bones on a low platform. Soft warm interior light, three-quarter view, medium shot, background softly out of focus. Muted, warm palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-01-mara`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Patagonian mara (Dolichotis patagonum): a large hare-like rodent with long slender legs, long upright ears, grey-brown back, a distinctive white band across the rump and white belly — not a rabbit or a hare. Standing alert on bare sandy ground among low thorny shrubs of the dry Monte steppe, near Villa El Chocón, Neuquén. Golden light at sunset, telephoto lens, eye-level, soft background. Warm, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-01-choique`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a lesser rhea or choique (Rhea pennata pennata): large flightless bird, brownish-grey plumage densely spotted with white on the back and wings, smaller than the greater rhea, long neck and legs. Walking across open shrub steppe of northern Patagonia under a wide sky. Soft early morning light, telephoto lens, animal in the center of the frame, background softly blurred. Muted, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Laguna Blanca National Park near Zapala, Neuquén, Argentina, seen from a 1,723 m summit: a large blue-grey lagoon in the middle of the Patagonian steppe, surrounded by small dark volcanic cones and black basalt lava flows, golden tussock grass and low shrubs in the foreground, distant rolling plateaus. Late afternoon golden light with long shadows, wide-angle panoramic view, the lagoon and cones in the central horizontal band, big sky with a few wind-swept clouds. Natural steppe palette of ochre, grey and blue. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-02-cisne`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a black-necked swan (Cygnus melancoryphus): pure white body, velvety black neck and head, bright red fleshy knob at the base of a blue-grey bill, a thin white stripe behind the eye — not a black swan, not a mute swan. Swimming calmly on the blue water of a Patagonian steppe lagoon, reflection on the surface. Soft morning light, telephoto lens, vertical framing with the swan in the lower-middle third, creamy blurred background. Cool, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-02-flamenco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of Chilean flamingos (Phoenicopterus chilensis): pale pink body, grey-blue legs with clearly pink knee joints and pink feet, bill pale at the base with a black tip, crimson patches on the wings — paler than the Caribbean flamingo. A small group wading in the shallow edge of a lagoon in the Patagonian steppe, low hills behind. Soft side light of late afternoon, telephoto lens, eye-level. Natural, gentle palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-02-escorial`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a short interpretive walking trail across a rough black basalt lava field (escorial) in Laguna Blanca National Park, Patagonia, Argentina: a narrow path between dark porous volcanic rocks, a small reddish-brown volcanic cone rising behind, sparse yellow tussock grass, a slice of blue lagoon in the distance. Clear morning light, wide-angle, path leading into the frame. Natural dark and ochre palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-02-estepa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Patagonian steppe in Neuquén, Argentina: rounded low cushion shrubs and hard golden tussock grasses shaped by the wind, stony ground, a distant volcanic hill under a vast sky with long streaky clouds. Low golden evening light, wide-angle close to the ground, shrubs in sharp focus in the foreground. Warm ochre and sage palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of El Humazo, a geothermal vent at the foot of the Domuyo volcano in northern Neuquén, Argentina: a tall permanent white column of steam rising from a rocky stream valley, and behind it the broad snow-covered massif of the Domuyo (about 4,700 m), the highest peak of Patagonia. High-altitude grassland steppe with hard tussock grasses on the slopes. Clear early morning light, steam back-lit, wide-angle panoramic composition with the steam column and the snowy summit in the central band. Natural palette of white, grey-brown and deep blue sky. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-03-olletas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph, close view of boiling hot springs (olletas) in the Domuyo geothermal field, Neuquén, Argentina: small round pools of bubbling grey water and steam, rims crusted with whitish and ochre mineral deposits, wet volcanic soil, wisps of vapor drifting upward. Cool early morning light that makes the steam glow, vertical framing from slightly above, high detail on the bubbles. Natural earthy palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-03-confluencia`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the confluence of two rivers at Varvarco, northern Neuquén, Argentina: the clear blue-green Neuquén river meeting the darker, muddier and more powerful Varvarco river, the two colors running side by side, gravel banks, dry mountain slopes of the high Andes around. Afternoon light from a viewpoint above, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-03-aguas-calientes`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a natural hot stream at Aguas Calientes, in the Domuyo area, Neuquén, Argentina: a shallow rocky creek with steaming water forming small natural pools among stones, green moss on the edges, high-Andean grassland slopes and bare mountains behind. Soft morning light with visible steam, medium shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-03-nire`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of ñire trees (Nothofagus antarctica): small twisted shrubby southern beech with tiny wavy-edged toothed leaves and grey bark, growing in a dense clump beside a clear mountain stream in a high-altitude steppe valley of northern Neuquén, golden tussock grass around. Soft late afternoon light, medium shot. Natural green and gold palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lake Caviahue in Neuquén, Argentina: monkey puzzle trees (Araucaria araucana) with umbrella-shaped crowns and straight bare trunks in the foreground, a calm blue lake inside a wide volcanic caldera, and the Copahue volcano behind with a thin plume of white steam rising from its broad snowy summit. Golden late afternoon light, wide-angle panoramic framing with the lake, trees and volcano in the central band. Natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-04-pehuen`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of a monkey puzzle tree or pehuén (Araucaria araucana): stiff, sharp, overlapping triangular dark-green leaves spiraling along thick branches, and a large round female cone (piña) about the size of a head, green-brown with spiny scales, held at the tip of a branch. Soft natural light, vertical framing, shallow depth of field with the araucaria forest and a lake softly blurred behind. Natural green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-04-termas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of natural thermal pools at Copahue, Neuquén, Argentina: steaming grey-green mineral water pools and bubbling mud in a barren volcanic valley, yellowish sulfur deposits on the rocks, clouds of vapor drifting, rugged mountains behind. Cool morning light with back-lit steam, medium-wide shot. Natural earthy palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-04-salto-agrio`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Salto del Agrio waterfall near Caviahue, Neuquén, Argentina: the Agrio river plunging in a wide white curtain over a cliff of dark layered basalt columns, with orange and ochre mineral staining on the rock, a deep pool below, monkey puzzle trees on the rim. Soft afternoon light, mist in the air, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-04-hualcupen`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Laguna Hualcupén near Caviahue, Neuquén, Argentina, at sunset: a calm mountain lagoon reflecting a warm orange and pink sky, silhouettes of monkey puzzle trees on the shore, gentle volcanic hills around. Golden hour fading into dusk, wide-angle, horizon in the middle of the frame. Warm, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lake Aluminé at Villa Pehuenia, Neuquén, Argentina, at sunset: a pure forest of monkey puzzle trees (Araucaria araucana) with tall straight trunks and flat umbrella-shaped crowns silhouetted against a calm lake glowing orange and violet, volcanic mountains on the far shore. Golden hour, wide-angle panoramic composition with the araucaria silhouettes and the lake in the central band. Warm, natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-05-pinon`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of the seeds and cone of the pehuén (Araucaria araucana): a large round cone partly broken open on mossy ground, revealing dozens of elongated pale brown pine nuts (piñones) about 4 cm long, with spiky triangular araucaria leaves nearby. Soft diffuse forest light, vertical framing from above at an angle, shallow depth of field. Warm brown and green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-05-laguna-crater`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the crater lake on the summit of the Batea Mahuida volcano (about 1,970 m), Villa Pehuenia, Neuquén, Argentina: a small blue lagoon inside a bare rocky crater of reddish and grey volcanic scree, and on the horizon a line of snow-capped volcanoes along the Andes. Clear summer morning light, wide-angle from the crater rim. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-05-moquehue`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Lake Moquehue in Neuquén, Argentina: a quiet deep-blue mountain lake with a pebble shore, forested slopes dotted with monkey puzzle trees (Araucaria araucana), gentle mountains behind. Soft morning light, calm water with reflections, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-05-monito`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a monito del monte (Dromiciops gliroides): a tiny mouse-sized marsupial with soft grey-brown fur, large dark eyes ringed with black, small rounded ears, and a thick furry prehensile tail — not a mouse, not a monkey. Clinging to a mossy branch in a dense temperate forest at night, lit by soft natural-looking light, macro telephoto, dark blurred background. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph from the Cerro de la Cruz above Junín de los Andes, Neuquén, Argentina: a large white cross on the hilltop in the foreground, the wide open valley of the Chimehuín river with the small town below, and the snow-capped cone of the Lanín volcano rising on the western horizon. Late afternoon golden light, wide-angle panoramic composition with the cross, valley and volcano in the central band. Warm, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-06-via-christi`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a contemporary outdoor religious sculpture on a wooded hillside trail in Patagonia: a life-size white figurative sculpture group depicting a scene from the life of Jesus, among native shrubs and rocks, with a wide valley in the background. Soft morning light, vertical framing, sculpture in sharp focus, background gently blurred. Natural, calm palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-06-boca-chimehuin`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Boca del Chimehuín, Neuquén, Argentina: the point where the clear turquoise Chimehuín river flows out of Lake Huechulafquen, fast water over rounded stones, low shrubby banks, and the snow-capped Lanín volcano in the distance. Soft early morning light, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-06-pesca-mosca`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a fly fisherman in waders casting a long looping line on the Chimehuín river near Junín de los Andes, Patagonia: clear fast water over stones, low steppe banks, golden backlight catching the line. Seen from behind at a distance, telephoto, warm evening light. Natural palette. natural colors, high detail, one person from behind, no text, no watermark, no logos.

### `AND-06-santuario`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a modern Patagonian church built with stone and wood, with a tall pitched roof, standing in a small Andean town square with poplar trees, mountains in the background. Clear afternoon light, three-quarter view, medium shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the south face of the Lanín volcano (3,776 m) seen from Puerto Canoa on Lake Huechulafquen, Lanín National Park, Neuquén, Argentina: a perfect, steep snow-covered conical volcano rising above a long deep-blue lake, forested shores with native trees, a pebble beach in the foreground. Clear morning light, calm water with reflection, wide-angle panoramic framing with the volcano and lake in the central band. Natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-07-rauli`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph inside a raulí forest (Nothofagus alpina) in Lanín National Park, Argentina: tall straight trunks with dark fissured bark, large oblong leaves with many parallel veins and finely toothed edges, a few monkey puzzle trees among them, ferns and bamboo-like caña colihue in the understory. Soft light filtering through the canopy, vertical framing looking up the trunks. Fresh green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-07-huemul`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a south Andean deer or huemul (Hippocamelus bisulcus): stocky, short-legged deer with thick grey-brown coat, large ears, a dark Y-shaped mark on the forehead and muzzle, male with short simple forked antlers. Standing on a rocky slope at the edge of a southern beech forest in the Patagonian Andes. Soft overcast light, telephoto lens, eye-level. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-07-pudu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern pudú (Pudu puda): a tiny deer about 40 cm tall, round compact body, short legs, dense reddish-brown coat, small rounded ears, male with very short spike antlers. Peeking out among ferns and bamboo in a dense, humid Patagonian forest. Soft diffuse light, telephoto lens, shallow depth of field. Natural green and brown palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-07-huillin`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern river otter or huillín (Lontra provocax): sleek dark-brown otter with paler throat, long thick tapering tail, small ears and webbed feet. Resting on a mossy rock at the edge of a clear Patagonian lake with fallen logs. Soft morning light, telephoto lens, eye-level close to the water. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lake Lácar and the town of San Martín de los Andes, Neuquén, Argentina, seen from the Bandurrias viewpoint: the small town spread at the eastern head of a long deep-blue lake, enclosed by steep mountains covered in dense green forest, a beach and pier along the waterfront. Golden late afternoon light, wide-angle panoramic composition with town and lake in the central band. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-08-chachin`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Chachín waterfall near San Martín de los Andes, Neuquén, Argentina: a slender white waterfall about 30 m high falling into a rocky pool, framed by lush temperate rainforest (Valdivian forest) with moss, ferns and bamboo-like caña colihue. Soft diffuse light, slow shutter for silky water, vertical framing. Deep green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-08-quila-quina`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small white tourist catamaran crossing the blue waters of Lake Lácar toward the beach of Quila Quina, Neuquén, Argentina, forested mountains around, a light wake behind the boat. Bright summer morning light, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-08-hua-hum`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Hua Hum river in Neuquén, Argentina: a clear green river flowing west through dense temperate forest toward Chile, rounded stones, overhanging trees, misty forested mountains. Soft overcast light, medium shot. Natural green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-08-nonthue`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Lake Nonthué, the narrow western arm of Lake Lácar, Neuquén, Argentina: a slim, calm blue lake squeezed between steep mountain slopes covered with dense green forest, layers of ridges fading into haze. Soft morning light, wide-angle. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lake Escondido seen from the Ruta de los Siete Lagos (RN 40), Neuquén, Argentina: a small emerald-green lake enclosed by steep slopes of dense coihue forest (Nothofagus dombeyi), layers of forested Andean ridges behind, a curve of the paved mountain road along the edge of the frame. Soft late morning light, calm water, wide-angle panoramic composition with the lake in the central band. Natural green and blue palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-09-correntoso`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Correntoso river near Villa La Angostura, Neuquén, Argentina: one of the shortest rivers in the world, a few hundred meters of fast clear turquoise water rushing over stones between Lake Correntoso and Lake Nahuel Huapi, forested banks, mountains behind, seen from a bridge above. Soft morning light, vertical framing that follows the river into the big lake. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-09-espejo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the beach of Lake Espejo on the Ruta de los Siete Lagos, Neuquén, Argentina: a fine grey-sand beach with driftwood, crystal-clear still water mirroring the dense forested mountains. Calm early morning light, wide-angle from the shoreline. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-09-falkner`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Lake Falkner beside the RN 40 on the Seven Lakes Road, Neuquén, Argentina: a long pale sand beach with shade trees, deep-blue lake and a steep forested mountain rising straight from the water on the opposite shore. Bright summer afternoon light, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-09-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) soaring: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head (not white-headed like an eagle), wide fingered wingtips. Gliding high above a deep-blue Patagonian lake and forested mountains. Clear daylight, telephoto lens. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the submerged forest of Lake Traful, Neuquén, Argentina: the pale grey trunks and bare branches of dead cypress trees standing upright under extremely clear turquoise water, their tops just below and breaking the surface, seen from a small boat, forested mountain shore in the distance. Bright calm midday light that lets you see deep into the water, wide-angle panoramic framing with the trunks and water in the central band. Natural blue-green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-10-cipres`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of a Chilean cedar or ciprés de la cordillera (Austrocedrus chilensis): a narrow conical evergreen conifer with flattened sprays of tiny scale-like leaves, slightly bluish-green, and reddish-brown fibrous bark, growing on a rocky slope above a blue lake. Soft morning light, vertical framing, foliage in sharp focus, background softly blurred. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-10-cataratas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Cascada Cataratas near Villa Traful, Neuquén, Argentina: a white waterfall pouring down a rocky gorge within Andean-Patagonian forest of coihues and cypresses, moss and ferns on the rocks. Soft diffuse light, slow shutter for silky water, medium shot. Natural green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-10-la-puntilla`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of La Puntilla beach on Lake Traful, Neuquén, Argentina: a shore covered with smooth rounded pebbles in many colors (red, ochre, grey, green, white) under very clear shallow water, forested mountains across the lake. Low-angle wide shot with the colorful stones in the foreground, soft afternoon light. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-10-huillin`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern river otter or huillín (Lontra provocax): sleek dark-brown otter with paler throat, long thick tapering tail, small ears. Swimming with its head above the water near a rocky shore of a clear Andean lake, small ripples around. Soft overcast light, telephoto lens, low angle. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph inside the Bosque de Arrayanes, Los Arrayanes National Park, Villa La Angostura, Neuquén, Argentina: a dense stand of arrayán trees (Luma apiculata) with smooth, twisting cinnamon-orange trunks mottled with pale cream patches where the bark peels, a wooden boardwalk winding between them, small dark-green leaves forming a low canopy. Soft diffuse forest light with a few sunbeams, wide-angle panoramic framing with the boardwalk and trunks in the central band. Warm cinnamon and green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-11-corteza`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of the bark of an arrayán (Luma apiculata): smooth, cool-to-the-touch cinnamon-orange trunk with irregular pale cream and white patches where thin bark flakes have peeled off, a few small glossy dark-green oval leaves in the corner. Soft diffuse light, vertical macro framing, high texture detail. Warm natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-11-bahia-brava`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small wooden pier on a calm bay of Lake Nahuel Huapi at Villa La Angostura, Patagonia, with a small tourist boat moored, forested peninsula and mountains behind. Soft early morning light, still water with reflections, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-11-sendero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a dirt trail through dense Andean-Patagonian forest of coihues on the Quetrihué peninsula, Neuquén, Argentina, with two cyclists on mountain bikes riding away from the camera, glimpses of blue lake between the trees. Dappled morning light, medium-wide shot. Natural green palette. natural colors, high detail, two cyclists seen from behind, no text, no watermark, no logos.

### `AND-11-pudu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern pudú (Pudu puda): a tiny deer about 40 cm tall, round compact body, short legs, dense reddish-brown coat, small rounded ears, large dark eyes. Standing still on the mossy floor of a humid Patagonian forest among ferns and fallen leaves. Soft diffuse light, telephoto lens, eye-level. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the view from Cerro Campanario, Bariloche, Río Negro, Argentina: deep-blue Lake Nahuel Huapi and Lake Moreno, the forested Llao Llao peninsula, small islands and bays, and layers of snow-capped Andes on the horizon. Late afternoon golden light, crisp air, wide-angle panoramic composition with lakes and peninsula in the central band. Natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-12-pato-torrente`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a torrent duck (Merganetta armata): slim streamlined duck with a bright red bill; male with a striking white head and neck boldly striped with black lines, and dark streaked body; perched on a wet boulder in the middle of a fast white-water mountain stream in Patagonia. Soft morning light, telephoto lens, fast shutter freezing the splashing water, vertical framing. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-12-san-eduardo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small alpine-style chapel built of wood and stone, with a steep shingled roof and a slender bell tower, on a forested hill above a blue Patagonian lake, snowy mountains behind. Soft afternoon light, three-quarter view. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-12-bahia-lopez`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Bahía López on Lake Nahuel Huapi, Bariloche, Argentina: a calm, sheltered bay of deep-blue water with a pebble shore and forest, the rocky peaks of Cerro López rising steeply behind. Soft morning light with reflections, wide-angle. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-12-huillin`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern river otter or huillín (Lontra provocax): sleek dark-brown otter with paler throat, long thick tapering tail, small ears and whiskered muzzle. Climbing out of the water onto a fallen log at the shore of a forested Patagonian lake. Soft early light, telephoto lens, eye-level. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Ventisquero Negro (Black Glacier) at the foot of Cerro Tronador, Nahuel Huapi National Park, Río Negro, Argentina: a dark grey glacier tongue covered in rock and mud ending in a murky grey-brown proglacial lake with floating dark ice chunks, and above it the brilliant white hanging glaciers and icefalls of the Tronador's walls, framed by green coihue and lenga forest on the valley sides. Soft morning light, wide-angle panoramic composition with the dark lake, black ice and white glaciers in the central band. Natural palette with strong contrast between black ice and white snow. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-13-garganta`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Garganta del Diablo waterfall near Pampa Linda, at the foot of Cerro Tronador, Argentina: meltwater falls pouring down a dark rocky amphitheatre beneath hanging glaciers, the snowy ice walls of the mountain visible above, mossy rocks and low forest in the foreground. Soft diffuse light, vertical framing that includes the falls and the ice above. Natural cool palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-13-pampa-linda`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Pampa Linda, Nahuel Huapi National Park, Argentina: a green open meadow in a valley surrounded by dense coihue and lenga forest, with the massive glaciated summit of Cerro Tronador rising behind, white ice walls above the trees. Late afternoon light, wide-angle. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-13-mano-unica`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a narrow single-lane gravel road winding through tall Patagonian coihue forest beside a river, toward snowy mountains, in Nahuel Huapi National Park, Argentina. Soft morning light filtering through the trees, dust hanging in the air, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-13-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) soaring in front of a glaciated mountain wall: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head (not white-headed like an eagle), wide fingered wingtips. Clear daylight, telephoto lens, white ice softly out of focus behind. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-14-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a lively open-air craft market in a town square of El Bolsón, Río Negro, Argentina: rows of small wooden stalls with handmade crafts, woven goods, ceramics and local produce under tall trees, and the rugged ridge of Cerro Piltriquitrón rising behind the town. Bright summer morning light, wide-angle panoramic composition with the market and mountain in the central band; people present as small, unrecognizable figures among the stalls. Warm, natural palette. natural colors, high detail, small distant people allowed, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-14-bosque-tallado`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a large wooden sculpture carved directly into a standing fire-killed lenga tree trunk on a mountainside at about 1,400 m, Cerro Piltriquitrón, El Bolsón, Argentina: a carved human figure emerging from the silvery-grey weathered wood, other dead trunks and young lenga regrowth around, a wide valley far below. Soft late afternoon light, vertical framing. Natural grey-silver and green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-14-cajon-azul`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Cajón del Azul near El Bolsón, Argentina: deep crystal-clear turquoise pools of the Azul river squeezed between smooth vertical granite walls of a narrow canyon, green forest on top of the rocks. Soft midday light reaching the water, view from above into the gorge. Natural turquoise and grey palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-14-puente-colgante`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a narrow hanging footbridge of wood planks and steel cables crossing the clear blue-green Azul river in a forested Patagonian valley near El Bolsón, Argentina. Soft morning light, medium-wide shot from the riverbank. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-14-lupulo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of hop flowers (Humulus lupulus): pale green papery cone-shaped flowers hanging from a climbing vine with lobed, serrated leaves, in a hop field of a Patagonian valley with mountains blurred in the background. Warm late afternoon light, shallow depth of field. Natural green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-15-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lake Puelo, Lago Puelo National Park, Chubut, Argentina, seen from the Mirador del Lago trail: an emerald-green to turquoise lake stretching west between steep forested mountains toward Chile, layered ridges fading into haze, dense green temperate forest in the foreground. Soft morning light, wide-angle panoramic composition with the lake in the central band. Natural green and blue palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-15-olivillo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of an olivillo tree (Aextoxicon punctatum) in a Valdivian temperate rainforest: thick leathery oblong leaves, glossy dark green above and paler, rusty-dotted below, on a tall straight trunk with smooth grey bark covered in moss and small ferns. Soft diffuse humid light, vertical framing, leaves in sharp focus, forest softly blurred. Deep green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-15-la-playita`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of La Playita, a small pebble beach on Lake Puelo, Chubut, Argentina: calm clear green water, a gentle curve of shore with trees, steep forested mountains rising across the lake. Bright summer morning light, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-15-rio-azul`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Azul river near its mouth into Lake Puelo, Chubut, Argentina: wide clear blue-green river flowing over rounded stones, poplar and native trees on the banks, forested mountains behind. Soft afternoon light, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-15-huemul`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a south Andean deer or huemul (Hippocamelus bisulcus): stocky, short-legged deer with thick grey-brown coat, large ears, a dark Y-shaped mark on the forehead and muzzle; a female without antlers standing at the edge of a dense temperate forest on a steep mountain slope. Soft overcast light, telephoto lens. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-16-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a weathered old log cabin from around 1900 in a wide grassy valley near Cholila, Chubut, Argentina: simple rectangular cabin of rough horizontal logs, small windows, wooden fences around, poplar trees, and the forested Andes with some snow on the peaks in the background. Late afternoon golden light, wide-angle panoramic composition with the cabin small in the central band and lots of landscape around. Warm, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-16-cabana`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph, close-up of the wall of a restored pioneer log cabin in Patagonia: rough horizontal logs with deep cracks and grey weathered wood, a small wooden window frame, partially restored joints with lighter new wood. Warm raking afternoon light that reveals the texture, vertical framing. Natural wood palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-16-lago-cholila`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Lake Cholila, Chubut, Argentina: a calm blue lake with forested shores and Andean mountains behind, a single fly fisherman standing on the stony shore casting, seen from behind and small in the frame. Soft early morning light with mist on the water, wide-angle. Natural palette. natural colors, high detail, one small person from behind, no text, no watermark, no logos.

### `AND-16-carrileufu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Carrileufú river, Chubut, Argentina: a clear river with gentle riffles winding through a green valley with riverside trees, a small drift boat with fishermen floating downstream in the distance, Andean mountains behind. Soft late afternoon light, medium-wide shot. Natural palette. natural colors, high detail, small distant people allowed, no text, no watermark, no logos.

### `AND-16-trucha`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a rainbow trout (Oncorhynchus mykiss): silvery body with a pinkish-red horizontal band along the side, many small black spots on the back, dorsal fin and tail; held gently half in the water of a clear Patagonian lake before release, only hands visible. Soft natural light, close-up, shallow depth of field. Natural palette. natural colors, high detail, only hands visible, no text, no watermark, no logos.

### `AND-17-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lake Menéndez, Los Alerces National Park, Chubut, Argentina: a long deep-blue glacial lake flanked by steep slopes of dense dark-green temperate forest with tall alerce trees, and snow-capped Andean peaks with small glaciers at the far end. Clear morning light, calm water with soft reflections, wide-angle panoramic composition with the lake and the snowy range in the central band. Natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-17-alerce`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a giant ancient Patagonian cypress or alerce (Fitzroya cupressoides) in a humid temperate rainforest: a massive straight columnar trunk several meters around with deeply furrowed, fibrous reddish-brown bark in long vertical strips, small scale-like dark-green leaves high above, ferns and moss at its base, and one small person in hiking clothes standing at the base for scale. Soft diffuse forest light, low-angle vertical framing looking up the trunk. Natural deep green and reddish-brown palette. natural colors, high detail, one small person for scale, no text, no watermark, no logos.

### `AND-17-pudu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern pudú (Pudu puda): a tiny deer about 40 cm tall, round compact body, short legs, dense reddish-brown coat, small rounded ears, male with very short spike antlers. Walking out from bamboo-like caña colihue and ferns at the edge of a mossy forest clearing. Soft diffuse light, telephoto lens, eye-level, shallow depth of field. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-17-huemul`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a male south Andean deer or huemul (Hippocamelus bisulcus): stocky, short-legged deer with thick grey-brown coat, large ears, a dark Y-shaped mark on the forehead and muzzle, short simple forked antlers. Standing among lenga trees on a mountain slope above a blue lake. Soft late afternoon light, telephoto lens. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-17-huillin`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern river otter or huillín (Lontra provocax): sleek dark-brown otter with paler throat, long thick tapering tail, small ears; peering out from among the roots of a tree at the edge of a clear forest river. Soft diffuse light, telephoto lens, low angle near the water. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-18-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of La Trochita, the Old Patagonian Express, near Esquel, Chubut, Argentina: a small black narrow-gauge steam locomotive puffing a plume of white steam and smoke, pulling a short line of old wooden passenger carriages along a curving narrow track across golden Patagonian steppe, with the Andean foothills behind. Low warm morning light, side-on wide-angle panoramic composition with the train and smoke in the central band, big sky. Warm, natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-18-calafate`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of calafate (Berberis microphylla): a spiny Patagonian shrub with small leathery leaves, sharp three-parted thorns along the stems, and small round dark blue-purple berries with a whitish bloom (or small yellow cup-shaped flowers in spring). Soft natural light, vertical framing, steppe and mountains softly blurred behind. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-18-nahuel-pan`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a tiny rural railway station on the Patagonian steppe: a small old wooden station building next to a narrow-gauge track, a vintage steam locomotive stopped at the platform, open grassland and distant mountains under a vast sky. Soft late morning light, medium-wide shot. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-18-la-hoya`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Cerro La Hoya above Esquel, Chubut, Argentina, in winter: broad snow-covered mountain slopes with ski runs through scattered lenga forest, the valley and town below, clear blue sky. Bright crisp morning light, wide-angle. Natural cool palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-18-la-zeta`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Laguna La Zeta near Esquel, Chubut, Argentina: a calm blue lagoon among low hills with scattered shrubs and forest, a single kayak gliding on the water in the distance, mountains on the horizon. Soft early morning light with mirror reflections, wide-angle. Natural palette. natural colors, high detail, small distant kayaker allowed, no text, no watermark, no logos.

### `AND-19-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a tulip field in bloom in the valley of Trevelin, Chubut, Argentina: long straight rows of red, yellow, pink and white tulips stretching toward a line of poplar trees, with the snow-capped Andes rising behind. Spring morning light, clear sky, wide-angle panoramic composition with the flower rows and snowy peaks in the central band. Vivid but natural palette, not oversaturated. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-19-nant-fall`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of one of the Nant y Fall waterfalls near Trevelin, Chubut, Argentina: a white waterfall dropping over a rocky ledge into a pool, framed by Andean-Patagonian forest, a wooden viewing platform at the edge of the frame. Soft diffuse light, slow shutter for silky water, vertical framing. Natural green palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AND-19-molino`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an old brick flour mill building from the Welsh colony era in a small Patagonian town: a tall rectangular red-brick structure with small windows and a pitched roof, poplar trees and mountains behind. Soft afternoon light, three-quarter view. Natural warm palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-19-malacara`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a simple old gravestone for a horse in a quiet garden of a Patagonian town: a small weathered stone marker with a plaque, fresh grass and flowers around, poplar trees behind. Soft late afternoon light, medium shot, shallow depth of field. Natural palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AND-19-torta-negra`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a Welsh afternoon tea in a Patagonian tea house: a slice of torta negra (dark Welsh fruit cake, very dark brown and dense, studded with dried fruits and nuts) on a delicate china plate, a teapot with a knitted cozy, cups of tea, scones and jam on a lace tablecloth by a window with garden light. Warm soft side light, close-up with shallow depth of field. Warm, cozy palette. natural colors, high detail, no people unless stated, no text, no watermark, no logos.

---

## Patagonia Austral · Ruta 40

### `AUS-01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of cherry orchards at Los Antiguos, Santa Cruz, Argentine Patagonia: neat rows of cherry trees heavy with ripe dark-red fruit, tall poplar windbreaks between the plots, and behind them the vast turquoise Lago Buenos Aires stretching to the horizon, with bare brown Patagonian steppe hills and distant snow-dusted Andes on the far shore. Late-afternoon golden light in midsummer, low sun raking across the leaves, a few clean white clouds. Wide-angle landscape shot from a slight rise, the orchard rows and the turquoise band of the lake kept in the horizontal middle of the frame, deep focus. Warm, natural palette of green, deep red and turquoise, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-01-cerezas`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up food and agriculture photograph of freshly picked sweet cherries from Los Antiguos, Patagonia: a rustic wooden harvest crate full of large, glossy, dark mahogany-red cherries with green stems, a few cherries still hanging on a leafy branch at the top of the frame, orchard rows blurred in the background. Soft early-morning light with dew on the fruit. Shallow depth of field, 85 mm lens, vertical composition with the crate filling the lower two thirds. Warm natural tones; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-01-choique`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a lesser rhea or choique (Rhea pennata pennata) walking across open Patagonian steppe near Lago Buenos Aires: large flightless bird, grey-brown plumage densely spotted with white on the back and wings, long neck, long grey legs, smaller and paler than the greater rhea of the pampas. Low tufts of golden coirón grass and thorny shrubs, the lake as a thin turquoise line on the horizon. Soft morning light, telephoto lens, animal in the center of the frame, background softly blurred. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-01-martineta`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of an elegant crested tinamou or martineta (Eudromia elegans) walking at the edge of a gravel road in the Patagonian steppe: partridge-like ground bird with buff-brown plumage finely barred and spotted with white and black, a long thin dark crest curving forward from the crown, and white stripes on the face and neck. Dry golden grass and low grey shrubs around it. Warm late-afternoon side light, telephoto lens at ground level, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the old La Ascensión estancia headquarters in Patagonia National Park, Santa Cruz, Argentina: a cluster of early-20th-century ranch buildings with corrugated-metal roofs and pale walls, wooden corrals and a large shearing shed, set on the shore of the turquoise Lago Buenos Aires, with the wide stepped basalt plateau of the Meseta del Lago Buenos Aires rising behind under a huge sky. Golden-hour light, long shadows, wide-angle landscape composition with the buildings and lake on the central horizontal band. Natural, slightly warm palette, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-02-maca-tobiano`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a hooded grebe or macá tobiano (Podiceps gallardoi) floating on a small high-plateau lake in Santa Cruz, Patagonia: compact black-and-white grebe with a snow-white body and neck, black head with a white forehead and a pointed rusty-orange and black crest on top of the head, striking bright red eye, short dark bill — not the reddish-necked or grey grebes. Calm dark-blue water with green floating water-milfoil around it. Soft overcast morning light, long telephoto lens at water level, vertical framing with reflection below. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-02-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) standing on a ridge in the Patagonian steppe above a canyon: slender wild camelid with reddish-brown back, clean white belly and inner legs, grey-black face, upright pointed ears and a long neck. Golden coirón grass in the foreground and the reddish walls of the Pinturas River canyon falling away behind. Warm afternoon light, telephoto lens, animal off-center, background softly blurred. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-02-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) soaring along the basalt cliffs of the Cañadón Pinturas, Santa Cruz, Patagonia: all-black body, white fluffy ruff at the base of the neck, large white patches on the upper side of the wings, bare dark grey-black head — not white-headed like an eagle — and wide fingered primary feathers. Layered ochre and reddish canyon walls below, clear blue sky. Bright midday side light, telephoto lens, fast shutter. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-02-galpon-esquila`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic editorial travel photograph of an old Patagonian sheep-shearing shed: a long low building of weathered corrugated-iron walls and roof, wooden doors, worn timber sheep pens in front, tufts of steppe grass and a big open sky, a turquoise lake glimpsed in the distance. Warm late-afternoon light, wide-angle shot at eye level. Muted, natural palette of rust, grey and gold; natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Cueva de las Manos rock shelter, Santa Cruz, Argentina: a long shallow overhang in a pale volcanic canyon wall covered with hundreds of overlapping hand stencils in negative — red, ochre, white and black hands — seen from the wooden visitor walkway, with the walkway railing in the lower foreground. Soft even light inside the shelter, warm tones on the rock. Wide-angle composition, the band of hand stencils running across the horizontal center of the frame, deep focus. Natural earthy palette, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-03-caza-guanacos`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of ancient rock art at the Cueva de las Manos, Patagonia: a prehistoric hunting scene painted in red ochre on pale rock — small stylized hunters surrounding a group of running guanacos — with a few faded red and white hand stencils nearby. Soft, even, diffuse light that reveals the texture of the rock and the pigment. Macro-documentary style, vertical framing, sharp focus. Earthy reds and creams; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-03-canadon-pinturas`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic editorial travel photograph of the Pinturas River canyon, Santa Cruz, Patagonia, seen from the rim: a deep canyon with layered walls of reddish, ochre and pale volcanic rock, a thin line of green vegetation and a small river winding along the bottom, flat steppe plateau on both sides. Late-afternoon golden light raking across the walls, long shadows. Wide-angle, high viewpoint, deep focus. Warm natural palette; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-03-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of two guanacos (Lama guanicoe) grazing on the green floor of the Pinturas River canyon in Patagonia: slender wild camelids with reddish-brown backs, white bellies, grey-black faces and upright ears. Reddish canyon cliffs out of focus behind. Soft morning light, telephoto lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-03-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) gliding low over the Pinturas River canyon, seen slightly from above: all-black body, large white patches on the upper side of the wings, white fluffy neck ruff, bare dark grey-black head — not white-headed — and long fingered wingtips. Reddish and ochre canyon floor out of focus below. Bright clear light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Ruta 40 crossing the empty Patagonian steppe of Santa Cruz, Argentina: a long straight road disappearing toward the horizon, golden coirón grass and low grey shrubs on both sides, flat mesas, a single guanaco standing on the shoulder, and the faint snowy line of the Andes far to the west. Huge sky with long streaky lenticular clouds pushed by the wind. Late-afternoon golden light. Wide-angle composition with the road's vanishing point and the guanaco in the central horizontal band. Natural, warm palette, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-04-hotel-bajo-caracoles`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a remote roadside hotel and general store on a gravel stretch of Ruta 40 in Patagonia: a lonely building with a facade of rough stone blocks, a tin roof, a single old fuel pump in front and a dusty gravel forecourt, empty steppe and big sky all around. Warm late-afternoon light, vertical composition with the building and pump in the lower half and sky above. Muted natural palette; natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-04-guanacos`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a herd of guanacos (Lama guanicoe) on the steppe beside a gravel road in Santa Cruz, Patagonia: slender wild camelids with reddish-brown backs, white bellies, grey-black faces and upright ears, one of them crossing the road. A wire fence and golden grass, flat horizon. Soft afternoon light, telephoto lens compressing the herd. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-04-choique`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a lesser rhea or choique (Rhea pennata pennata) running alongside a Patagonian road: large flightless bird with grey-brown plumage densely spotted with white, long neck stretched forward, long grey legs in full stride, smaller and paler than the greater rhea. Dusty road shoulder and golden steppe grass, motion slightly frozen. Warm afternoon light, telephoto lens, panning shot with softly blurred background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-04-lago-cardiel`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic editorial travel photograph of Lago Cardiel in the Santa Cruz steppe, Patagonia: a large wind-rippled lake of deep blue water surrounded by bare, rounded ochre hills and flat mesas, no trees, a gravel track leading down to the shore. Clear, bright late-morning light with scattered clouds. Wide-angle landscape, horizon in the middle. Natural palette of blue and ochre; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lago Burmeister in Perito Moreno National Park, Santa Cruz, Argentina: a wild glacial lake of deep turquoise-blue water, a pebbly shore with tufts of steppe grass in the foreground, patches of dark-green native lenga forest on the lower slopes, and rugged snow-capped Andean peaks rising behind. A remote, empty place with no buildings. Early-morning soft light, calm water with faint reflections, thin clouds over the summits. Wide-angle landscape, the lake and mountain line in the central horizontal band. Cool natural palette, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-05-aguila-mora`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a black-chested buzzard-eagle or águila mora (Geranoaetus melanoleucus) perched on a basalt rock outcrop in the Patagonian steppe: large raptor with slate-grey head, back and dark grey-black chest, white finely barred belly, pale grey wing panels, a very short wedge-shaped tail, and yellow feet and cere. Blurred golden steppe and distant mountains behind. Soft morning light, long telephoto lens, vertical framing, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-05-guanacos-laguna`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a group of guanacos (Lama guanicoe) on the shore of a small steppe lagoon in Perito Moreno National Park, Patagonia: slender wild camelids with reddish-brown backs, white bellies, grey-black faces and upright ears, some reflected in the still water, a few waterbirds on the lagoon. Snow-capped mountains far behind. Golden late-afternoon light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-05-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) perched on a high cliff ledge in the Patagonian Andes: all-black body, white fluffy ruff at the base of the neck, folded wings showing white patches on the upper side, bare dark grey-black head with a fleshy comb — not white-headed like an eagle. A vast valley and lake far below, out of focus. Clear morning light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-05-nacurutu`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a Magellanic horned owl or ñacurutú (Bubo magellanicus) perched in a rocky crevice at dusk in the Patagonian steppe: large owl with prominent ear tufts, grey-brown plumage with fine dark horizontal barring on the chest, bright yellow-orange eyes, white throat patch. Basalt rock texture around it. Soft blue-hour light, telephoto lens, sharp focus on the eyes, background dark and blurred. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Mount Fitz Roy (Cerro Chaltén) at sunrise seen from Ruta Provincial 23 on the way into El Chaltén, Santa Cruz, Argentina: the paved road runs straight toward the jagged granite massif with its sharp spires, the peaks glowing fiery red-orange in the first sun, a thin plume of cloud near the summit, golden steppe on both sides of the road and the Fitz Roy river valley ahead. Wide-angle composition from the road, road's vanishing point leading to the mountain, massif in the central horizontal band. Warm alpenglow against a deep blue sky, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-06-laguna-de-los-tres`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of Laguna de los Tres in Los Glaciares National Park, Argentina: a small glacial lake of milky turquoise water at the foot of the Fitz Roy massif, the near-vertical granite towers rising straight above with a hanging glacier between them, a rocky moraine rim in the foreground, the peaks mirrored in the calm lake. Clear early-morning light, crisp air. Vertical composition with the lake in the lower third and the spires filling the upper frame. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-06-carpintero-gigante`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a male Magellanic woodpecker or carpintero gigante (Campephilus magellanicus) clinging to the trunk of a lenga beech tree in Patagonia: large black woodpecker with white wing patches, the male's entire head and curled crest bright crimson red, pale yellow eye, chisel-like grey bill, wood chips flying. Mossy bark, dim forest background softly blurred. Soft diffuse forest light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-06-huemul`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a south Andean deer or huemul (Hippocamelus bisulcus) standing at the edge of a lenga beech forest in Patagonia: stocky, short-legged deer with thick dense grey-brown coat, large rounded ears, dark Y-shaped marking on the forehead and muzzle, the male with short simple forked antlers — not a red deer. Mossy rocks and low shrubs around it. Soft overcast light, telephoto lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-06-lenga-otono`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic editorial travel photograph of a lenga beech forest (Nothofagus pumilio) in autumn near El Chaltén, Patagonia: twisted grey trunks and small rounded, finely toothed leaves turned bright red, orange and gold, a narrow dirt hiking trail winding through, granite peaks with fresh snow glimpsed through the branches. Soft warm afternoon light filtering through the canopy. Medium-wide shot, deep focus. Natural autumn palette, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Laguna Torre and Cerro Torre in Los Glaciares National Park, Argentina, seen from the rocky moraine: a grey-green glacial lake dotted with small icebergs, a glacier descending into its far end, and above it the needle-thin granite spire of Cerro Torre with its rime-ice cap, flanked by jagged neighbouring granite spires. Early-morning light hitting the spire, clear sky with a few wind-torn clouds. Wide-angle landscape, lake and spire base in the central horizontal band, deep focus. Cool natural palette; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-07-mirador-maestri`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of Cerro Torre seen from the crest of the lateral moraine above Laguna Torre, Patagonia: a narrow rocky ridge path of loose grey stones leading the eye toward the sheer granite needle of Cerro Torre with its ice mushroom on top, the crevassed glacier below it. Clear late-morning light, strong contrast, a few lenticular clouds. Vertical composition, the ridge in the lower third and the spire rising in the upper part. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-07-pato-torrentes`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a male torrent duck or pato de los torrentes (Merganetta armata) standing on a wet boulder in a fast white-water mountain stream in Patagonia: slim duck with a white head and neck boldly striped with black lines through the eye and down the neck, a bright red bill, dark streaked body, long stiff tail. Splashing water around, motion-blurred rapids. Soft overcast light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-07-carpintero`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a female Magellanic woodpecker (Campephilus magellanicus) on a lenga beech trunk in Patagonia: large black woodpecker with a long, curly forward-swept black crest and a small red patch at the base of the bill, white wing patches, pale yellow eye — unlike the male's all-red head. Rough grey bark with lichens, soft green forest background blurred. Diffuse forest light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-07-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) soaring past steep granite walls in the Fitz Roy area, Patagonia: all-black body, large white patches on the upper side of the wings, white fluffy neck ruff, bare dark grey-black head — not white-headed — and long fingered wingtips spread wide. Snowy rock faces softly blurred behind. Bright clear light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lago del Desierto seen from its southern shore (Punta Sur), Santa Cruz, Argentina: a long, narrow emerald-green lake stretching north between steep mountains covered in dense lenga and ñire forest, snow-capped peaks and a hanging glacier at the far end, a pebble beach in the foreground. Calm morning water with soft reflections, light mist on the slopes. Wide-angle landscape, the lake receding through the central horizontal band. Fresh green and blue palette, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-08-glaciar-huemul`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the Huemul hanging glacier near Lago del Desierto, Patagonia: a blue-white tongue of crevassed ice hanging from a dark rocky mountain wall above a small grey-green meltwater lagoon, thin waterfalls streaming down the rock, lenga forest framing the lower edge. Soft overcast light that makes the ice look deep blue. Vertical composition, the lagoon at the bottom and the glacier filling the upper half. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-08-chorrillo-del-salto`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic editorial travel photograph of the Chorrillo del Salto waterfall near El Chaltén, Patagonia: a single white ribbon of water falling over a dark rock wall into a clear pool, surrounded by lenga beech forest and mossy boulders. Soft diffuse light in the forest, slightly slow shutter for a silky water effect. Medium-wide shot. Natural green and grey palette; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-08-huemul`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a female south Andean deer or huemul (Hippocamelus bisulcus) among lenga trees by a lake shore in Patagonia: stocky, short-legged deer with a thick grey-brown coat, large rounded ears, dark facial markings, no antlers. Turquoise lake water softly blurred behind. Soft morning light, telephoto lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Laguna Nimez nature reserve in El Calafate, Santa Cruz, Argentina: a shallow lagoon with a flock of pink Chilean flamingos wading in the foreground, reeds and low steppe grass on the shore, and behind them the wide milky turquoise water of Lago Argentino with the low houses of El Calafate and bare brown hills along the far edge. Golden late-afternoon light, calm water reflecting the birds. Wide-angle landscape with a slightly long lens, flamingos and lake in the central horizontal band. Soft natural palette of pink, turquoise and gold, not oversaturated; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-09-flamenco-austral`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a Chilean flamingo or flamenco austral (Phoenicopterus chilensis) standing in shallow water at Laguna Nimez, Patagonia: pale pink body with brighter crimson-pink wing coverts, long greyish legs with distinctly pink knee joints and feet, a bent bill that is pale at the base and black on the outer half (more than half black) — not the uniformly bright orange-red Caribbean flamingo. Calm turquoise water with a soft reflection. Golden morning light, long telephoto lens, vertical framing. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-09-calafate-flor`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Close-up botanical photograph of a calafate shrub (Berberis microphylla) in the Patagonian steppe: small, stiff, oval leaves, sharp three-pronged spines along the stems, clusters of small bright yellow cup-shaped flowers and, on another branch, round dark blue-black berries with a whitish bloom. Steppe and blue sky softly blurred behind. Soft spring light, macro lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-09-pico-de-plata`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a male spectacled tyrant or pico de plata (Hymenops perspicillatus) perched on a reed stem by a Patagonian lagoon: small all-black songbird with a pale ivory-yellow bill, a conspicuous fleshy pale-yellow ring around the eye, and white wing patches visible at the edge of the folded wing. Blurred green reeds and water behind. Soft morning light, long telephoto lens, sharp focus on the eye. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-09-bar-de-hielo`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic interior photograph of an ice bar: walls, bar counter, stools and shelves all carved from blocks of clear and frosted ice, lit from within by cool blue and white LED light, a row of ice glasses on the counter. Cold, crisp atmosphere, wide-angle interior shot, sharp detail of the ice texture. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Perito Moreno Glacier in Los Glaciares National Park, Argentina, seen from the visitor walkways: a vast jagged wall of white and deep-blue ice about 60 metres high stretching across the frame, its surface a field of sharp seracs and crevasses reaching back toward snowy mountains, small icebergs floating in the milky grey-turquoise water of the Brazo Rico in front, lenga forest on the shore at one side. Soft overcast light that intensifies the blue of the ice. Wide-angle panoramic composition with the ice front in the central horizontal band. Cool natural palette; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-10-ruptura`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial photograph of a huge block of ice breaking off the front of the Perito Moreno Glacier and crashing into the lake: chunks of white and blue ice in mid-fall, an explosion of spray and white water at the base, the crevassed ice wall behind. Overcast light, fast shutter freezing the motion, telephoto lens, vertical framing with the falling ice in the center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-10-calafate-fruto`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Close-up botanical photograph of ripe calafate berries (Berberis microphylla) on a spiny branch: round dark blue-black berries with a dusty whitish bloom, small stiff oval green leaves, sharp spines on the stem. Blurred glacier-blue and green background. Soft late-summer light, macro lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-10-zorro-colorado`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of a culpeo or zorro colorado (Lycalopex culpaeus) sitting at the edge of a lenga beech forest in Patagonia: medium-sized fox with a reddish-tawny head, ears and legs, grizzled grey back, pale whitish throat and a long bushy grey tail with a dark tip. Mossy ground, soft green background. Soft morning light, telephoto lens at eye level, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-10-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) soaring above a glacier-fed lake arm in Patagonia, seen from below against a pale sky: huge all-black bird with long fingered wingtips, white fluffy neck ruff, bare dark grey-black head — not white-headed — and the white upper-wing patches showing as the bird banks. Forested slopes and ice softly blurred at the bottom of the frame. Bright overcast light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Spegazzini Glacier in Los Glaciares National Park, Argentina, seen from the deck of an excursion boat: a towering wall of white and blue ice more than 100 metres high flowing down between steep dark mountain walls into a milky turquoise channel, floating ice in the water, and in the foreground the boat's railing with a few warmly dressed passengers seen from behind for scale. Soft overcast light, misty peaks. Wide-angle composition, the ice front in the central horizontal band. Cool natural palette; natural colors, high detail, people only as small figures from behind at the railing, no text, no watermark, no logos.

### `AUS-11-tempanos`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of icebergs floating in the Upsala channel of Lago Argentino, Patagonia: sculpted blocks of ice in vivid translucent blue and white, with wind- and water-carved arches and ridges, drifting on milky grey-turquoise water, dark mountains fading into the mist behind. Soft overcast light that deepens the blue. Vertical framing with the largest iceberg in the lower two thirds. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-11-glaciar-upsala`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic editorial travel photograph of the Upsala Glacier seen from far away across Lago Argentino: a broad, low white ice front at the end of a long valley between dark mountains, the lake in front scattered with many icebergs of various sizes, snowfields above. Soft hazy light, telephoto lens compressing the distance. Natural cool palette; natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-11-base-spegazzini`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic editorial travel photograph of a wooden walkway and viewing platform on a forested lakeshore slope in Los Glaciares National Park, Patagonia, looking out toward a glacier front and a turquoise channel with floating ice: lenga beech trees around the deck, mountains behind. Soft overcast light, wide-angle shot from the trail. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-11-condor`
**Formato:** horizontal 3:2 (se recorta a 16:9 o más angosto)
Photorealistic wildlife photograph of an Andean condor (Vultur gryphus) gliding along a steep rock wall above a glacial channel in Patagonia: all-black body, large white patches on the upper side of the wings, white fluffy neck ruff, bare dark grey-black head — not white-headed like an eagle — and wide fingered wingtips. Blue-grey water with small ice floes far below, out of focus. Clear light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

---

## Patagonia Austral · Costa y Tierra del Fuego

### `AUS-12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Las Grutas, Río Negro, Argentina, at low tide: a long line of pale ochre and beige sedimentary cliffs, finely layered, with dark sea caves hollowed out at their base, a vast flat beach of wet sand and rock platforms exposed by the retreating tide, shallow tide pools reflecting the sky, calm turquoise water of the San Matías Gulf in the distance. Late afternoon golden hour light raking across the cliff layers, long soft shadows. Wide-angle landscape composition with the cliffs and caves in the central horizontal band, open sky above, beach in the foreground. Warm, natural palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-12-playero-rojizo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a red knot (Calidris canutus rufa) feeding on a tidal mudflat of the Bahía de San Antonio, Río Negro, Argentina: a stocky medium-sized sandpiper with a short, straight, dark bill (not long or curved), rusty-orange face and breast in breeding plumage, grey back feathers with black and rufous scaly pattern, short greenish-grey legs. Wet shining mud with small reflections, soft early morning light. Telephoto, eye-level with the bird, shallow depth of field, creamy blurred background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-12-pozones`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of low-tide rock pools on the beach of Las Grutas, Río Negro, Argentina: flat sedimentary rock platforms with clear shallow pools of turquoise water, green seaweed and small shells, the layered ochre cliffs in soft focus behind, the sea far out at the horizon. Bright morning light, gentle reflections. Low wide-angle composition from just above the water surface. Fresh, natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-12-lobos-villarino`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a South American sea lion colony at Punta Villarino, San Antonio Este, Río Negro, Argentina: South American sea lions (Otaria flavescens) — large males with a thick tawny mane, blunt upturned snout and massive neck, smaller light-brown females — resting together on a low rocky shore, calm grey-blue sea behind. Soft overcast light. Telephoto from a distance, several animals in the frame, shallow depth of field. Natural, muted coastal palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-12-chorlos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a small flock of migratory shorebirds feeding at the tide line of a wide sandy-muddy beach on the Bahía de San Antonio, Patagonia, Argentina: white-rumped sandpipers (Calidris fuscicollis) — small, grey-brown streaked upperparts, white underparts, short dark slightly drooping bill, black legs — probing the wet sand, with a thin sheet of water reflecting them. Low golden evening light from the side. Low-angle telephoto at bird level, background softly blurred. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic wildlife and travel photograph of a southern right whale mother and calf very close to the shore of El Doradillo beach, Golfo Nuevo, near Puerto Madryn, Chubut, Argentina: southern right whales (Eubalaena australis) — broad black backs with no dorsal fin, pale whitish callosities on the head, a V-shaped blow — surfacing a few meters from a pebble beach, calm silvery water, low brown coastal cliffs and steppe along the curving shore. Warm sunset light, soft pink and gold sky. Wide composition from the beach with the whales in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-13-lobo-un-pelo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a male South American sea lion (Otaria flavescens) at Punta Loma, Puerto Madryn, Chubut, Argentina: huge thick neck with a shaggy tawny-golden mane like a lion, short blunt upturned muzzle, small ears, dark brown body, resting on a rocky ledge at the foot of pale layered sandstone cliffs. Soft morning side light on the mane. Telephoto portrait, head and shoulders, shallow depth of field, cliff background blurred. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-13-cormoranes`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic wildlife photograph of rock shags (Leucocarbo magellanicus) nesting on narrow ledges of a pale layered sedimentary cliff at Punta Loma, Chubut, Argentina: black head and neck, white belly, bare red facial skin around the eye, a small white patch on the cheek, seaweed nests on the ledges. Soft afternoon light. Telephoto, horizontal band of ledges across the middle of the frame. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-13-punta-cuevas`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic editorial travel photograph of the rocky shore at Punta Cuevas, Puerto Madryn, Patagonia, where the first Welsh settlers landed in 1865: low rocky point with small natural caves in pale sandstone, the wide calm bay of Golfo Nuevo and the distant city waterfront on the horizon. Early morning soft light, calm water. Wide horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-14-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic wildlife photograph at Punta Norte, Península Valdés, Chubut, Argentina: an orca (Orcinus orca) — glossy black body, tall black dorsal fin, white oval patch behind the eye, grey saddle patch behind the fin — deliberately stranding itself in the shallow surf of a steep pebble beach, a spray of white water, a group of brown South American sea lions on the beach a few meters away. Overcast bright light, dramatic but natural. Telephoto from the shore, action in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-14-elefante-marino`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a southern elephant seal (Mirounga leonina) on a pebble beach of Península Valdés, Chubut, Argentina: a huge adult male with a short drooping inflatable proboscis over the mouth, grey-brown wrinkled skin, no external ears, rearing up and roaring, other seals lying behind. Soft morning light. Telephoto, low angle at beach level, background blurred. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-14-ballena-franca`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a southern right whale (Eubalaena australis) breaching in the Golfo Nuevo off Puerto Pirámides, Chubut, Argentina: massive black body with no dorsal fin, white callosities on the head, white patches on the belly, water cascading off it, ochre cliffs of the gulf in the distance. Bright clear morning light. Telephoto from a boat, whale in the center of the frame. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-14-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) standing in the flat shrub steppe of Península Valdés, Argentina: slender camelid with reddish-brown upper body, white belly and inner legs, grey-black face, long neck and pointed ears, knee-high grey-green bushes around it, a gravel road faintly visible behind. Warm late afternoon light. Telephoto, animal alert and looking at the camera. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-14-mara`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Patagonian mara (Dolichotis patagonum) in the dry steppe of Península Valdés, Argentina: a large hare-like rodent with long upright ears, long thin deer-like legs, grey-brown back, a bright white patch on the rump and orange-tinted flanks, sitting upright among low bushes and sandy ground. Soft golden light. Telephoto, eye level, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-15-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial photograph of a full-size titanosaur skeleton replica (Patagotitan mayorum) in a modern paleontology museum hall in Patagonia: an enormous sauropod skeleton about 37 meters long, very long neck stretching across the room, small head, massive limb bones, a few visitors standing at its feet for scale. Bright, even museum lighting, clean architecture. Wide-angle horizontal composition with the whole skeleton in the central band. Natural colors, high detail, people only small for scale, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-15-te-gales`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial food photograph of a traditional Welsh tea in Gaiman, Chubut, Patagonia: a table with a lace tablecloth, a china teapot and cups of black tea, a sliced dark fruit loaf (bara brith) and other homemade cakes and scones on floral plates, a window with soft daylight behind. Warm, gentle side light. Close-up from a slight top angle, shallow depth of field. Warm, homely palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-15-casa-de-te`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic editorial travel photograph of an old red-brick Welsh-style tea house in a small Patagonian village: a two-story brick house with white window frames, a gabled roof, a flowering garden with roses and tall poplars around it. Soft late afternoon light. Horizontal composition, house centered. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-15-canal-riego`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic editorial travel photograph of an irrigation canal in the lower Chubut River valley, Patagonia, Argentina: a straight water channel lined by tall Lombardy poplars, green irrigated fields and small farms on both sides, the dry beige plateau cliffs of the meseta in the background. Golden hour light, reflections on the water. Horizontal composition with the canal leading into the frame. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-16-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic wildlife and travel photograph of the Magellanic penguin colony at Punta Tombo, Chubut, Argentina: dozens of Magellanic penguins (Spheniscus magellanicus) — black backs, white fronts with two black bands across the chest, a white stripe curving from above the eye down to the throat — standing at the entrances of their burrows dug under low grey-green shrubs, a dirt trail running through the colony and the blue Atlantic in the background. Soft early morning light. Wide-angle, low composition with penguins in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-16-pichon`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a pair of adult Magellanic penguins (Spheniscus magellanicus) — two black bands across the white chest, white stripe from the eye to the throat — with a fluffy grey-brown downy chick at the mouth of their burrow under a shrub, Punta Tombo, Chubut, Argentina. Warm, soft light. Low-angle telephoto at penguin height, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-16-guanaco`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) — reddish-brown back, white belly, grey-black face — standing calmly beside a dirt walking trail in the shrub steppe of Punta Tombo, Chubut, with a few Magellanic penguins in the foreground near their burrows. Soft morning light. Telephoto, horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-16-sendero`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic editorial travel photograph of a marked walking trail with low wooden railings winding through a Magellanic penguin colony in the stony shrub steppe of Punta Tombo, Patagonia, penguins standing near the path and at their burrows, the low rocky point and the sea behind. Clear midday light, blue sky. Wide horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-17-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic wildlife and travel photograph of Magellanic penguins (Spheniscus magellanicus) — black backs, white fronts with two black chest bands, white stripe from the eye to the throat — standing on rounded granite-like coastal rocks at Cabo Dos Bahías, near Camarones, Chubut, Argentina, with a clear turquoise bay and small rocky islets behind. Bright morning light, crisp clear air. Wide-angle composition with penguins and rocks in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-17-museo-peron`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a modest early-1900s house turned into a small local history museum in a Patagonian fishing village: simple facade, corrugated metal roof, painted wooden windows and door, a dirt sidewalk and a wide blue sky. Soft morning light. Straight-on vertical composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-17-lobos-marinos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of South American sea lions (Otaria flavescens) — maned tawny males with blunt upturned snouts and smaller light-brown females — resting on dark coastal rocks of Cabo Dos Bahías, Chubut, with turquoise water and a rocky islet behind. Soft afternoon light. Telephoto, several animals in frame. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-17-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a guanaco (Lama guanicoe) — reddish-brown back, white belly, grey-black face — crossing a gravel road in the dry Patagonian coastal steppe near Camarones, Chubut, low bushes and the sea faintly visible on the horizon. Warm late afternoon light. Telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-17-choique`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a lesser rhea or Darwin's rhea (Rhea pennata), called choique: a large flightless bird, smaller than the greater rhea, with grey-brown plumage dotted with distinct white spots on the back and wings, long neck and strong legs, walking through low shrub steppe in Chubut, Patagonia. Soft golden light. Telephoto, side view. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-18-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a giant petrified araucaria trunk lying on the bare windswept plateau of the Bosques Petrificados de Jaramillo National Park, Santa Cruz, Argentina: a very long fossilized log broken into segments, stone with visible wood grain in grey, ochre and reddish tones, scattered fragments around it on pale eroded ground, dark flat-topped hills and a huge dramatic Patagonian sky with streaked clouds behind. Late afternoon low golden light. Wide-angle, low viewpoint, trunk running across the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-18-corteza`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up photorealistic photograph of the surface of a petrified araucaria trunk in Patagonia: fossilized bark and wood grain turned to stone, fine growth rings and cracks, colors of rust, cream, grey and amber, a few silica crystals catching the light. Raking warm light revealing the texture. Macro-style composition, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-18-seccional`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic editorial travel photograph of a small, simple park ranger station in the remote Patagonian steppe: a low building with a metal roof, a flagpole, a gravel parking area at the end of a long dirt road, dry plateau and big open sky around. Clear morning light. Wide horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-18-meseta`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic landscape photograph of the cold, arid Patagonian plateau in Santa Cruz, Argentina: endless flat steppe of tufted yellow grass and low cushion shrubs bent by the wind, distant mesas on the horizon, fast-moving clouds casting shadows. Strong clear light. Panoramic horizontal composition with a low horizon. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-19-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Ría Deseado estuary, Puerto Deseado, Santa Cruz, Argentina, seen from a small boat: calm blue-green water winding between steep reddish-brown and ochre rock walls, small rocky islands with seabirds, the bow of the boat just visible in the lower corner. Warm morning light on the cliffs. Wide-angle composition with the ría and walls in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-19-penacho-amarillo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a southern rockhopper penguin (Eudyptes chrysocome) on a rocky slope of Isla Pingüino, Santa Cruz, Argentina: small penguin with bright red eyes, a short stout orange-red bill, a thin bright yellow eyebrow stripe that starts behind the bill and ends in drooping yellow plumes beside the head, spiky black crest feathers on top, black back and white belly, pink feet. Soft overcast light. Telephoto portrait at eye level, rocks blurred behind. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-19-tonina-overa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Commerson's dolphin (Cephalorhynchus commersonii), called tonina overa, leaping out of the water in the Ría Deseado, Patagonia: a small stocky dolphin with a sharp black-and-white pattern — black head, white throat and a broad white band around the body, black rear section and tail, a rounded black dorsal fin. Bright light, splashing water. Fast telephoto shot, dolphin in the center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-19-cormoran-roquero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a rock shag (Leucocarbo magellanicus) on its seaweed nest on a ledge of a reddish rock wall in the Ría Deseado, Santa Cruz: black head and neck, white belly, bare red facial skin around the eye, small white patch on the cheek. Soft afternoon light. Telephoto, nesting ledge filling the frame. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-19-pinguino-magallanes`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of Magellanic penguins (Spheniscus magellanicus) — black backs, white fronts with two black bands across the chest, white stripe from above the eye down to the throat — standing on the rocky shore of a small island in the Ría Deseado, Patagonia, calm estuary water and reddish cliffs behind. Warm light. Telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-20-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a full-size replica of a 16th-century carrack, Magellan's ship Nao Victoria, displayed on the waterfront of Puerto San Julián, Santa Cruz, Argentina: dark wooden hull, high stern castle, three masts with rigging, the calm wide bay of San Julián and low Patagonian coast behind. Golden late-afternoon light, clear sky. Horizontal composition with the ship in the central band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-20-mapa-pigafetta`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up photograph of a bronze relief map in the style of a 16th-century explorer's chart (Antonio Pigafetta), showing a stylized coastline, sea and compass details, with a warm patina, mounted outdoors on a low stone base. Raking late afternoon light revealing the relief. Close-up from a slight angle, shallow depth of field. Natural colors, high detail, no people unless stated, no readable text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-20-delfin-austral`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Peale's dolphin (Lagenorhynchus australis), called delfín austral, surfacing next to a boat in the bay of San Julián, Patagonia: dark grey-black face and back, a pale grey patch on the flank, a white patch behind the flipper ("armpit"), a tall curved dark dorsal fin. Bright light, sparkling water. Telephoto, dolphin in center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-20-pinguinos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a group of Magellanic penguins (Spheniscus magellanicus) — two black bands across the white chest, white stripe from the eye to the throat — on a low shingle shore of the bay of San Julián, Santa Cruz, seen from a boat, calm water in the foreground. Soft morning light. Telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-20-circuito-costero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a gravel coastal road along the bay of Puerto San Julián, Patagonia: low pale cliffs, small pebble beaches and the wide blue bay, a camper van-sized pullout with a viewpoint, open sky. Golden hour light. Wide horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-21-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the coast of Monte León National Park, Santa Cruz, Argentina, at very low tide: tall pale beige and ochre sedimentary cliffs with caves and arches, a wide exposed intertidal platform of dark rocks, gravel and tide pools stretching toward the Atlantic, the flat steppe edge on top of the cliffs. Late afternoon golden light raking across the cliffs, long shadows. Wide-angle composition with the cliffs and exposed beach in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-21-pinguinera`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a dense Magellanic penguin colony in Monte León National Park, Patagonia: many Magellanic penguins (Spheniscus magellanicus) — black backs, white fronts with two black bands across the chest, white stripe from above the eye down to the throat — standing among low shrubs and burrows on a slope above the sea, one penguin sharp in the foreground. Soft morning light. Telephoto, vertical composition with depth. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-21-lobos-elefantes`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of South American sea lions (Otaria flavescens) — maned tawny males with blunt upturned snouts, smaller light-brown females — and a few southern elephant seals (Mirounga leonina) — massive grey-brown bodies, no external ears — resting on a rocky beach at the foot of pale cliffs in Monte León, Santa Cruz. Soft overcast light. Telephoto from the clifftop. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-21-guanaco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a small herd of guanacos (Lama guanicoe) — reddish-brown backs, white bellies, grey-black faces — walking across golden grass steppe on the edge of the coastal cliffs of Monte León, Santa Cruz, the Atlantic visible behind. Warm late afternoon light. Telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-21-galpon`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an old Patagonian sheep-shearing shed converted into a visitor center: a long building with corrugated metal walls and roof, painted in faded tones, wooden doors, gravel yard, open steppe and big sky around. Soft morning light. Horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-22-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Lago Fagnano from the shore at Tolhuin, Tierra del Fuego, Argentina: a vast elongated lake of steel-blue water stretching to the horizon between dark forested mountains with snow on the peaks, a pebble beach, and grey bleached dead trees standing in the shallow water in the foreground (trees drowned after the 1949 earthquake). Soft late afternoon light, dramatic clouds. Wide-angle composition with lake and mountains in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-22-panaderia`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the inside of a busy, rustic roadside bakery in Tierra del Fuego: a long wooden counter and glass display cases full of bread, medialunas, pastries and alfajores, warm interior lights, wooden walls. Warm cozy light. Vertical composition, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-22-balsa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a car ferry crossing the Strait of Magellan at Primera Angostura, Chile: a medium-size roll-on roll-off ferry with an open deck loaded with cars, a truck and a white camper van, choppy grey-green water, low flat Patagonian shore on the horizon. Bright, windy day with fast clouds. Horizontal composition, ferry in the center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-22-faro-virgenes`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a tall historic lighthouse standing on a windswept grassy cliff top at Cabo Vírgenes, the southern tip of mainland Argentina, the Atlantic Ocean behind, a gravel road leading to it. Late afternoon golden light, big sky. Horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-22-pinguinos-virgenes`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of Magellanic penguins (Spheniscus magellanicus) — black backs, white fronts with two black chest bands, white stripe from the eye to the throat — among low shrubs and burrows on the flat coastal steppe of Cabo Vírgenes, Santa Cruz, with a distant lighthouse on the horizon. Soft light. Telephoto. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-23-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph from the Paso Garibaldi viewpoint on Ruta 3, Tierra del Fuego, Argentina: Lago Escondido below, a dark blue lake tucked between steep mountains covered in dense southern beech (lenga) forest, the paved road descending in wide curves toward the lake, more distant ridges and Lago Fagnano faintly visible further away. Early autumn colors with some red and gold in the forest, soft afternoon light, scattered clouds. Wide-angle composition with the lake and the winding road in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-23-castor`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a beaver dam in Tierra del Fuego: a wall of gnawed sticks and mud across a forest stream, a still pond behind it, grey dead flooded southern beech trees standing in the water, a North American beaver (Castor canadensis) — brown fur, flat scaly tail — swimming near the dam. Soft overcast light. Vertical composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-23-tierra-mayor`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic landscape photograph of the Valle de Tierra Mayor near Ushuaia, Tierra del Fuego: a wide flat valley floor of peat bogs and meadows, rugged snow-capped peaks on both sides, lenga forest on the lower slopes, Ruta 3 running along the valley. Clear morning light. Panoramic horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-23-zorro-gris`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic wildlife photograph of a South American grey fox (Lycalopex griseus): a small slender fox with grizzled grey back, pale rufous legs and ears, white throat, a black spot on the chin and a bushy grey tail with a dark tip — smaller and greyer than the culpeo — standing at the edge of a southern beech forest in Tierra del Fuego. Soft light. Telephoto, eye level. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-24-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the bay of Ushuaia, Tierra del Fuego, Argentina, seen from the waterfront: the colorful city climbing the hillside, the port with a couple of expedition ships, calm water of the bay, and the jagged snow-covered Martial mountains rising directly behind the town. Early morning soft light with pink tones on the snow. Wide-angle composition with the city and mountains in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-24-presidio`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a long corridor inside an early-20th-century stone and concrete prison wing turned museum: rows of small cell doors on both sides, two levels with a gallery, a skylight letting cold daylight fall into the hall. Moody, soft natural light. Vertical symmetrical composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `AUS-24-glaciar-martial`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic landscape photograph of the Martial Glacier above Ushuaia, Tierra del Fuego: a small cirque glacier with snow and ice cradled in a bowl of dark rocky peaks, scree slopes and stunted lenga forest below, and the Beagle Channel glimpsed far below. Bright clear light. Panoramic horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-24-canal-beagle`
**Formato:** horizontal 3:2 (se recorta a una franja muy horizontal, ~2,6:1: dejá el motivo centrado)
Photorealistic editorial travel photograph of the Beagle Channel from the Ushuaia tourist pier: a small excursion catamaran leaving the dock, calm dark water, the snow-capped mountains of Navarino Island on the far shore. Late afternoon golden light. Panoramic horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-25-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Bahía Lapataia, Tierra del Fuego National Park, Argentina, where Ruta 3 ends: a calm fjord of deep blue water with small forested islets, steep mountains covered in southern beech forest and snow on the summits reflected on the water, a gravel road ending at a wooden boardwalk on the shore. Soft early morning light, mist on the water. Wide-angle composition with the bay and mountains in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-25-lenga-otono`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of lenga (Nothofagus pumilio) in autumn in Tierra del Fuego: small oval leaves about 2–3 cm long with rounded, double-scalloped edges, turning deep red, orange and gold on thin dark branches, a blurred forest of red and golden lengas behind. Soft diffuse light. Vertical composition, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-25-cauquen`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a pair of upland geese (Chloephaga picta), called cauquén, walking in a grassy clearing of Tierra del Fuego National Park: the male with white head and breast and black-barred white flanks, the female rufous-brown with fine black barring and yellow-orange legs. Soft morning light, lenga forest behind. Telephoto, low angle. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-25-zorro-colorado`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a Fuegian culpeo fox (Lycalopex culpaeus lycoides), called zorro colorado: a fairly large fox with a reddish-tawny head, ears and legs, grizzled grey back, white throat and a long bushy tail with a black tip, standing alert on a pebble shore at the edge of a lenga forest in Tierra del Fuego National Park. Soft light. Telephoto, eye level. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-25-conchero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an ancient shell midden on the shore of Bahía Lapataia, Tierra del Fuego: a low grassy mound with layers of white and blue-black mussel shells visible where it is eroded, the calm bay and forested mountains behind. Soft overcast light. Horizontal composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-26-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic wildlife and travel photograph of Magellanic penguins (Spheniscus magellanicus) — black backs, white fronts with two black bands across the chest, white stripe from above the eye down to the throat — walking along a pebble beach on Isla Martillo, Tierra del Fuego, Argentina, with the calm Beagle Channel and snow-capped mountains behind. Soft morning light, low clouds on the peaks. Low wide-angle composition at penguin level, penguins in the central horizontal band. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-26-pinguino-papua`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic wildlife photograph of a gentoo penguin (Pygoscelis papua) on a pebble beach of Isla Martillo, Beagle Channel: a white band across the top of the head connecting the eyes, bright orange-red bill, bright orange feet, black back and white belly, long brush-like tail — clearly different from the Magellanic penguins blurred in the background. Soft light. Telephoto portrait at eye level. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-26-isla-lobos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of sea lions and fur seals on Isla de los Lobos, Beagle Channel: South American sea lions (Otaria flavescens) — maned tawny males with blunt snouts — and South American fur seals (Arctocephalus australis) — smaller, darker grey-brown, pointed snouts and visible ears — resting on a dark rocky islet, cold green-grey water, snowy mountains far behind. Overcast soft light. Telephoto from a boat. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-26-cormoran-imperial`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic wildlife photograph of a dense colony of imperial shags (Leucocarbo atriceps) on Isla de los Pájaros, Beagle Channel: black backs, white fronts, a bright blue ring around the eye, small orange knobs at the base of the bill, a short crest, standing packed on a rocky islet streaked with guano. Soft overcast light. Telephoto from a boat. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `AUS-26-faro-eclaireurs`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Les Éclaireurs lighthouse in the Beagle Channel near Ushuaia: a short cylindrical tower painted red with a white band, on a small dark rocky islet with cormorants, cold blue water and snow-capped mountains of the channel behind. Clear golden afternoon light. Horizontal composition, lighthouse slightly off center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

---

## Buenos Aires

### `BSA-01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a wooden public passenger launch (lancha colectiva) sailing along a narrow brown-water stream in the Paraná Delta near Tigre, Buenos Aires, Argentina; on both banks, raised wooden island houses on stilts with small private docks, tall weeping willows and dense green riverside woodland reflected in the calm water. Soft golden light of late afternoon, slight haze over the water. Wide-angle shot from water level, the boat and its wake crossing the horizontal center of the frame, plenty of greenery on both sides. Warm, natural palette of greens and muddy browns, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-01-ceibo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up botanical photograph of a flowering ceibo tree (Erythrina crista-galli) on the high bank of a Paraná Delta island: clusters of large, waxy, crimson-red flowers with a keel-shaped lower petal (cockspur coral tree), trifoliate leaves, gnarled pale-grey trunk; a calm brown river and willows blurred in the background. Soft morning light from the side, shallow depth of field, telephoto lens, vertical composition with the flower cluster in the upper middle. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-01-estacion-fluvial`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a river passenger terminal on a wide muddy river in a delta town of Buenos Aires province: a modest boarding dock with moored wooden passenger launches, a covered waiting area, riverside trees, calm water. Clear mid-morning light, eye-level wide shot, gentle warm tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-01-lobito-de-rio`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a Neotropical otter (Lontra longicaudis), the "lobito de río", swimming at the surface of a calm brown delta stream: slender body with short, dense, dark-brown fur, paler cream throat and chin, small rounded ears, broad flat head and a long thick tapering tail — not a giant otter (no blotched throat patch) and not a coypu (no orange teeth, no rat-like tail). Riverbank reeds and willow roots in soft focus behind. Early morning light, telephoto lens, low angle near the water. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-01-carpincho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a capybara (Hydrochoerus hydrochaeris) standing at the muddy edge of a delta stream among reeds and willow roots, Paraná Delta, Argentina: large barrel-shaped rodent with coarse reddish-brown fur, blunt square muzzle, small ears set high, no visible tail. Soft golden late-afternoon light, telephoto lens, shallow depth of field, calm water reflecting the greenery. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the arrival by boat at Martín García Island in the Río de la Plata, Argentina: a small passenger boat approaching a simple concrete pier, behind it the low island with a few old pastel-colored historic buildings half hidden among tall dense trees of riverside gallery forest, wide calm brownish river in the foreground. Clear morning light, soft blue sky with a few clouds. Wide shot from the deck of the boat, the island stretching across the horizontal center of the frame. Warm natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-02-presidio`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a quiet street in a small historic island village in the Río de la Plata: weathered late-19th-century single-storey buildings with thick walls, faded ochre and white lime-washed facades, iron-barred windows and old wooden doors, under large shady trees; dirt-and-stone path, dappled light. Soft late-morning light, eye-level vertical composition, gentle warm tones, a melancholy historic atmosphere. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-02-lapacho`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of a pink lapacho tree (Handroanthus heptaphyllus) in full bloom at the edge of a riverside gallery forest: bare branches covered in clusters of trumpet-shaped bright pink flowers with yellowish throats, almost no leaves, green forest and pale sky behind. Soft morning light, medium telephoto, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-02-cardenal`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a red-crested cardinal (Paroaria coronata) perched on a thorny branch: bright red head with an erect pointed red crest, red throat bib, clean white underparts, grey back and wings, pale bill — not a northern cardinal (body is not red). Green blurred forest background, soft morning light, telephoto lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-02-pan-dulce`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic food photograph of a rustic homemade Argentine pan dulce (sweet bread loaf studded with candied fruit and nuts) on a worn wooden table in a small island bakery, one slice cut to show the dense crumb, brown paper beside it. Warm window light, shallow depth of field, close-up three-quarter angle, cozy natural tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph from the top of a gentle grassy ravine (barranca) looking down over the floodplain lowlands of the Paraná de las Palmas, Buenos Aires province, Argentina: a vast flat mosaic of native tall pampas grasses, reed marshes with shining pools of water and scattered small clumps of trees, extending to a low hazy horizon. Sunset light, warm golden glow on the grasses, long shadows. Wide-angle panoramic composition, the flat wetland and horizon in the horizontal center. Soft natural palette of golds, greens and blues. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-03-ciervo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Wildlife photograph of a marsh deer (Blastocerus dichotomus), a male standing chest-deep in a reed marsh: the largest South American deer, reddish-chestnut coat, black lower legs, large ears lined with white, black band on the muzzle, and wide double-forked antlers — not a red deer, not a white-tailed deer. Tall green and golden marsh grasses around it, water reflections. Early morning soft light, telephoto lens, shallow depth of field, vertical composition with the deer in the center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-03-pajonalera`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a straight-billed reedhaunter (Limnoctites rectirostris), a small slender ovenbird clinging to a tall reed stem in a marsh: warm rufous-brown upperparts, pale whitish underparts, a thin whitish eyebrow, a long straight sharp bill, and a long graduated tail with spiny tips. Background of blurred golden-green reeds. Soft morning light, long telephoto lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-03-sendero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a narrow mown nature trail winding through tall native pampas grassland in a protected area near the Paraná River, Buenos Aires province, Argentina, leading to a simple wooden viewing platform at the edge of a ravine overlooking wetlands. Soft late-afternoon light, eye-level wide shot, gentle golden tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the coastal salt marshes of Samborombón Bay, Buenos Aires province, Argentina: flat tidal mudflats with shining channels at low tide, low salt-marsh grasses, a distant line of native tala woodland on an old coastal ridge, a vast open sky, a few shorebirds as tiny silhouettes far away. Early morning light, pale gold and soft blue tones, light mist. Wide-angle panoramic composition with the horizon and channels in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-04-venado`
**Formato:** vertical 2:3 (se recorta a 4:5)
Wildlife photograph of a male Pampas deer (Ozotoceros bezoarticus) standing alert in tall native pampas grassland: small, slender deer, sandy-tan to yellowish-brown coat, white throat, white ring around the eye, white underside of the tail, and short simple three-tined antlers — not a white-tailed deer, not a red deer. Golden grass around, soft background blur. Early morning light, telephoto lens, vertical composition with the deer in the center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-04-playerito-canela`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a buff-breasted sandpiper (Calidris subruficollis) walking on short coastal grass near a tidal flat: small shorebird with a clean warm buff face, neck and underparts, scaly brown-and-buff upperparts, a short thin dark bill, a small round head with a large dark eye, and yellow legs. Low eye-level angle, soft morning light, long telephoto lens, smooth blurred background. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-04-nandu`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a greater rhea (Rhea americana) walking through open pampas grassland: large flightless bird with grey-brown shaggy plumage, long neck with a darker band at the base, long strong legs with three toes — not an ostrich (no black-and-white plumage, no bare pink neck). Wide flat grassland and big sky behind. Soft morning light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-04-faro-san-antonio`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a tall lighthouse standing on a low sandy point where a wide river estuary meets the open sea, Buenos Aires province coast, Argentina: flat dune grass and a broad beach around it, calm grey-blue water, big sky. Golden light of late afternoon, wide shot from the beach. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a wide sandy beach on the Atlantic coast of Pinamar, Buenos Aires province, Argentina: pale golden sand, gentle waves of a greenish-grey South Atlantic sea, and behind the beach a line of high sand dunes topped by a dark green forest of planted pines. Warm late-afternoon light raking across the dunes, long soft shadows, clear sky with light clouds. Wide-angle panoramic composition with beach, dunes and pine line in the horizontal center. Warm natural palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-05-carilo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of an unpaved sand street winding through a dense coastal pine forest in Cariló, Buenos Aires province, Argentina: soft pale sand road with tire tracks, tall straight pine trunks on both sides, a carpet of brown pine needles, no street lamps, a glimpse of a low wooden house among the trees. Soft filtered morning light with sunbeams through the canopy. Vertical composition with the road leading the eye into the forest, calm green and sand tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-05-lagartija-dunas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of the sand dune lizard of the Buenos Aires coast (Liolaemus multimaculatus) basking on pale sand among sparse dune grasses: small flattened lizard with sandy-grey body covered in many small dark and pale spots arranged in rows, excellent sand camouflage, short snout, no crest — not a green lizard, not a gecko. Low ground-level angle, bright morning sun, macro telephoto, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-05-medano`
**Formato:** horizontal 2:1 aprox. (fila de 2: se recorta más angosto)
Photorealistic editorial travel photograph of wild, unforested coastal sand dunes on the Buenos Aires Atlantic coast: smooth wind-rippled dune crests, scattered clumps of native dune grasses, open sky, no trees. Low golden side light emphasizing ripples, wide shot with the dune ridge in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Faro Querandí lighthouse near Villa Gesell, Buenos Aires province, Argentina: a tall slender lighthouse tower with alternating bands standing alone among vast pristine sand dunes with sparse grasses, the Atlantic Ocean on one side. Golden hour light, warm glow on the dunes, deep blue sky. Wide-angle panoramic composition with the lighthouse and dune field in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.** (Chequeá los colores reales de la torre antes de usar una imagen generada.)

### `BSA-06-casa-gesell`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a modest 1930s wooden-and-brick house standing on top of a wooded sand dune in a coastal pine and acacia forest, Buenos Aires province, Argentina; a sandy path climbs to it among the trees. Soft late-afternoon light filtering through the pines, vertical composition with the house in the upper third, nostalgic warm tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-06-mar-de-las-pampas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a quiet sand street in Mar de las Pampas, Buenos Aires province, Argentina: soft sandy road curving through a dense forest of pines and acacias, low wooden cabins half hidden among the trees, carpet of pine needles. Soft dappled morning light, eye-level wide shot, calm green tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-06-ostrero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of an American oystercatcher (Haematopus palliatus) walking on wet sand at the edge of the surf: black head and neck, brown back, clean white belly, long straight bright orange-red bill, yellow eye with a red eye-ring, pale pink legs — not the all-black Blackish oystercatcher. Low angle at sand level, soft morning light, telephoto lens, foam of small waves blurred behind. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-06-monjita-dominica`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a black-and-white monjita (Heteroxolmis dominicana) perched on a tall grass stem in coastal grassland: small bird mostly pure white, with black wings and black tail, a white patch on the primaries visible in the closed wing, black bill and legs — not a gull, not a magpie. Pale golden grassland background softly blurred, morning light, long telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Mar Chiquita coastal lagoon in Buenos Aires province, Argentina, seen from its mouth: a wide calm brackish lagoon with shallow mudflats and reed edges on one side, a narrow sand barrier with low dunes, and the open Atlantic Ocean with breaking waves on the other side; waterbirds as small silhouettes on the flats. Soft early-morning light, pastel sky reflected in the lagoon. Wide-angle panoramic composition with the sand barrier and both waters in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-07-cangrejo`
**Formato:** vertical 2:3 (se recorta a 4:5)
Close-up wildlife photograph of a burrowing mud crab (Neohelice granulata) at the entrance of its burrow in grey estuarine mud: squarish dark olive-brown carapace with granular texture, purple-tinged claws with pale tips, eyes raised on stalks; many small burrow holes around, a thin film of water reflecting light. Low macro angle at mud level, soft morning light, shallow depth of field, vertical framing. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-07-gaviota-cangrejera`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of an Olrog's gull (Leucophaeus atlanticus) standing on a coastal mudflat with a crab in its bill: adult with white head and body, solid blackish back and wings, a thick yellow bill with a red and black tip, yellow legs — not a kelp gull (bill is heavier with black subterminal band). Shallow water reflections, soft morning light, telephoto lens, low angle. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-07-rayador`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a black skimmer (Rynchops niger) skimming low over calm lagoon water with its lower mandible slicing the surface: black upperparts and cap, white forehead and underparts, long red bill with a black tip and a much longer lower mandible, long narrow wings. Golden late-afternoon light, telephoto lens with fast shutter, smooth water reflection. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-07-flamenco`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of Chilean flamingos (Phoenicopterus chilensis) wading in a shallow brackish lagoon: pale pink plumage with crimson wing coverts, greyish legs with distinctly pink "knees" and feet, bill pale at the base and black on the outer half — not the deep pink Caribbean flamingo. Soft early-morning light, telephoto lens, mirror-like reflections. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the sea lion colony at the port of Mar del Plata, Argentina: a group of South American sea lions lying piled together on a concrete quay by the water, with a row of old yellow-and-orange wooden fishing boats moored behind them. Warm early-morning light, gentle reflections in the harbor water. Wide-angle panoramic composition with the sea lions and boats in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-08-cabo-corrientes`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the rocky headland of Cabo Corrientes in Mar del Plata, Argentina: layered pale beige-brown quartzite rocks sloping into the sea, waves breaking white over the rock shelves, the curved coastline of the city softly in the background. Sunrise light from the sea, warm tones on the rock, vertical composition with the rocks in the lower half and sea and sky above. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-08-lobo-marino`
**Formato:** horizontal 2:1 aprox. (fila de 2: se recorta más angosto)
Wildlife photograph of an adult male South American sea lion (Otaria flavescens) resting on a harbor quay: massive dark-brown body, thick shaggy lighter mane around the neck and shoulders, short broad upturned muzzle, small external ears, large front flippers — not a seal (has external ears and long front flippers). Soft morning light, telephoto lens, harbor water blurred behind. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-08-laguna-de-los-padres`
**Formato:** horizontal 2:1 aprox. (fila de 2: se recorta más angosto)
Photorealistic editorial travel photograph of a calm freshwater lagoon in the gently rolling hills near Mar del Plata, Buenos Aires province, Argentina: reed beds on the shore, groves of trees, low hills of the Tandilia system in the background, mirror reflections. Soft golden evening light, wide shot. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a large rounded granite boulder balanced on the edge of a low rocky hill (the replica of the Piedra Movediza in Tandil, Buenos Aires province, Argentina), with the city of Tandil and the flat green pampas plain stretching to the horizon behind. Sunset light, warm orange glow on the rock, soft purple sky. Wide-angle panoramic composition with the boulder and the horizon line in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-09-centinela`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a rocky granite hill in the Tandilia range near Tandil, Buenos Aires province, Argentina: a chairlift line climbing over the slope among rounded grey granite boulders and native grassland, a tall rock outcrop on the summit. Soft late-afternoon light, deep blue sky, vertical composition with the chairlift leading the eye upward. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-09-sierra-del-tigre`
**Formato:** horizontal 2:1 aprox. (fila de 2: se recorta más angosto)
Photorealistic editorial travel photograph of low ancient hills of the Tandilia range, Buenos Aires province, Argentina: huge rounded grey granite blocks scattered over slopes of golden native tussock grassland (flechilla), a gentle summit in the distance, wide sky. Soft morning light, wide shot with the boulder field in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-09-lagartija-sierras`
**Formato:** horizontal 2:1 aprox. (fila de 2: se recorta más angosto)
Wildlife photograph of a small Liolaemus lizard endemic to the Tandilia hills (Liolaemus tandiliensis) basking on a lichen-covered granite rock among grass tufts: slender body with brownish-grey scales, rows of dark and pale spots along the back, short snout, no crest — not a gecko, not a green lizard. Low macro telephoto angle, warm morning sun, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Antes de usarla, confirmá con una fuente local la especie y su aspecto.**

### `BSA-10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a dense planted coastal forest of tall dark-green conifers that reaches right down to a wide sandy Atlantic beach in Necochea, Buenos Aires province, Argentina, seen from the top of a sand dune; the forest edge, the pale beach and the grey-blue sea form parallel bands. Golden morning light, light sea haze. Wide-angle panoramic composition with the forest-beach edge in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-10-lago-cisnes`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a calm small artificial lake bordered by reeds and a coastal pine forest, close to the beach dunes in Necochea, Buenos Aires province, Argentina; a few waterbirds as small distant silhouettes on the water, pine trunks reflected in the surface. Soft early-morning light with light mist, vertical composition with the reflections in the lower half. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-10-medanos-oeste`
**Formato:** horizontal 2:1 aprox. (fila de 2: se recorta más angosto)
Photorealistic editorial travel photograph of vast pristine white sand dunes on the Atlantic coast west of Necochea, Buenos Aires province, Argentina: tall smooth wind-sculpted dunes with sharp crests and ripples, sparse grass tufts, the sea visible as a thin line beyond. Low golden side light, wide shot with the dune crest in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-10-rio-quequen`
**Formato:** horizontal 2:1 aprox. (fila de 2: se recorta más angosto)
Photorealistic editorial travel photograph of the mouth of the Quequén Grande river where it meets the Atlantic between the towns of Necochea and Quequén, Buenos Aires province, Argentina: wide river channel with stone breakwaters reaching into the sea, beaches on both sides, low town skyline in the distance. Soft golden late-afternoon light, wide shot. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the sun setting directly into the sea from the wide sandy beach of Monte Hermoso, Buenos Aires province, Argentina: the sun touching the ocean horizon, a golden path of light on the gentle waves, wet sand reflecting the orange and pink sky, low dunes at one edge of the frame. Wide-angle panoramic composition with the horizon in the horizontal center. Warm but natural sunset palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-11-faro-recalada`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a very tall early-20th-century metal lattice lighthouse tower with a central cylindrical staircase shaft and a lantern on top, rising above coastal dunes and grassland near Monte Hermoso, Buenos Aires province, Argentina. Low-angle view from the base, soft golden late-afternoon light, deep blue sky, vertical composition emphasizing its height. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-11-laguna-sauce-grande`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a large shallow lagoon on the flat pampas near the Atlantic coast of southern Buenos Aires province, Argentina: wind-rippled blue water, reed beds on the shore, a flock of waterbirds in the distance, wide open sky with high clouds. Clear morning light, wide shot with the shoreline in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-11-cauquen`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a pair of upland geese (Chloephaga picta) grazing on short grass by a lagoon shore: the male with white head, neck and underparts with fine black barring on the flanks; the female cinnamon-brown with dense black barring and yellow legs; both with small black bills and white wing patches visible — not a domestic goose. Soft morning light, telephoto lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-11-escalera-faro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial photograph looking up the interior of a tall old metal lighthouse: a tight spiral iron staircase winding upward inside a cylindrical riveted metal shaft, light entering through small portholes, strong geometric perspective. Soft natural light from above, warm metallic tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Cerro Ventana in the Ventania range, Buenos Aires province, Argentina, seen from the road: a rugged ridge of folded grey-brown quartzite rising abruptly from golden grassland, with a natural window-shaped hole through the rock near the summit, the sky visible through it in backlight. Late-afternoon light, soft haze, golden grasses in the foreground. Wide-angle panoramic composition with the ridge and its rock window in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-12-guanaco`
**Formato:** vertical 2:3 (se recorta a 4:5)
Wildlife photograph of a guanaco (Lama guanicoe) standing on a high grassy slope of the Ventania hills: slender camelid with light reddish-brown upperparts, clean white belly and inner legs, grey-black face, long neck and upright pointed ears — not a llama (no woolly mixed colors) and not a vicuña. Folded rocky ridges blurred behind, soft morning light, telephoto lens, vertical composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-12-margarita-cumbre`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Close-up botanical photograph of Grindelia ventanensis, a low cushion-forming endemic plant of the Ventania hills growing among quartzite rocks: bright yellow daisy-like flower heads with many ray florets around a yellow center, small narrow leaves, compact rounded shape. Soft morning light, macro lens, shallow depth of field, rocky summit grassland blurred behind. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-12-caballo-cimarron`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a small band of feral horses (sturdy Criollo-type horses, bay and dun coats, thick manes) grazing in golden mountain grassland of the Ventania range, with folded rocky ridges behind. Soft late-afternoon light, telephoto lens, natural shaggy look, no saddles or tack. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-12-tres-picos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of Cerro Tres Picos, the highest summit of Buenos Aires province, Argentina: a massive ridge of folded quartzite with three distinct rocky peaks rising above rolling golden grassland. Early morning side light emphasizing the folded rock layers, clear sky, wide shot with the three peaks in the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the ruins of a large early-20th-century grand hotel among trees at the foot of hills in the Ventania range, Buenos Aires province, Argentina: roofless brick walls with tall arched window openings, fire-blackened masonry, vegetation growing inside, tall pines around. Soft late-afternoon light filtering through the trees, melancholic atmosphere. Wide composition with the ruined facade stretching across the horizontal center. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-13-arroyo-belisario`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small clear mountain stream running over rounded stones in a wooded valley at the foot of the Ventania hills, Buenos Aires province, Argentina: shallow water with small cascades, willows and pines on the banks, dappled light on the water. Soft morning light, slow shutter for slightly silky water, vertical composition. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-13-cascada-san-teofilo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small waterfall dropping over dark quartzite rock ledges into a clear pool in a hilly grassland ravine of the Ventania range, Buenos Aires province, Argentina; ferns and grasses on the rocks. Soft diffuse light, slow shutter for smooth water, wide shot. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-13-vizcacha`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a plains vizcacha (Lagostomus maximus) sitting among rocks at dusk: stocky grey rodent with a large blunt head, bold black-and-white horizontal facial stripes, long whiskers, pale belly — not a mountain viscacha (no rabbit-like long ears, no long bushy tail). Rocky outcrop and grass around, soft warm evening light, telephoto lens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-13-zorro-pampa`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Wildlife photograph of a Pampas fox (Lycalopex gymnocercus) standing in golden hill grassland: grizzled grey back, reddish-tawny head, ears and legs, white throat, dark muzzle and a bushy grey tail with a black tip — not a red fox (no bright orange body, no white tail tip). Soft early-morning light, telephoto lens, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

---

## Pueblitos de Buenos Aires · Norte y oeste

### `BSA-P01-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a 19th-century Italianate parish church with a single tall bell tower and a clock, facing a small leafy town square with old trees and benches in Capilla del Señor, a historic village in the pampas of Buenos Aires province, Argentina; cobblestone street in the foreground, low colonial-style houses with plastered facades on both sides, warm golden hour light from the side, eye-level wide shot with the church and tower centered in the middle horizontal band, calm and timeless atmosphere, warm natural palette, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P01-imprenta`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of an antique late-19th-century French cast-iron flatbed printing press (Marinoni style) displayed inside a small provincial museum in an old house: dark iron frame and large flywheel, wooden type cases and lead letters on a nearby table, whitewashed walls and wooden floor, soft window light raking across the metal, medium shot with shallow depth of field, muted warm tones, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P01-los-ombues`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an old rural pulpería (country general store and bar) in the Buenos Aires pampas: a low whitewashed adobe building with a tiled or tin roof and a wooden hitching post, standing between two huge ombú trees (Phytolacca dioica) with massive, gnarled, swollen trunks and wide dense green canopies, dirt road in front, flat grassland around, late afternoon golden light, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P01-miralejos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a 1920s Italianate townhouse in a small historic town of Buenos Aires province, Argentina: symmetrical plastered facade in soft cream tones, tall wooden shutters, ornate cornice and balustrade on the roofline, wrought-iron details, sidewalk with an old tree, soft morning light, straight-on architectural shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P01-locro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph of a steaming clay bowl of Argentine locro, a thick stew of white corn, squash, beans and pieces of meat and chorizo, topped with a red spicy oil sauce and chopped green onion, on a rustic wooden table of a country grill restaurant, a basket of bread and a glass of red wine in the soft background, warm window light, close-up with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P02-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the old pink-plastered brick arch bridge (Puente Viejo, 1857) over the calm Areco River in San Antonio de Areco, Buenos Aires province, Argentina: low arches reflected in the still brown-green water, tall shady trees and green lawns along the riverside promenade, golden hour light, wide shot with the bridge centered in the middle horizontal band, soft warm palette, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P02-plateria`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic close-up editorial photograph of Argentine criollo silverwork on a dark wooden workbench in a traditional silversmith's workshop: a gourd mate with an engraved silver rim and a silver bombilla, next to a gaucho facón knife with an ornate chiseled silver handle and sheath, small engraving tools around, warm lamp light glinting on the silver, shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P02-la-blanqueada`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a 19th-century rural pulpería in the pampas of Buenos Aires province: a long low whitewashed building with a tiled roof, small barred windows and a wooden hitching post, green lawn and old trees of a gaucho heritage park around it, soft late afternoon light, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P02-bessonart`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a centuries-old Argentine country general store turned bar: dark wooden counter, tall wooden shelves crowded with old dusty bottles, tins and jars, worn brick floor, a plate of baked lamb empanadas on the counter, dim warm light from a doorway, medium shot, nostalgic atmosphere, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P02-molina-campos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a quiet gallery room in a small museum in the Argentine countryside: framed colorful caricature-style paintings of gauchos and horses on the pampas hang on white walls, wooden floor, a window to a green garden, soft diffuse daylight, medium wide shot, paintings softly out of focus so no artwork is legible, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P03-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the riverside promenade (costanera) of Baradero, Buenos Aires province, Argentina, at sunset: a calm wide brown river of the Paraná delta with green wooded islands on the far bank, grassy banks with willows and tall trees, a small wooden pier, warm orange and pink sky reflected on the water, wide shot with the horizon in the middle band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P03-parroquia`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a historic white-plastered Catholic parish church facing a leafy town square in a small Argentine river town of Buenos Aires province: classical facade with a bell tower, palm trees and old trees in the square, deep blue sky, soft morning light, vertical framing from the square, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P03-el-torito`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an old country pulpería in the Buenos Aires pampas: a low rustic ranch-style building with whitewashed walls and a tin roof, a big red bull painted on one wall, wooden benches and a hitching post in front, a dirt road and tall eucalyptus trees around, warm late afternoon light, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P03-museo-barbich`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an 1870s colonial-style townhouse in a small Argentine town: plastered facade in pale ochre, tall wooden doors and windows with iron grilles, a flat roofline with a simple parapet, a tiled sidewalk with an old tree, soft morning light, straight-on architectural shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P03-balneario`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a riverside municipal park and beach on a branch of the Paraná delta in Buenos Aires province: a calm artificial lake surrounded by green lawns and willow trees, a small sandy river beach, fishing spots along the bank, clear summer afternoon light, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P04-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph from the top of the high green barrancas (river bluffs) of San Pedro, Buenos Aires province, Argentina: a wide view over the broad brown Paraná River with low wooded islands and channels, the tree-lined riverside promenade at the foot of the bluff, a few small boats, golden hour light, elevated wide shot with the river and islands in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P04-obligado`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a historic battlefield memorial on the high bank of the Paraná River in Buenos Aires province: old 19th-century iron cannons on a grassy bluff, the wide river bend and wooded islands below, a simple stone monument, dramatic soft evening light, vertical composition with the cannons in the foreground, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P04-escalera-flores`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a long outdoor stairway climbing a green river bluff, each step decorated with colorful ceramic mosaic tiles in floral patterns, flower beds and trees on both sides, a glimpse of the river at the bottom, soft morning light, view looking up the steps, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P04-buque-irigoyen`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a decommissioned World War II–era grey naval ship moored permanently as a museum in a small river port on the Paraná, Buenos Aires province: steel hull, gun mounts, bridge and mast, calm brown water and green riverbank trees, clear afternoon light, three-quarter view, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P04-fosil`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial photograph of a fossil skeleton of an extinct Pleistocene South American mammal, such as a glyptodont (Glyptodon) with its large domed shell made of polygonal bony plates, displayed in a small regional paleontology museum, soft museum spotlights against a dark background, medium shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P05-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of an old 19th-century British-style railway station in the tiny pampas village of Carlos Keen, Buenos Aires province, Argentina: a low brick station building with a long platform and wooden canopy, large old corrugated-iron grain warehouses beside the disused tracks, a few artisan market stalls with canvas awnings on the grass, tall eucalyptus and plane trees, warm late-morning weekend light, wide shot with the station in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P05-capilla`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small early-20th-century neo-Romanesque country chapel in the Argentine pampas: exposed brick or pale plastered facade with round arches, a rose window and a single bell gable, a short lawn and tall trees around, a quiet dirt street in front, soft golden afternoon light, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P05-vinedo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a young boutique vineyard in the flat green pampas of Buenos Aires province: neat rows of young trained grapevines on wire trellises with fresh green leaves, a small modern country restaurant building at the end of the rows, wide open sky with soft clouds, warm sunset light, wide shot at vine level, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P05-asado-estaca`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a traditional Argentine asado a la estaca: whole racks of beef ribs and lamb opened and skewered on iron crosses, leaning around a low wood fire in the open air at a country restaurant, glowing embers and light smoke, golden brown crispy meat, warm late-morning light, medium shot with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P05-el-molino`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a rustic country restaurant in the Buenos Aires pampas: an old brick farmhouse with a shaded gallery, wooden tables with checked tablecloths set under large trees on a green lawn, a metal windmill (molino) standing in the field behind, soft midday light filtered through leaves, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P06-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the small old railway station of Villa Ruiz, a village of about 500 people in Buenos Aires province, Argentina, now a museum: a low brick station building with a tin canopy over the platform, an old bronze station bell hanging on an iron post, a flagpole and an old wooden entrance turnstile, rusty disused tracks, green grass and trees, bright sunny day, wide shot with the station centered in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P06-puente`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of an old rusty iron truss bridge over a small winding pampas stream with grassy banks, willows and tall reeds, a dirt country road crossing it, calm water reflecting the structure, soft early morning light with light mist, vertical framing from the bank, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P06-pulperia`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an early-20th-century country house turned rural restaurant in Buenos Aires province: whitewashed walls, a long shaded gallery with wooden posts, a wide green park with tall old trees and tables on the lawn, a grill with smoke in the background, warm midday light, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P06-ypf`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an abandoned small-town gas station from the mid-20th century at the entrance of a pampas village: a low building with a flat canopy, two old rusty fuel pumps, faded blue and white paint, weeds growing on the concrete, a dirt road and open fields behind, warm late afternoon light, wide shot, no brand names visible, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P06-capilla`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small simple white country chapel in a tiny Argentine pampas village: plastered facade with a small bell gable and a cross, a wooden door, a low fence and trees around, wide blue sky, soft morning light, straight-on medium shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P07-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a quiet pampas village in Buenos Aires province, Argentina: a 1907 neo-Romanesque chapel with a brick facade, round arches and a bell tower facing a small grassy plaza with old trees, a wide dirt avenue in front, low old houses at the sides, very calm atmosphere, soft golden hour light, wide shot with the chapel centered in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P07-mural`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a large handmade adobe relief mural on the wall of an old country railway station in the Argentine pampas: earthy sculpted clay shapes in ochre, brown and terracotta tones depicting rural life, trains and farm work in low relief, rough texture in soft raking afternoon light, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P07-pastas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph of homemade Italian-Argentine pasta in a country restaurant: a plate of fresh ravioli with tomato sauce and grated cheese and a plate of tallarines, on a wooden table with a checked tablecloth, a carafe of red wine and bread, warm window light, close-up with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P07-almacen`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a restored old country general store (almacén de campo) in Buenos Aires province: wooden counter with a board of cured salami, cheese and bread for a picada, tall shelves with jars and old tins, brick walls and a tiled floor, warm soft light, medium shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P07-club-apolo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an old small-town social club in the Argentine pampas: a simple early-20th-century plastered building with a wide front, tall doors and a modest cornice, a corner on a quiet dirt street with trees, soft late afternoon light, straight-on medium shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P08-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a 1910 eclectic-style municipal palace in a small town of Buenos Aires province, Argentina: a symmetrical pale plastered facade with columns, balustrade and a central clock or tower, facing a leafy town square with palm trees and old plane trees, soft golden hour light, wide shot with the building centered in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P08-vitrales`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph looking up into an early-20th-century stained-glass dome inside an old Argentine townhouse: colorful leaded glass panels in amber, green and blue geometric and floral patterns, sunlight shining through and casting colored light, ornate plaster molding around the base, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P08-maquinaria`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of antique agricultural machinery displayed outdoors on a green lawn in the Argentine pampas: an early 20th-century steam tractor, an old wooden threshing machine and rusty iron ploughs, weathered red and green paint, tall trees and blue sky behind, warm afternoon light, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P08-miel`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial photograph of farm products on a rustic wooden table at a small farm in the pampas: glass jars of golden honey glowing in the sunlight, a honeycomb frame, and a basket of fresh oyster mushrooms (Pleurotus ostreatus) with fan-shaped pale grey caps, green field softly out of focus behind, warm morning light, close-up with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P08-domos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a countryside glamping site in the Buenos Aires pampas: white geodesic dome tents on wooden decks spread on a green lawn among trees, and an old restored railway carriage converted into a lodging, warm string lights, clear dusk sky, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P09-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of an 1830 country pulpería on the bank of the Luján River in Mercedes, Buenos Aires province, Argentina: a low old building with very thick exposed brick walls, small wooden doors and shutters, a tin roof and a wooden hitching post (palenque) in front, a dirt yard with tall trees and the calm river just behind, warm golden hour light, wide shot with the building in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P09-salame`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial food photograph of Argentine salame quintero, a coarse artisanal farm salami: one whole cured salami with natural casing and string, and several thick slices showing coarse red meat and white fat, on a worn wooden board with country bread and a small knife, rustic farmhouse table, warm window light, close-up with shallow depth of field, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P09-catedral`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a monumental early-20th-century neo-Gothic cathedral in a provincial town of Buenos Aires province, Argentina: tall pointed spires, a large rose window and an ornate pale facade rising above the trees of a town square, deep blue sky, soft late afternoon light, low-angle wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P09-laurino`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a 1950s Argentine corner general store turned bar: long dark wooden counter, tall shelves with old bottles, jars and tins, small marble tables and bentwood chairs, a tiled floor, light from tall corner windows, warm nostalgic atmosphere, medium wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P09-rio-lujan`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the calm, brownish Luján River winding through a large wooded municipal park in the pampas: tall eucalyptus, willows and poplars on grassy banks, wooden picnic tables and a brick grill in the shade, soft morning light with a light mist on the water, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P10-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the old railway station of Tomás Jofré, a tiny pampas village in Buenos Aires province, Argentina: a low brick station building with a wooden platform canopy, now a small museum, surrounded by long country restaurant tables with tablecloths set under large shady trees, dirt streets, warm weekend midday light filtered through leaves, wide shot with the station in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P10-parrilla`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial food photograph of an Argentine country grill (parrilla) in full action: a large iron grill over glowing wood embers with a whole beef rib rack (costillar), chorizos, morcillas and crispy achuras (sweetbreads and chinchulines), light smoke rising, rustic brick grill structure, warm firelight mixed with daylight, close-up with shallow depth of field, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P10-antenor`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph of a picada of Argentine country cold cuts on a wooden board in a rural restaurant: sliced salami, bondiola, cheese cubes, olives and bread, a bottle of red wine and a siphon of soda water, outdoor table under trees with dappled light, close-up with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P10-silvano`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a popular country restaurant in a small pampas village: an old brick house with a long shaded gallery, many wooden tables with checked tablecloths set out on a lawn under tall trees, a smoking outdoor brick grill, dirt street in front, warm midday light, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P10-fronteras`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of an old rural general store converted into a restaurant in Buenos Aires province: original wooden counter and shelves with antique tins, scales and bottles, old furniture, set dining tables with simple tablecloths, brick floor, soft window light, medium wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P11-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the Navarro lagoon, Buenos Aires province, Argentina, at sunset: a wide calm pampas lagoon with reeds along the shore, a long wooden fishing pier reaching into the water, the tall trees of the lakeside campground on the bank, orange and violet sky reflected on the still water, wide shot with the horizon in the middle band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P11-fortin`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a reconstructed 18th-century colonial frontier fort (fortín) in the Argentine pampas: a wooden palisade of vertical logs, a simple watchtower and a small adobe guard house, a lagoon and tall grass in the background, soft early morning light, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P11-la-protegida`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the counter of an old Argentine general store turned museum and restaurant: a long wooden counter, shelves packed with antique colorful biscuit tins, old bottles and period tools hanging on the walls, a few set tables, warm soft light, medium shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P11-horno-barro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph of a whole golden roast chicken with potatoes and sweet potatoes in a metal tray, just taken out of a traditional dome-shaped clay oven (horno de barro) whose arched mouth glows with embers behind it, rural farmyard setting, warm late-morning light, close-up with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P11-dorrego`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a quiet commemorative park in the Argentine pampas: a classical bronze bust on a stone pedestal among tall trees and green lawns, a path leading to it, a lagoon glimpsed in the background, soft afternoon light, medium wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P12-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the large Lobos lagoon, Buenos Aires province, Argentina, at sunset: a wide flat expanse of water with a few small sailboats and a kitesurf kite on the horizon, reeds and trees on the shore, warm orange sky reflected on the water, wide shot with the horizon and sails in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P12-casa-peron`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a modest restored late-19th-century single-storey house in a small Argentine pampas town, now a museum: whitewashed facade, green wooden shutters and door, iron window grilles, a tiled sidewalk and a tree, facing a town square, soft morning light, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P12-paracaidistas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of several colorful parachute canopies (rectangular ram-air parachutes) descending over the flat green fields of the pampas, a lagoon shining in the distance, clear blue sky with a few clouds, late afternoon light, telephoto shot, skydivers as small distant figures only, natural colors, high detail, no text, no watermark, no logos.

### `BSA-P12-muelle`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a long wooden fishing pier on a calm pampas lagoon in Buenos Aires province, a lakeside campground with grassy pitches under tall trees on the bank, early morning light with soft mist over the water, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P12-moreira`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial photograph of a bronze statue of a 19th-century Argentine gaucho with a wide-brimmed hat, poncho, chiripá and a facón knife at the waist, standing on a stone plinth in a small-town square with trees, soft afternoon light, low-angle medium shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P13-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the neo-Gothic church of Nuestra Señora de Luján in Uribelarrea, a small village in Buenos Aires province, Argentina: a slender brick church with a tall pointed spire and pointed arched windows, facing a quiet green plaza with old trees, dirt and cobbled streets, soft golden hour light, wide shot with the church centered in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P13-escuela`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a late-19th-century agricultural school building in the Argentine pampas: a long two-storey brick building with arched windows and a gallery, a farmyard with cows and cultivated plots in front, tall trees and wide sky, soft morning light, vertical framing, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P13-tallarines`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph of a plate of fresh homemade green arugula tallarines (tagliatelle colored with rocket) with a light sauce and grated cheese, on a rustic wooden table in an old country pulpería turned restaurant, a glass of red wine and bread behind, warm window light, close-up with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P13-pan-casero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph of homemade Italian-style breads and fresh pasta on a floured wooden table in a country restaurant kitchen: crusty round loaves, a basket of rolls, sheets of fresh egg pasta and ravioli being cut, soft warm window light, close-up with shallow depth of field, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P13-cerveza`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph of two pint glasses of craft beer, one amber and one dark, with creamy foam, on a wooden outdoor table of a rural brewery restaurant in the pampas, a picada board with cheese and salami beside them, green trees and stainless brewing tanks softly out of focus, warm afternoon light, close-up, no labels or brand names, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P14-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a 1920s English Tudor-style country estate house in the pampas of Buenos Aires province, Argentina, resembling a small castle: brick and stone facade with towers, gables and tall chimneys, surrounded by a vast manicured green park with old trees, golden hour light, wide shot with the house centered in the middle horizontal band, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P14-dulce-de-leche`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial food photograph of Argentine dulce de leche: a glass jar filled with glossy thick caramel-brown spread, a spoon lifting a slow ribbon of it, slices of country bread on a wooden board, an old enamel milk jug beside it, rustic estancia kitchen table, warm morning window light, close-up with shallow depth of field, vertical framing, no labels, natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P14-laberinto`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a large hedge maze made of tall clipped pine and cypress trees on a country estate in the Argentine pampas, seen from a slightly elevated viewpoint: deep green walls forming winding paths of grass, open fields and big trees beyond, soft late afternoon light with long shadows, wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P14-lo-de-beto`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a roadside grill restaurant on a pampas highway in Argentina: a rustic wooden building like a Patagonian mountain refuge, a smoking brick grill with large cuts of beef visible through a window, a gravel parking area and tall trees, warm late afternoon light, wide shot, no signs, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P14-iglesia-carmen`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a historic Catholic parish church facing a leafy town square in a provincial town of Buenos Aires province, Argentina: a classical plastered facade with a bell tower and a clock, palm trees and old plane trees in the square, deep blue sky, soft morning light, medium wide shot, natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

---

## Pueblitos de Buenos Aires · Sur y sierras

### `BSA-P15-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of Laguna de Chascomús, Buenos Aires province, Argentina, seen from the lakeside promenade (costanera) at sunset: a wide, calm, shallow pampas lake with a few small sailboats with white sails on the water, a low flat horizon, a line of tall eucalyptus and willow trees and reeds along the shore, warm orange and pink sky reflected on the water. Golden hour, low sun near the horizon. Wide-angle shot with the boats and the horizon placed in the central horizontal band, gentle foreground of the promenade railing out of focus. Warm, calm, natural palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P15-capilla-negros`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a small, humble 19th-century adobe chapel in a pampas town of Buenos Aires province: whitewashed thick adobe walls, a simple wooden door, a tiled gabled roof, a small cross on top, a few old trees and green grass around, quiet street corner. Soft warm morning light raking across the textured walls. Vertical composition, eye-level, 35 mm lens, the chapel centered with some sky above. Warm, natural, earthy palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P15-museo-pampeano`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a small regional history museum in the Argentine pampas: a whitewashed colonial-style room with wooden display cases holding 19th-century frontier objects — gaucho silver stirrups, spurs, mate gourds, old maps and a leather saddle — wooden floor, light coming through a tall colonial window. Soft diffuse daylight, medium shot, shallow depth of field on the display. Warm, muted palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P15-palacio-municipal`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a 1930s neocolonial-style town hall facing a leafy town square in a pampas town of Buenos Aires province, Argentina: white plastered façade, arched arcade, wooden doors, wrought-iron balconies, red clay tile roof and a modest bell tower, palm and plane trees in the square in front. Late afternoon golden light, wide-angle shot from across the square, blue sky. Warm, natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P15-pejerrey`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic close-up wildlife photograph of an Argentine silverside, the pejerrey (Odontesthes bonariensis), underwater in a greenish pampas lake: slender elongated silvery body, a bright silver lateral stripe running along the flank, two separate dorsal fins, small upturned mouth, translucent fins — not a trout, no spots. Soft diffuse underwater light with green tones, side view, shallow depth of field. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P16-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a historic park in Dolores, Buenos Aires province, Argentina: a long avenue of tall old trees (eucalyptus, plane trees and pines) leading to a low white 19th-century-style colonial museum building with a tiled roof and a gallery, green lawns, an old cart displayed on the grass, dappled light through the canopy. Soft morning light with long shadows. Wide-angle shot, the tree-lined path and building in the central horizontal band. Fresh green and warm white palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P16-plaza-castelli`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the main square of a historic pampas town in Buenos Aires province: a 19th-century parish church with an Italianate façade and a tall bell tower seen across a square with palm trees, tipas and a stone monument on a pedestal, paved paths and benches. Soft golden late-afternoon light on the façade, blue sky. Vertical composition with the church tower rising in the frame, 35 mm lens. Warm, natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P16-museo-libres-sur`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a 19th-century Argentine pampas history exhibit inside a museum: an antique wooden ox cart (carreta) with huge spoked wheels, gaucho saddlery (recado), a poncho and facón knife in a glass case, whitewashed walls and wooden beams. Soft warm museum lighting, medium shot, shallow depth of field. Earthy, warm palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P16-parque-termal`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a thermal water park in the flat pampas of Buenos Aires province: several outdoor turquoise thermal pools with light steam rising on a cool morning, and a large glazed geodesic-style glass dome covering an indoor pool in the background, green lawns and trees around. Soft early-morning light, wide-angle shot. Calm, fresh palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P16-lago`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a calm park lake at the entrance of a pampas town in Buenos Aires province: a few colorful kayaks and a small sailing dinghy on still water, a walking path along the grassy shore, tall trees reflected in the lake. Soft morning light, wide shot, kayaks small in the frame. Fresh green and blue palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P17-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of outdoor thermal pools on the bank of the Salado River in General Belgrano, Buenos Aires province, Argentina, on a cold winter morning: blue-green hot-spring pools with dense steam rising into the crisp air, a semi-covered pool building with a curved roof behind, bare trees and frosty grass around, flat pampas horizon. Early-morning low sun backlighting the steam. Wide-angle shot with the pools and steam in the central horizontal band. Cool blues with warm sunlight, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P17-ravioles-cordero`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial food photograph of a plate of homemade lamb ravioli (ravioles de cordero) in a rustic pampas restaurant: square hand-cut ravioli with crimped edges, a light tomato or butter-and-sage sauce, grated cheese, on a white ceramic plate on a worn wooden table with a glass of red wine and bread blurred behind. Soft natural window light from the side, 45-degree angle, shallow depth of field. Warm, appetizing, natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P17-bosque-encantado`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a forest trail in a pampas estate reserve in Buenos Aires province: a narrow dirt path winding between tall century-old trees of mixed species — eucalyptus, oaks, cypresses and pines — with thick trunks and a high canopy, fallen leaves on the ground, light filtering through in soft rays. Morning light with light mist, eye-level wide shot. Deep greens and warm browns. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P17-balneario-salado`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Salado River at a riverside beach area in the pampas of Buenos Aires province: a slow, wide, brownish river with grassy banks and willow trees, a few kayaks and pedal boats pulled up on the shore, a fishing rod resting on a stand at the water's edge. Warm late-afternoon light, wide shot. Soft greens and warm earth tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P17-cine-teatro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the façade of an early 20th-century small-town cinema-theatre in the Argentine pampas: symmetrical Italianate or art-nouveau plaster façade, tall arched windows, ornamental cornice, wooden doors, on a quiet tree-lined street. Soft late-afternoon light, frontal medium-wide shot. Warm cream and ochre palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P18-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a small boutique vineyard in the middle of the flat pampas of Buenos Aires province, Argentina: neat rows of green grapevines on wire trellises receding toward a perfectly flat horizon, open grassland and a few distant trees and silos beyond, big sky with soft clouds. Late-afternoon golden light raking along the rows. Wide-angle, low viewpoint along a row, the vines and horizon in the central horizontal band. Warm greens and gold, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P18-laguna-difunto-manuel`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of an urban pampas lagoon with a nature reserve: still water bordered by tall green reeds and rushes (juncal), native pampas grassland in the foreground, a few waterbirds on the water — black-necked swans (Cygnus melancoryphus: white body, black head and neck, red knob at the base of the grey bill) and red-gartered coots (Fulica armillata: all-black body, yellow bill and frontal shield) — and a line of trees on the far shore. Soft early-morning light with light mist on the water. Vertical composition, reeds in the foreground, water and sky above. Calm greens and blues. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P18-copa-quesos`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial food photograph inside a small artisanal wine cellar: a glass of red wine and a wooden board of local artisanal cheeses (hard and semi-hard wedges, cubes) with bread, set on an oak barrel, earthen walls of a bio-construction cellar softly out of focus behind. Warm, low ambient light from the side, shallow depth of field. Warm, rustic palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P18-estacion-pardo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an old rural railway station in a tiny village of the Argentine pampas: a 19th-century British-style brick station building with a pitched roof and a wooden platform canopy, the rails running past, tall trees and open fields around. Soft late-afternoon light, wide shot along the platform. Warm brick and green palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P18-almacen-lamaro`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of an old Argentine rural general store (almacén de ramos generales): a long worn wooden counter, tall wooden shelves packed with bottles, jars and tins, an antique scale on the counter, a tiled floor. Soft light from the front door, medium shot, shallow depth of field. Warm, nostalgic palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P19-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the monumental art deco cemetery portal of Azul, Buenos Aires province, Argentina, designed by Francisco Salamone (1937–1938): a massive, about 22-metre-high white reinforced-concrete gateway with stark geometric volumes, and in front of it a gigantic cubist sculpture of the angel of death — a stylized, faceted winged figure with sharp angular planes — on a flat pampas plain, the letters on the portal not shown. Low-angle shot from the front at sunset, warm light on the concrete, dramatic sky with clouds. Wide-angle lens, the portal and angel centered in the central horizontal band with sky above and road below. Warm, slightly dramatic but natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P19-cervantino`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a Cervantes-themed cultural festival in the main square of a pampas town in Argentina in late spring: a large outdoor sculpture or giant puppet figure of Don Quixote with lance and armor standing among jacaranda and palm trees, small stalls with colorful awnings, festive banners hanging between lampposts. Soft golden late-afternoon light. Vertical composition with the Quixote figure as the subject, 35 mm lens, shallow depth of field. Warm, festive but natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P19-monasterio-trapense`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a quiet Trappist (Cistercian) monastery in the low hills of the Argentine pampas: simple brick and white-plastered buildings with a plain church and a small bell tower, cloister-like gallery, surrounded by trees, gardens and open grassland with gentle rocky hills behind. Soft early-morning light with light mist, wide shot. Calm, sober earth-tone palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P19-balneario`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a municipal riverside park on a small pampas stream in Buenos Aires province: a calm, narrow creek with grassy banks, tall willows and poplars, wide green lawns with picnic tables and a footbridge. Warm late-afternoon summer light, wide shot. Fresh greens and soft blue water. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P19-teatro-espanol`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an elegant early 20th-century Spanish-community theatre in a provincial Argentine city: ornate eclectic façade with columns, balconies, a decorated pediment and tall wooden doors, on a city-centre street lined with trees. Soft warm early-evening light with the entrance lamps on, frontal medium-wide shot. Warm cream and gold palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P20-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of an old 19th-century pulpería (rural tavern-store) alone in the open pampas of Buenos Aires province, Argentina: a low whitewashed adobe and brick building with a tin or tiled roof, iron bars on the window, a wooden hitching rail (palenque) in front, a single big tree beside it, dirt track and endless flat grassland under a wide sky. Late-afternoon golden light, long shadows. Wide-angle shot with the building in the central horizontal band. Warm, earthy, nostalgic palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P20-torta-negra`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial food photograph of Argentine "torta negra": a round, flat, rustic sweet bread with a dark, glossy, crackled crust of caramelized brown sugar on top, one slice cut out showing the soft yellow crumb, on a wooden board on a checkered tablecloth, a mate gourd blurred in the background. Soft natural window light, 45-degree angle, shallow depth of field. Warm brown and amber palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P20-pulperia-mostrador`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a 19th-century Argentine pulpería turned museum-bar: a heavy wooden counter behind an iron grille (reja), old bottles, demijohns and tins on wooden shelves, gaucho objects on the whitewashed walls, wooden tables with checkered cloths. Warm light from a small window and the door, medium shot, shallow depth of field. Warm, nostalgic palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P20-termas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small thermal spa on the edge of a pampas town in Buenos Aires province: outdoor hot-spring pools with clear turquoise water and gentle steam, wooden deck loungers, green lawns and trees, flat horizon. Soft early-morning light, wide shot. Calm blues and greens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P20-arroyo-kayak`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a calm pampas creek with a municipal riverside beach in Buenos Aires province: a narrow, slow stream with grassy banks and willow trees, two colorful kayaks resting on the bank, a bike path running along the shore. Warm late-afternoon light reflected on the water, wide shot. Soft greens and warm tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P21-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of an art deco municipal palace in a small town of the western pampas of Buenos Aires province, Argentina, by architect Francisco Salamone (1938): a white building with a tall, slender, stepped geometric clock tower rising high above the flat town, strong vertical lines and futuristic monumental volumes, palm trees and the town square in front. Dramatic sky with big clouds, warm side light at golden hour. Wide-angle shot, the tower placed in the central horizontal band with plenty of sky. Warm, natural palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P21-cruz-laprida`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a monumental 33-metre art deco concrete cross designed by Francisco Salamone (1936), standing at the end of a wide diagonal avenue in a small pampas town of Buenos Aires province: a tall, white, geometric cross with stepped angular base, sharp clean lines, against a deep blue sky. Low-angle view from the avenue, late-afternoon warm light on one side. Vertical composition with the full cross in frame. Clean whites and blues. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P21-guamini-torre`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an art deco municipal tower by Francisco Salamone in a quiet western pampas town of Buenos Aires province: a white geometric tower with stepped volumes and vertical fins rising above low houses and treetops, wide empty street. Soft warm morning light, blue sky, medium-wide shot. Clean, warm palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P21-saldungaray-matadero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an abandoned 1930s art deco municipal slaughterhouse by Francisco Salamone on the outskirts of a small town in southern Buenos Aires province: a white concrete building with a tall geometric tower, curved and stepped volumes, weathered paint, open grassland around and low hills in the distance. Golden late-afternoon light, wide shot. Warm, natural palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P21-azul-angel`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph, close-up detail of a gigantic cubist concrete sculpture of the angel of death by Francisco Salamone at a cemetery gate in the Argentine pampas: a stern, faceted, angular face and folded geometric wings in white concrete, sharp shadows, against a blue sky. Telephoto, low angle, late-afternoon side light. Clean whites and blues. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P22-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the ruins of Villa Epecuén, Buenos Aires province, Argentina: the remains of a flooded 1920s spa town — broken brick and concrete walls, rusted iron bedframes and twisted rebar — along a former street, with dead trees whose trunks and branches are bleached white and crusted with salt, the pale shallow salt lake on the horizon. Golden hour, low warm sun, long shadows, soft pastel sky. Wide-angle shot, ruins and white trees in the central horizontal band. Muted whites, greys and warm golds, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P22-lago-sal`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of the shore of Lago Epecuén, a hypersaline lake in the Buenos Aires pampas: a white salt crust and salt crystals covering the ground and the base of a bleached, dead tree trunk in the foreground, the calm, milky-turquoise lake stretching to a flat horizon behind. Soft early-morning light, pastel sky. Vertical composition, low viewpoint close to the salt crystals, deep depth of field. Pale whites, turquoise and soft pink. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P22-matadero`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the ruined art deco slaughterhouse of Epecuén by Francisco Salamone: a tall white concrete tower with a geometric, blade-like top and the stained, salt-marked remains of the building around it, standing on flat white salt-crusted ground with skeletal white trees nearby. Late-afternoon warm light, dramatic sky, wide shot. Muted whites and warm tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P22-termas`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a thermal spa using hypersaline lake water in the Buenos Aires pampas: warm indoor or semi-covered pools with clear water, mineral-white edges, tiled surroundings and large windows looking out to the pale lake. Soft diffuse daylight, wide shot. Calm whites and pale turquoise. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P22-museo-regional`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a small regional history museum in the Argentine pampas: display cases with frontier-era objects — rifles, spurs, indigenous ceramics and silverwork — and old black-and-white photographs of a 1920s lakeside spa town on the walls, wooden floor. Soft warm museum lighting, medium shot, shallow depth of field. Warm, muted palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P23-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of a giant omelette festival in a tree-lined municipal park in a small town of the Buenos Aires pampas, Argentina: an enormous round iron frying pan, several metres wide, set over a wood fire, with a huge golden omelette cooking inside and wisps of smoke, cooks with long wooden paddles around it and a festive crowd in the background softly out of focus (people allowed in this image), tall eucalyptus trees behind. Warm early-summer morning light. Wide-angle shot, the pan centered in the central horizontal band. Warm, festive, natural palette, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P23-aligot`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial food photograph of aligot, the French Aveyron dish: a smooth, glossy, very stretchy purée of mashed potatoes with melted cheese and garlic, lifted with a wooden spoon so it forms long elastic ribbons above a rustic earthenware bowl, on a wooden farmhouse table with a garlic bulb and bread blurred behind. Soft natural window light from the side, close-up, shallow depth of field. Warm creamy whites and wood tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P23-cerro-cruz`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a low grassy hill on the edge of a pampas town in Buenos Aires province with a path of Stations of the Cross (small white shrines) climbing to a large white cross on the top, the small town with its trees and the flat, patchwork farmland spreading to the horizon below. Soft golden late-afternoon light, wide shot from the slope. Warm greens and golds. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P23-museo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a modest late-19th-century house turned into a local history museum in a small Argentine pampas town of French immigrant origin: brick façade with tall wooden shuttered windows and a small front garden; inside view through the open door of old photographs of immigrant families, a trunk and antique kitchenware. Soft morning light, frontal medium shot. Warm, muted palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P23-curamalal`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Sierras de Curamalal in southwestern Buenos Aires province, Argentina: rounded, rocky quartzite ridges with grey and ochre outcrops rising above golden tussock grassland, the highest summit (about 1,015 m) on the skyline, a dirt track winding toward the hills, wide pampas below. Early-morning side light with long shadows, clear sky. Wide shot. Natural ochres, golds and soft greens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P24-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the main square of Tornquist, Buenos Aires province, Argentina: a calm artificial pond with a small arched wooden footbridge, and a stone-built church with a pointed bell tower reflected in the still water, tall trees and lawns around, ducks on the water, low sierras faintly on the horizon. Soft early-morning light with mirror-like reflections. Wide-angle shot, church and its reflection in the central horizontal band. Fresh greens and warm stone tones, not oversaturated. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P24-cerro-ventana`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of Cerro Ventana in the Sierra de la Ventana range, Buenos Aires province, Argentina: a rugged grey-ochre quartzite ridge whose crest has a natural rock arch — a rectangular hole through the rock wall near the summit, the "window" through which the sky is visible — above steep slopes of golden grassland and rock. Clear morning light, deep blue sky seen through the opening. Vertical composition from below, telephoto, the arch clearly visible in the upper third. Natural ochres, golds and blues. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P24-puente-plaza`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of an arched wooden footbridge over a small pond in a leafy town square in the Buenos Aires sierras: rustic wooden railings, weeping willows and tall trees, ducks swimming, autumn leaves floating on calm water. Soft warm afternoon light, medium-wide shot. Warm greens and browns. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P24-sendero-parque`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a hiking trail in Parque Provincial Ernesto Tornquist, Sierra de la Ventana, Buenos Aires province: a narrow stony path climbing through golden native tussock grassland toward rocky grey quartzite ridges, a clear stream with small pools crossing the trail. Early-morning light, wide shot from the trail. Natural golds, greys and soft greens. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P24-teatro-funke`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small early-20th-century theatre and history-museum building in a quiet sierra town of German immigrant origin in Buenos Aires province: modest plastered façade with simple classical details, tall wooden doors and windows, trees on the sidewalk. Soft late-afternoon light, frontal medium-wide shot. Warm cream and ochre palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P25-principal`
**Formato:** horizontal 3:2 (se recorta a una franja panorámica: dejá el motivo en la franja central)
Photorealistic editorial travel photograph of the art deco cemetery portal of Saldungaray, Buenos Aires province, Argentina, by Francisco Salamone: a monumental white concrete gateway with a huge stark geometric composition — a large circular opening and sharp angular vertical blades and a cross shape — standing on open ground with low sierras on the horizon. Low angle at golden hour, warm light on the concrete against a deep blue sky with a few clouds. Wide-angle shot, the portal in the central horizontal band. Clean whites, blues and warm golds. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P25-fortin-pavon`
**Formato:** vertical 2:3 (se recorta a 4:5)
Photorealistic editorial travel photograph of a reconstructed 19th-century Argentine frontier fort (fortín) beside a river: a wooden palisade of vertical rough logs, a simple mud-and-straw ranch hut and a tall wooden lookout tower (mangrullo), willows and tall trees along the riverbank. Soft golden late-afternoon light, vertical composition with the lookout tower rising in the frame, 35 mm lens. Warm, earthy palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P25-vinedo-sierras`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of a small vineyard at the foot of the Sierra de la Ventana hills, Buenos Aires province: neat rows of grapevines on trellises in the foreground and rocky grey-ochre sierras rising behind under a wide sky. Golden late-afternoon light along the rows, wide shot. Warm greens, golds and soft blues. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

### `BSA-P25-rio-sauce-grande`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the Sauce Grande river at a riverside municipal park in southern Buenos Aires province: a clear, shallow river running over pebbles, tall willows and poplars on the banks, green lawns with picnic tables and barbecue grills under the trees, low sierras in the distance. Soft warm morning light, wide shot. Fresh greens and clear water tones. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.

### `BSA-P25-museo`
**Formato:** horizontal 3:2 (se recorta a 16:9)
Photorealistic editorial travel photograph of the interior of a small-town history museum and archive in the Argentine pampas: wooden shelves with old ledgers and bound documents, framed black-and-white photographs of early 1900s settlers, an antique typewriter and farm tools on display. Soft warm light from a window, medium shot, shallow depth of field. Warm, muted palette. Natural colors, high detail, no people unless stated, no text, no watermark, no logos.
**Mejor foto real del lugar.**

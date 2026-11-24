# Imágenes con ChatGPT — cómo usar estas tandas

Las 735 imágenes de la guía están repartidas en **34 tandas**, numeradas en orden (`01-GEN-1` … `34-PUE-6`). La lista completa está en `indice.md`. Cada archivo es **un mensaje completo para pegar en ChatGPT**: trae las reglas (foto realista, sin texto, sin otras camionetas, sin inventar, cómo encuadrar lugares famosos) y entre 3 y 25 imágenes con su prompt. ChatGPT no necesita abrir ningún archivo.

## Paso a paso

1. Abrí **un chat nuevo de ChatGPT por tanda**.
2. En las tandas `01-GEN-1` y `24-AUS-5`, **adjuntá primero la foto de tu camioneta** (de costado o en tres cuartos, de día, que se vea entera). Son las únicas imágenes donde aparece: la portada y la balsa del Estrecho de Magallanes. En el resto no va ningún vehículo.
3. Copiá el archivo de la tanda entero, pegalo y mandalo.
4. ChatGPT genera una imagen por respuesta, con su código arriba. Escribile **"seguí"** para la próxima.
5. Si una imagen sale mal (especie equivocada, letras raras, algo deformado, otra camioneta), pedile que la rehaga antes de seguir, por ejemplo: "rehacé NOR-04-principal: el cardón tiene que ser columnar, sin texto".
6. Al final de cada tanda, ChatGPT te da una lista de lo generado y lo salteado.

Hay dos imágenes marcadas `[SALTEAR]`: el amancay de Tucumán y la monjita salinera. Antes hay que confirmar qué especie es; no las generes.

Las marcadas `[LUGAR REAL]` (188) son edificios, negocios, carteles o monumentos concretos. ChatGPT las va a resolver con un encuadre que no muestre de frente lo que se reconocería mal: el paisaje alrededor, un detalle o el edificio a lo lejos. Si después conseguís la foto real del lugar, la cambiamos.

## Cómo me las pasás

**Lo ideal:** descargá cada imagen y renombrala con su código exacto, por ejemplo `NOR-04-principal.png`. Mayúsculas y guiones iguales al código; la extensión puede ser `.png`, `.jpg` o `.webp`.

**Si renombrar te lleva mucho tiempo:** dejá los nombres que pone ChatGPT, pero:

- guardá cada tanda en su propia carpeta con el nombre de la tanda (por ejemplo `03-NOR-2`);
- descargalas en el orden en que se generaron;
- copiá en un archivo `lista.txt`, dentro de esa carpeta, la lista final que te da ChatGPT.

Yo las identifico por orden y además las miro una por una contra el prompt.

**Para mandármelas**, comprimí cada tanda (o varias juntas) en un `.zip` y usá una de estas dos vías:

- adjuntalas en este chat;
- o subilas a GitHub: en el repo `alejandromacula/terra-campers`, rama `claude/esp32-voice-assistant-hsgvld`, entrá a `guia-camper-argentina/diseno/img/` y usá **Add file → Upload files**. Sube hasta 100 archivos por vez.

Mandalas en el tamaño original: yo las paso a JPG livianos para el PDF, controlo que cada código esté en su página y te devuelvo la guía armada con las fotos.

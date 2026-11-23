"""Junta prompts/*.md en imagenes-para-chatgpt.md y controla que cada imagen de la guía tenga su prompt."""
import json
import os
import re

BASE = os.path.dirname(os.path.abspath(__file__))
DATA = json.load(open(os.path.join(BASE, "paginas.json"), encoding="utf-8"))
LUGARES = []
for f in sorted(os.listdir(os.path.join(BASE, "datos"))):
    if f.endswith(".json"):
        LUGARES += json.load(open(os.path.join(BASE, "datos", f), encoding="utf-8"))

# Imágenes que usa la guía, en orden de página.
slots = [DATA["portada"]["img"]]
abiertas = set()
for L in LUGARES:
    if L["region"] not in abiertas:
        slots.append(DATA["aperturas"][L["region"]]["img"])
        abiertas.add(L["region"])
    slots += [L["codigo"] + "-principal", L["destacada"]["img"]] + [it["img"] for it in L["fila"]["items"]]

partes = [open(os.path.join(BASE, "prompts", f), encoding="utf-8").read().strip()
          for f in sorted(os.listdir(os.path.join(BASE, "prompts"))) if f.endswith(".md")]
cuerpo = "\n\n---\n\n".join(partes)
con_prompt = re.findall(r"^### `([^`]+)`", cuerpo, re.M)

faltan = [s for s in slots if s not in con_prompt]
sobran = [s for s in con_prompt if s not in slots]
repetidos = sorted({s for s in con_prompt if con_prompt.count(s) > 1})
reales = len(re.findall(r"\*\*Mejor foto real del lugar\.\*\*", cuerpo))

intro = f"""# Imágenes de la Guía de Ruta Terra Campers — prompts para ChatGPT

La guía usa **{len(slots)} imágenes**. Cada una tiene abajo un prompt en inglés (los generadores responden mejor así) y su formato.

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
- **{reales} imágenes** llevan la nota **"Mejor foto real del lugar"**: son negocios, edificios o museos concretos. Una imagen generada no se va a parecer al lugar real; conviene pedir una foto al lugar (sirve para el convenio) o sacarla vos.

## Formatos

| Uso en la página | Pedile a ChatGPT | Cómo queda recortada |
|---|---|---|
| Portada | vertical 2:3 | página completa |
| Apertura de región | horizontal 3:2 | franja ancha arriba |
| `-principal` (foto grande de cada lugar) | horizontal 3:2 | franja panorámica ~2,7:1: lo importante en el centro |
| Foto destacada al lado del texto | vertical 2:3 | ~4:5 |
| Miniaturas | horizontal 3:2 | 16:9, o ~2,6:1 cuando la fila tiene 2 |

"""
out = intro + cuerpo + "\n"
open(os.path.join(BASE, "imagenes-para-chatgpt.md"), "w", encoding="utf-8").write(out)
print(f"{len(slots)} imágenes en la guía, {len(con_prompt)} prompts, {reales} marcadas foto real")
for nombre, lista in (("Sin prompt", faltan), ("Prompt sin uso", sobran), ("Repetidos", repetidos)):
    if lista:
        print(f"{nombre} ({len(lista)}): " + ", ".join(lista))

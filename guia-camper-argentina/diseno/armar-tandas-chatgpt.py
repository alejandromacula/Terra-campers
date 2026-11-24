"""Arma, a partir de prompts/*.md, mensajes listos para pegar en ChatGPT (chatgpt/NN-REGION-n.md).
Cada mensaje es independiente: trae las reglas generales y una tanda de imágenes, sin depender de ningún archivo."""
import os
import re

BASE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(BASE, "chatgpt")
TANDA = 25

# Imágenes donde va la camioneta de Terra Campers (con foto de referencia).
CAMPER = {"portada", "AUS-22-balsa"}
# Especies sin confirmar: mejor no generarlas todavía.
SALTEAR = {"NOR-01-amancay", "CUY-19-monjita"}
# Correcciones puntuales a prompts que tenían otros vehículos.
REEMPLAZOS = {
    "a small safari-style tour vehicle in the distance for scale": "no vehicles",
    "walls and vehicle in the central horizontal band": "walls in the central horizontal band",
    "loaded with cars, a truck and a white camper van": "carrying the Terra Campers van from the reference photo, plus one or two ordinary small cars and a truck (no other vans, pickups, SUVs or campers)",
    "a modern white camper van": "the Terra Campers van from the reference photo",
    "The van sits in the lower third": "The Terra Campers van sits in the lower third",
    "no brand names on the van": "no readable license plate or brand names on the van",
}

REGLAS = """Sos el fotógrafo de una guía de viaje impresa de Argentina en camper, la "Guía de Ruta Terra Campers". Te paso una tanda de imágenes para generar. Cada una tiene un código, un formato y un prompt en inglés. Estas reglas valen para TODAS:

1. **Orden y nombre.** Generá una imagen por respuesta, en el orden de la lista. Arriba de cada imagen escribí solo su código exacto (por ejemplo `NOR-04-principal`). Cuando te escriba "seguí", pasá a la siguiente.
2. **Foto real, no render.** Tiene que parecer una fotografía de revista de viajes sacada con cámara: luz natural de un solo sol, lente y profundidad de campo creíbles, grano leve de cámara, colores naturales sin sobresaturar, sin HDR exagerado, sin brillo plástico, sin cielos dramáticos de póster, sin simetrías perfectas.
3. **Nada que delate a la IA.** Sin texto, letras, carteles, patentes, logos, marcas de agua, firmas ni bordes. Animales con la anatomía correcta (patas, ojos, picos, plumaje) y plantas de la especie pedida. Sin objetos duplicados, fundidos o deformes. Horizonte derecho, sombras y reflejos coherentes con la luz. Nada de arcoíris, auroras, Vía Láctea o lunas gigantes si el prompt no los pide.
4. **No inventes.** Respetá la geografía, la vegetación, el clima y las especies que describe el prompt. Si no sabés exactamente cómo es algo, no lo inventes: elegí un encuadre donde ese detalle no sea el protagonista.
5. **Lugares y edificios concretos** (marcados `[LUGAR REAL]`). Un edificio, cartel, monumento o negocio conocido generado por IA casi nunca se parece al real, y se nota. No intentes reproducir la fachada ni el cartel de frente. Elegí un encuadre auténtico y menos identificable: el paisaje o la calle alrededor, un detalle (una puerta de madera, una pared de adobe, barricas, una vitrina, una mesa servida), el edificio lejos, parcial o a contraluz. Que se sienta verdadero sin que nadie pueda decir "ese no es el lugar". En ciudades, preferí el lago, la montaña o una calle típica antes que el cartel o el monumento famoso.
6. **Vehículos.** No pongas NUNCA camionetas, campers, motorhomes, pickups, autos ni ningún otro vehículo, salvo en las imágenes marcadas `[CAMIONETA TERRA CAMPERS]`. En esas, la única camioneta es la de la foto de referencia que te adjunto: misma marca, modelo, color, forma, ventanas, llantas y detalles, sin patente ni logos legibles, sin agregarle ni quitarle nada. Si no podés hacerla idéntica, avisame en vez de dibujar otra.
7. **Personas.** Ninguna, salvo que el prompt las pida. Si las pide: chicas en el cuadro, lejos o de espaldas, sin caras reconocibles.
8. **Formato.** Respetá la proporción (horizontal 3:2 o vertical 2:3) y dejá el motivo donde indica el formato, porque la imagen después se recorta.
9. **`[SALTEAR]`.** Esas no las generes: solo anotalas.
10. **Al terminar la tanda**, haceme una lista con los códigos generados, los salteados y los que te parezcan dudosos (especie, lugar, algo raro).

Si entendiste, empezá directamente con la primera imagen.
"""


def formato(slot, linea):
    if slot == "portada":
        return "Vertical 2:3. Full page: keep clean sky at the top for the logo and darker ground at the bottom for the title."
    if slot.endswith("-apertura"):
        return "Horizontal 3:2. Cropped to a wide band: keep the main subject in the center."
    if slot.endswith("-principal"):
        return "Horizontal 3:2. Cropped to a wide panoramic strip (about 2.7:1): keep the subject in the central horizontal band."
    if "2:3" in linea or "vertical" in linea.lower():
        return "Vertical 2:3. Cropped to 4:5: keep the subject centered."
    if "2,6" in linea or "2.6" in linea:
        return "Horizontal 3:2. Cropped to a narrow strip (about 2.6:1): keep the subject in the central horizontal band."
    return "Horizontal 3:2. Cropped to 16:9: keep the subject centered."


def entradas(texto):
    """Devuelve [(region_titulo, slot, formato_linea, prompt, real)] en orden."""
    out, region = [], ""
    for bloque in re.split(r"^(?=## |### )", texto, flags=re.M):
        if bloque.startswith("## "):
            region = re.sub(r" \(.*\)$", "", bloque[3:].splitlines()[0].strip())
            continue
        m = re.match(r"### `([^`]+)`\n(.*)", bloque, re.S)
        if not m:
            continue
        slot, resto = m.group(1), m.group(2)
        lineas = [l.strip() for l in resto.strip().splitlines() if l.strip() and l.strip() != "---"]
        fmt = next((l for l in lineas if l.startswith("**Formato")), "")
        real = any("Mejor foto real" in l for l in lineas)
        # El prompt es la línea en inglés más larga (las notas en castellano quedan afuera).
        cand = [l for l in lineas if not l.startswith("**") and not re.match(r"^(Antes|Chequeá|Ojo)", l)]
        prompt = max(cand, key=len) if cand else ""
        for a, b in REEMPLAZOS.items():
            prompt = prompt.replace(a, b)
        prompt = prompt.replace("**", "")
        out.append((region, slot, fmt, prompt, real))
    return out


todas = []
for f in sorted(os.listdir(os.path.join(BASE, "prompts"))):
    if f.endswith(".md"):
        todas += entradas(open(os.path.join(BASE, "prompts", f), encoding="utf-8").read())

# Agrupar por región (en orden de aparición) y cortar en tandas.
grupos = []
for e in todas:
    if not grupos or grupos[-1][0] != e[0]:
        grupos.append((e[0], []))
    grupos[-1][1].append(e)

os.makedirs(OUT, exist_ok=True)
for f in os.listdir(OUT):
    if f.endswith(".md") and f != "00-LEER-PRIMERO.md":
        os.remove(os.path.join(OUT, f))

indice, n, por_pref = [], 0, {}
for region, items in grupos:
    pref = items[0][1].split("-")[0] if items[0][1] != "portada" else "GEN"
    if "Pueblitos" in region:
        pref = "PUE"
    partes = [items[i:i + TANDA] for i in range(0, len(items), TANDA)]
    for k, parte in enumerate(partes, 1):
        n += 1
        por_pref[pref] = por_pref.get(pref, 0) + 1
        nombre = f"{n:02d}-{pref}-{por_pref[pref]}"
        con_camper = any(s in CAMPER for _, s, *_ in parte)
        lista = []
        for i, (_, slot, fmt, prompt, real) in enumerate(parte, 1):
            marcas = []
            if slot in CAMPER:
                marcas.append("[CAMIONETA TERRA CAMPERS]")
            if real:
                marcas.append("[LUGAR REAL]")
            if slot in SALTEAR:
                marcas.append("[SALTEAR]")
            lista.append(f"**{i}. `{slot}`** {' '.join(marcas)}\nFormat: {formato(slot, fmt)}\n{prompt}\n")
        encabezado = f"# Tanda {nombre} · {region} ({k} de {len(partes)}) · {len(parte)} imágenes\n\n"
        if con_camper:
            encabezado += "**Te adjunto la foto de mi camioneta: es la referencia para las imágenes marcadas [CAMIONETA TERRA CAMPERS].**\n\n"
        cuerpo = encabezado + REGLAS + "\n---\n\n## Imágenes de esta tanda\n\n" + "\n".join(lista)
        open(os.path.join(OUT, nombre + ".md"), "w", encoding="utf-8").write(cuerpo)
        indice.append((nombre, region, len(parte), con_camper, parte[0][1], parte[-1][1]))

tabla = "\n".join(f"| `{nm}` | {rg} | {c} | {pi} → {pf} | {'Sí' if cam else ''} |"
                  for nm, rg, c, cam, pi, pf in indice)
open(os.path.join(OUT, "indice.md"), "w", encoding="utf-8").write(
    "| Tanda | Región | Imágenes | Desde → hasta | Foto de la camioneta |\n|---|---|---|---|---|\n" + tabla + "\n")
print(f"{len(todas)} imágenes en {len(indice)} tandas; tamaño máx. "
      f"{max(os.path.getsize(os.path.join(OUT, nm + '.md')) for nm, *_ in indice) // 1024} KB")

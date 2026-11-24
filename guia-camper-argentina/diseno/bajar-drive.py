"""Baja las imágenes nuevas de la carpeta pública de Google Drive y las guarda en img/ como JPG livianos.
Solo toma archivos cuyo nombre coincide con un código de la guía (ej. NOR-04-principal.png).
Uso: python3 bajar-drive.py [ID_CARPETA]"""
import json
import os
import re
import subprocess
import sys
import tempfile

BASE = os.path.dirname(os.path.abspath(__file__))
CARPETA = sys.argv[1] if len(sys.argv) > 1 else "1NX46cOmzB6EgjBkoSbk3I6f-ad4bhcjR"

# Códigos válidos: los mismos que usa la guía.
DATA = json.load(open(os.path.join(BASE, "paginas.json"), encoding="utf-8"))
validos = {DATA["portada"]["img"]} | {a["img"] for a in DATA["aperturas"].values()}
for f in os.listdir(os.path.join(BASE, "datos")):
    if f.endswith(".json"):
        for L in json.load(open(os.path.join(BASE, "datos", f), encoding="utf-8")):
            validos |= {L["codigo"] + "-principal", L["destacada"]["img"]} | {i["img"] for i in L["fila"]["items"]}

tmp = tempfile.mkdtemp()
# La vista "embebida" de la carpeta lista todos los archivos (la vista normal corta en ~50).
html = subprocess.run(["curl", "-sSL", f"https://drive.google.com/embeddedfolderview?id={CARPETA}"],
                      capture_output=True, check=True).stdout.decode("utf-8", "ignore")
archivos = [(i, n.strip()) for i, n in re.findall(r'id="entry-([A-Za-z0-9_-]+)".*?flip-entry-title">([^<]+)', html, re.S)
            if n.strip().lower().endswith((".png", ".jpg", ".jpeg", ".webp"))]
if not archivos:
    sys.exit("No encontré imágenes: ¿la carpeta está compartida como 'Cualquier persona con el enlace'?")

nuevas, ignoradas = [], []
for fid, nombre in archivos:
    codigo = os.path.splitext(nombre)[0]
    if codigo not in validos:
        ignoradas.append(nombre)
        continue
    destino = os.path.join(BASE, "img", codigo + ".jpg")
    if os.path.exists(destino):
        continue
    crudo = os.path.join(tmp, nombre)
    subprocess.run(["curl", "-sSL", "-o", crudo,
                    f"https://drive.usercontent.google.com/download?id={fid}&export=download&confirm=t"], check=True)
    subprocess.run(["convert", crudo, "-strip", "-interlace", "Plane", "-quality", "82", destino], check=True)
    nuevas.append(codigo)

total = len([f for f in os.listdir(os.path.join(BASE, "img")) if f.endswith(".jpg")])
print(f"{len(archivos)} en Drive · {len(nuevas)} nuevas · {total} de {len(validos)} imágenes en la guía")
if ignoradas:
    print("Nombres que no son códigos de la guía (no se usaron): " + ", ".join(ignoradas))

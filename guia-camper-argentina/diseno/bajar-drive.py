"""Baja las imágenes nuevas de la carpeta pública de Google Drive y las guarda en img/ como JPG livianos.
Solo toma archivos cuyo nombre coincide con un código de la guía (ej. NOR-04-principal.png).
Uso: python3 bajar-drive.py [ID_CARPETA [CÓDIGO ...]]  (los códigos se vuelven a bajar aunque ya estén)"""
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
html = html.replace("\u202f", " ")
archivos = [(i, n.strip(), f.strip()) for i, n, f in re.findall(
    r'id="entry-([A-Za-z0-9_-]+)".*?flip-entry-title">([^<]+)<.*?flip-entry-last-modified"><div>([^<]*)', html, re.S)
            if n.strip().lower().endswith((".png", ".jpg", ".jpeg", ".webp"))]
# Registro de lo ya bajado (id + fecha de modificación): si un archivo se reemplaza en Drive, se vuelve a bajar.
REG = os.path.join(BASE, "img", ".drive.json")
registro = json.load(open(REG)) if os.path.exists(REG) else {}
FORZAR = set(sys.argv[2:])  # códigos a volver a bajar sí o sí
if not archivos:
    sys.exit("No encontré imágenes: ¿la carpeta está compartida como 'Cualquier persona con el enlace'?")

nuevas, reemplazadas, ignoradas = [], [], []
for fid, nombre, fecha in archivos:
    codigo = os.path.splitext(nombre)[0]
    if codigo not in validos:
        ignoradas.append(nombre)
        continue
    destino = os.path.join(BASE, "img", codigo + ".jpg")
    firma = f"{fid} {fecha}"
    existe = os.path.exists(destino)
    if existe and codigo not in FORZAR and registro.get(codigo, firma) == firma:
        registro[codigo] = firma
        continue
    crudo = os.path.join(tmp, nombre)
    subprocess.run(["curl", "-sSL", "-o", crudo,
                    f"https://drive.usercontent.google.com/download?id={fid}&export=download&confirm=t"], check=True)
    subprocess.run(["convert", crudo, "-strip", "-interlace", "Plane", "-quality", "82", destino], check=True)
    (reemplazadas if existe else nuevas).append(codigo)
    registro[codigo] = firma

json.dump(registro, open(REG, "w"), indent=0, sort_keys=True)
total = len([f for f in os.listdir(os.path.join(BASE, "img")) if f.endswith(".jpg")])
print(f"{len(archivos)} en Drive · {len(nuevas)} nuevas · {len(reemplazadas)} reemplazadas · {total} de {len(validos)} imágenes en la guía")
if reemplazadas:
    print("Reemplazadas: " + ", ".join(reemplazadas))
if ignoradas:
    print("Nombres que no son códigos de la guía (no se usaron): " + ", ".join(ignoradas))

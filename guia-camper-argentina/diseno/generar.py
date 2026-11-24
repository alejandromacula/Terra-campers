"""Genera guia-terra-campers.html a partir de paginas.json (portada, regiones, aperturas) y datos/*.json (lugares). Cada recuadro de imagen muestra img/<slot>.jpg|png|webp
si existe y, si no, un recuadro rayado con el nombre del archivo que falta."""
import json
import os
from html import escape

BASE = os.path.dirname(os.path.abspath(__file__))
DATA = json.load(open(os.path.join(BASE, "paginas.json"), encoding="utf-8"))
REG = DATA["regiones"]
LUGARES = []
for f in sorted(os.listdir(os.path.join(BASE, "datos"))):
    if f.endswith(".json"):
        LUGARES += json.load(open(os.path.join(BASE, "datos", f), encoding="utf-8"))
ORANGE = "#c45c1a"


def img(slot, cls=""):
    # La foto se busca al abrir el HTML: si img/<slot>.jpg|png|webp existe tapa el recuadro rayado.
    urls = ", ".join(f"url('img/{slot}.{ext}')" for ext in ("jpg", "png", "webp"))
    return (f'<div class="img ph {cls}"><span>Imagen<br><b>{escape(slot)}</b></span>'
            f'<div class="pic" style="background-image:{urls}"></div></div>')


ICONS = {
    "pernocte": '<rect x="2" y="7" width="15" height="9" rx="1.5"/><path d="M17 10h3l2 3v3h-5"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="18" cy="17.5" r="1.8"/>',
    "combustible": '<rect x="4" y="4" width="10" height="16" rx="1.5"/><path d="M4 10h10"/><path d="M14 8l4 3v7a1.5 1.5 0 0 0 3 0v-8l-3-3"/>',
    "camino": '<path d="M8 21 10 3"/><path d="M16 21 14 3"/><path d="M12 6v2M12 11v2M12 16v2"/>',
    "altura": '<path d="M2 20 9 8l4 6 3-4 6 10z"/><path d="M7.5 10.5 9 8l1.5 2.3"/>',
}


def icon(kind, state, color):
    stroke = {"ok": color, "aviso": ORANGE, "no": "#8a847a"}[state]
    slash = '<path d="M3 3 21 21" stroke-width="2"/>' if state == "no" else ""
    return (f'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="{stroke}" '
            f'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
            f'{ICONS[kind]}{slash}</svg>')


def tab(region):
    r = REG[region]
    top = 24 + r["orden"] * 26  # 8 pestañas de 24 mm entre 24 y 230 mm: no tocan el pie
    return (f'<div class="tab" style="top:{top}mm;background:{r["color"]}">'
            f'<span>{escape(r.get("pestana", r["nombre"]))}</span></div>')


def footer(region, num):
    if region is None:
        return '<footer class="foot"><span class="brand">Terra Campers</span><span class="folio">Guía de ruta</span></footer>'
    r = REG[region]
    folio = escape(r["nombre"]) + (f' <i style="color:{r["color"]}">/</i> <b>{num}</b>' if num else "")
    return f'<footer class="foot"><span class="brand">Terra Campers</span><span class="folio">{folio}</span></footer>'


def page_portada(p):
    return f'''<section class="page portada">
  {img(p["img"], "hero-full")}
  <div class="portada-shade"></div>
  <div class="portada-top"><span class="logo">Terra<br>Campers</span></div>
  <div class="portada-text">
    <h1>{escape(p["titulo"])}</h1>
    <p class="sub">{escape(p["subtitulo"])}</p>
    <div class="rule" style="background:{ORANGE}"></div>
    <p class="linea">{escape(p["linea"])}</p>
  </div>
</section>'''


def page_como_usar():
    swatches = "".join(
        f'<li><span class="sw" style="background:{r["color"]}"></span><b>{escape(r["nombre"])}</b>'
        f'<span class="cod">{k}</span></li>'
        for k, r in sorted(REG.items(), key=lambda kv: kv[1]["orden"]))
    legend = "".join(
        f'<li>{icon(k, s, REG["NOR"]["color"])}<span><b>{t}</b> {d}</span></li>'
        for k, s, t, d in [
            ("pernocte", "ok", "Pernocte", "dónde se puede dormir con la camper"),
            ("combustible", "aviso", "Combustible", "última carga antes del lugar"),
            ("camino", "aviso", "Camino", "asfalto, ripio, curvas, cortes"),
            ("altura", "aviso", "Altura", "metros sobre el nivel del mar"),
        ])
    return f'''<section class="page interior como">
  <p class="kick" style="color:{ORANGE}">Antes de salir</p>
  <h2 class="big">Cómo usar<br>esta guía</h2>
  <div class="rule" style="background:{ORANGE}"></div>
  <p class="lead">Cada página es un lugar. Las regiones tienen un color y una pestaña en el borde del libro: con la guía cerrada, buscás el color y abrís directo en esa parte del país. Los números siguen un recorrido lógico en camper, así que los lugares consecutivos arman un viaje.</p>
  <div class="cols2">
    <div>
      <h3 class="lab">Regiones</h3>
      <ul class="swatches">{swatches}</ul>
    </div>
    <div>
      <h3 class="lab">Íconos</h3>
      <ul class="legend">{legend}</ul>
      <p class="note">Color de la región: todo bien. <span style="color:{ORANGE}">Naranja</span>: prestá atención. Tachado: no se puede.</p>
      <h3 class="lab" style="margin-top:7mm">En cada página</h3>
      <p class="small">Datos para el viaje, historia, paisaje, flora y fauna, y al final lo que tenés que saber para llegar y dormir con la camper. Los consejos (fotografía, cielo, dónde comer) aparecen solo donde hay algo realmente propio del lugar.</p>
    </div>
  </div>
  <p class="credit-ia">Foto de portada: Terra Campers. Las demás imágenes son ilustrativas, generadas con inteligencia artificial. Datos relevados en 2026: confirmá horarios y estado de caminos antes de viajar.</p>
  {footer(None, "")}
</section>'''


def page_apertura(region, a):
    r = REG[region]
    items = "".join(f'<li><span style="color:{r["color"]}">{L["codigo"].replace("-", " ")}</span>{escape(L["titulo"])}</li>'
                    for L in LUGARES if L["region"] == region)
    return f'''<section class="page apertura">
  {img(a["img"], "hero-open")}
  <div class="hero-fade"></div>
  {tab(region)}
  <div class="ap-body">
    <p class="kick" style="color:{r["color"]}">{escape(a["provincias"])}</p>
    <h2 class="big">{escape(r["nombre"])}</h2>
    <div class="rule" style="background:{r["color"]}"></div>
    <p class="lead">{escape(a["intro"])}</p>
    <ol class="indice">{items}</ol>
  </div>
  {footer(region, "")}
</section>'''


def page_lugar(L):
    r = REG[L["region"]]
    c = r["color"]
    num = L["codigo"].split("-")[-1]
    datos = "".join(f'<tr><th>{escape(k)}</th><td>{escape(v)}</td></tr>' for k, v in L["datos"])
    iconos = "".join(f'<div class="ic">{icon(k, s, c)}<span>{escape(t)}</span></div>' for k, s, t in L["iconos"])
    bloques = "".join(
        f'<div class="blk"><h3 class="lab">{escape(t)}<i style="background:{c}"></i></h3><p>{escape(x)}</p></div>'
        for t, x in L["bloques"])
    d = L["destacada"]
    fila = L["fila"]
    cards = "".join(
        f'<figure class="card">{img(it["img"], "thumb")}<figcaption><b>{escape(it["nombre"])}</b>'
        f'<span>{escape(it["texto"])}</span>'
        + (f'<span class="ct" style="color:{c}">{escape(it["contacto"])}</span>' if it.get("contacto") else "")
        + '</figcaption></figure>' for it in fila["items"])
    cierre = "".join(
        f'<div class="cl"><h3 class="lab">{escape(t)}<i style="background:{c}"></i></h3><p>{escape(x)}</p></div>'
        for t, x in L["cierre"])
    return f'''<section class="page lugar">
  {img(L["codigo"] + "-principal", "hero")}
  <div class="hero-fade"></div>
  {tab(L["region"])}
  <header class="head">
    <div class="head-l">
      <p class="kick"><b style="color:{c}">{L["codigo"].replace("-", " ")}</b> <i style="color:{c}">/</i> {escape(L["ubicacion"])}</p>
      <h1>{escape(L["titulo"])}</h1>
      <div class="rule" style="background:{c}"></div>
      <p class="dek">{escape(L["bajada"])}</p>
    </div>
    <aside class="head-r" style="border-color:{c}">
      <h3 class="lab plain">Datos para el viaje</h3>
      <table class="datos">{datos}</table>
      <div class="iconos">{iconos}</div>
    </aside>
  </header>
  <div class="mid">
    <div class="mid-text">{bloques}</div>
    <figure class="feat">{img(d["img"], "feat-img")}<figcaption><i style="background:{c}"></i><b>{escape(d["titulo"])}</b><span>{escape(d["sub"])}</span></figcaption></figure>
  </div>
  <div class="fila n{len(fila["items"])}">
    <h3 class="lab">{escape(fila["titulo"])}<i style="background:{c}"></i></h3>
    <div class="cards">{cards}</div>
  </div>
  <div class="cierre">{cierre}</div>
  {footer(L["region"], num)}
</section>'''


CSS = open(os.path.join(BASE, "estilo.css"), encoding="utf-8").read()
pages = [page_portada(DATA["portada"]), page_como_usar()]
abiertas = set()
for L in LUGARES:
    if L["region"] not in abiertas:
        pages.append(page_apertura(L["region"], DATA["aperturas"][L["region"]]))
        abiertas.add(L["region"])
    pages.append(page_lugar(L))

html = f'''<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Guía de Ruta Terra Campers</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<style>{CSS}</style></head><body>{"".join(pages)}</body></html>'''
open(os.path.join(BASE, "guia-terra-campers.html"), "w", encoding="utf-8").write(html)
print(f"{len(pages)} páginas, {len(LUGARES)} lugares")

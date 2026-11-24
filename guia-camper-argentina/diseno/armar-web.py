"""Arma la versión web navegable de la guía en web/: index.html (páginas + barra de regiones) e img/*.webp livianos.
Se publica como Artifact. Correr después de generar.py."""
import json
import os
import re
import subprocess

BASE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(BASE, "web")
os.makedirs(os.path.join(WEB, "img"), exist_ok=True)
DATA = json.load(open(os.path.join(BASE, "paginas.json"), encoding="utf-8"))
REG = DATA["regiones"]

html = open(os.path.join(BASE, "guia-terra-campers.html"), encoding="utf-8").read()
css = re.search(r"<style>(.*)</style>", html, re.S).group(1)
cuerpo = re.search(r"<body>(.*)</body>", html, re.S).group(1)


def webp(origen, nombre, ancho):
    destino = os.path.join(WEB, "img", nombre + ".webp")
    if not os.path.exists(destino) or os.path.getmtime(destino) < os.path.getmtime(origen):
        subprocess.run(["convert", origen, "-resize", f"{ancho}x{ancho}>", "-quality", "74", destino], check=True)


# Imágenes: solo las que existen, en webp; las que faltan quedan con el recuadro rayado.
usadas = set()
def cambiar(m):
    slot = m.group(1)
    jpg = os.path.join(BASE, "img", slot + ".jpg")
    if not os.path.exists(jpg):
        return "background-image:none"
    webp(jpg, slot, 1600 if slot == "portada" else 1100)
    usadas.add(slot)
    return f"background-image:url('img/{slot}.webp')"

cuerpo = re.sub(r"background-image:url\('img/([^']+)\.jpg'\), url\('img/[^']+\.png'\), url\('img/[^']+\.webp'\)", cambiar, cuerpo)
for logo in ("logo-blanco", "logo-verde"):
    webp(os.path.join(BASE, "marca", logo + ".png"), logo, 700)
    cuerpo = cuerpo.replace(f'src="marca/{logo}.png"', f'src="img/{logo}.webp"')
# Las páginas son las mismas del PDF: se borran del directorio web las imágenes que ya no se usan.
for f in os.listdir(os.path.join(WEB, "img")):
    if f.endswith(".webp") and f[:-5] not in usadas | {"logo-blanco", "logo-verde"}:
        os.remove(os.path.join(WEB, "img", f))

chips = '<a href="#portada" class="chip"><i style="background:#c45c1a"></i>Inicio</a>' + "".join(
    f'<a href="#{k}" class="chip"><i style="background:{r["color"]}"></i>{r["nombre"]}</a>'
    for k, r in sorted(REG.items(), key=lambda kv: kv[1]["orden"]))

# Cada página en su hoja; el id pasa a la hoja para que los saltos caigan en el lugar escalado.
def envolver(m):
    ident = f' id="{m.group(2)}"' if m.group(2) else ""
    return f'<div class="hoja"{ident}><section class="page{m.group(1)}">'
cuerpo = re.sub(r'<section class="page([^"]*)"(?: id="([^"]+)")?>', envolver, cuerpo)
cuerpo = cuerpo.replace("</section>", "</section></div>")

pantalla = """
/* Versión de pantalla: las mismas páginas del libro, apiladas sobre una mesa, con barra de regiones arriba. */
:root{--mesa:#ddd6ca;--barra:#f7f4ee;--tinta:#1f1c18;--linea:#cfc6b8;--z:1;}
@media screen{
  html{-webkit-text-size-adjust:100%;text-size-adjust:100%;}
  html,body{background:var(--mesa);}
  body{padding-block:64px 32px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));}
  body::before{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:10;background:var(--barra);}
  /* Cada página va en una "hoja" del tamaño ya escalado; la página se achica con transform (Safari respeta transform, no zoom). */
  .hoja{width:calc(170mm * var(--z));height:calc(255mm * var(--z));margin:0 auto 22px;overflow:clip;position:relative;
    box-shadow:0 1px 3px rgba(60,45,30,.18),0 8px 24px rgba(60,45,30,.14);}
  .hoja > .page{transform:scale(var(--z));transform-origin:0 0;}
  .page:target{outline:none;}
  .barra{position:fixed;top:env(safe-area-inset-top,0px);left:0;right:0;z-index:9;background:var(--barra);border-bottom:1px solid var(--linea);
    padding-left:max(12px,env(safe-area-inset-left,0px));padding-right:max(12px,env(safe-area-inset-right,0px));}
  .barra nav{display:flex;gap:6px;overflow-x:auto;padding-block:10px;scrollbar-width:none;max-width:1100px;margin:0 auto;}
  .barra nav::-webkit-scrollbar{display:none;}
  .chip{flex:none;display:inline-flex;align-items:center;gap:7px;padding:6px 11px;border:1px solid var(--linea);border-radius:999px;
    font:600 12px/1 'Montserrat',Arial,sans-serif;letter-spacing:.04em;color:var(--tinta);text-decoration:none;background:#fff;}
  .chip:hover{border-color:var(--tinta);}
  .chip:focus-visible{outline:2px solid var(--tinta);outline-offset:2px;}
  .chip i{width:10px;height:10px;border-radius:50%;display:block;}
  .hoja{scroll-margin-top:64px;}
}
"""
script = """<script>
// Escala las páginas (17 cm de ancho) al ancho de la pantalla.
(function(){
  function ajustar(){
    var disponible = document.documentElement.clientWidth - 32;
    var z = Math.max(0.3, Math.min(1.35, disponible / 643));
    document.documentElement.style.setProperty('--z', z.toFixed(3));
  }
  ajustar(); window.addEventListener('resize', ajustar);
  function ir(){ var id = location.hash.slice(1); var el = id && document.getElementById(id); if (el) el.scrollIntoView(); }
  window.addEventListener('hashchange', ir); window.addEventListener('load', ir);
})();
</script>"""

pagina = f"""<title>Guía de Ruta Terra Campers</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<style>{css}{pantalla}</style>
<header class="barra"><nav aria-label="Regiones">{chips}</nav></header>
<main>{cuerpo}</main>
{script}
"""
open(os.path.join(WEB, "index.html"), "w", encoding="utf-8").write(pagina)
tam = sum(os.path.getsize(os.path.join(WEB, "img", f)) for f in os.listdir(os.path.join(WEB, "img")))
print(f"web/index.html {os.path.getsize(os.path.join(WEB, 'index.html')) // 1024} KB · {len(usadas)} fotos + 2 logos · {tam / 1e6:.1f} MB")

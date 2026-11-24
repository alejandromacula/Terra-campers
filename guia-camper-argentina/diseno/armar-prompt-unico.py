"""Arma chatgpt/PROMPT-UNICO.txt: reglas + una línea por imagen, para pegar en un solo mensaje de ChatGPT.
Uso: python3 armar-prompt-unico.py <salida-lista.txt>  (la cabecera se arma aparte)."""
import re,os,sys
sys.path.insert(0,'.')
src=open('armar-tandas-chatgpt.py',encoding='utf-8').read()
# reutiliza entradas() y REEMPLAZOS sin ejecutar el resto
ns={"__file__": os.path.abspath("armar-tandas-chatgpt.py")}
exec(src.split("todas = []")[0],ns)
todas=[]
for f in sorted(os.listdir('prompts')):
    if f.endswith('.md'): todas+=ns['entradas'](open('prompts/'+f,encoding='utf-8').read())
def corto(p):
    p=re.sub(r"^(Photorealistic |Close-up |Wildlife |Aerial |Night |Macro )*[\w\s,-]*?(photograph|photo|image)s? (of|showing|inside|from) ","",p,flags=re.I)
    p=re.split(r": |; |\. (?=[A-Z])| — ",p)[0].rstrip(".")
    p=re.sub(r" in (northern |southern )?Argentina\b|,? Argentina\b|, Buenos Aires province\b","",p).strip(" ,")
    if len(p)>105:
        p=p[:105].rsplit(' ',1)[0].rstrip(" ,(")
        if p.count("(")>p.count(")"): p=p.rsplit("(",1)[0].rstrip(" ,")
    return p
out=[];reg=None
for region,slot,fmt,prompt,real in todas:
    if region!=reg: out.append(f"\n## {region}"); reg=region
    m=[]
    f=ns['formato'](slot,fmt)
    if f.startswith('Vertical'): m.append('V')
    if slot in ns['CAMPER']: m.append('CAM')
    if real: m.append('R')
    if slot in ns['SALTEAR']: m.append('SKIP')
    out.append(f"{slot}{' ['+','.join(m)+']' if m else ''}: {corto(prompt)}")
txt="\n".join(out)
open(sys.argv[1],'w').write(txt)
print(len(txt), len(todas))

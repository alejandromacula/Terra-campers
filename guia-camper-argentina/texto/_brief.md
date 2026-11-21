# Brief — Texto de la Guía de Ruta Terra Campers

## Contexto

Terra Campers alquila camionetas camper/motorhome que salen desde Buenos Aires. Estamos escribiendo una guía de viaje por Argentina que se entrega impresa como librito (y después va a vivir dentro de una app). **Cada página es un lugar.** El público son viajeros en camper, incluida gente mayor que va a leerla en papel.

El tono es el de un guía que viaja con vos en la camioneta y te cuenta el lugar: qué estás viendo, por qué es así, qué historia tiene, qué no te podés perder y qué tenés que saber para llegar y dormir con la camper. **Práctico, no enciclopédico.** Español rioplatense con voseo ("llegá", "salí", "calculá").

Ahora estamos en la etapa de **texto**: el diseño ya está aprobado y se aplica después. No hace falta conseguir imágenes, solo describir qué fotos necesita cada página.

## Regla de oro: nada inventado

Cada dato concreto (fechas, nombres propios, distancias, horarios, rutas, especies, teléfonos, nombres de negocios) tiene que salir de una fuente que encontraste en esta investigación. Si no lo pudiste verificar, **no va**, o va marcado `[VERIFICAR]`. Es mejor una página más corta y cierta que una completa con datos dudosos. Si una fuente vieja contradice a una nueva, priorizá la nueva y oficial.

- No incluyas precios (cambian).
- Teléfonos, WhatsApp, Instagram y webs: solo si aparecen publicados por el propio lugar o por un directorio/organismo confiable. Nunca deducidos.
- No hay acceso a Google Maps: tomá distancias y tiempos de fuentes publicadas (Vialidad, sitios oficiales de turismo, Parques Nacionales) y redondeá con "~".
- Si un lugar es importante pero no es apto para una camper grande (ripio muy malo, cornisa, vado), igual va, con la advertencia honesta en "En la camper".

## Extensión

Tiene que entrar en **una página impresa con una foto grande arriba**: el cuerpo de cada lugar va entre ~220 y ~340 palabras. Cada sección, 1 a 3 oraciones. Fauna: 2 o 3 especies, una línea cada una. Podés fusionar dos secciones cortas (ej. "Paisaje y flora") o darle un título más específico a la de geología cuando tenga un gancho (ej. "Por qué se rompe").

## Plantilla de página (lugares)

Copiá esta estructura en Markdown, exacta:

```
## {CÓDIGO} · {Nombre del lugar}
- **Dónde:** {Provincia} · {pueblo base más cercano} · {área protegida, si aplica}
- **Bajada:** {una oración que enganche, con un dato concreto y verdadero}

### Cómo llegar
{distancia y tiempo desde el pueblo base, ruta, tipo de calzada (asfalto / ripio / tierra), si es apta para camper o motorhome; horarios y entrada si aplica; tiempo sugerido de visita}

### Historia
{quién, cuándo, por qué se llama así; pueblos originarios si corresponde; un dato específico y sorprendente, no generalidades}

### Paisaje y geología
{por qué se ve como se ve: origen geológico, clima, altitud, topografía}

### Flora
{2 a 4 especies o ambientes característicos; nombre común, y científico si suma}

### Fauna
- **{Especie}:** {una línea: dónde o cuándo se ve, y qué tan probable es verla}
- **{Especie}:** …

### {Sección opcional — ver reglas abajo}
{…}

### En la camper
{pernocte: dónde se puede (camping concreto con nombre, área habilitada) y dónde no; servicios (agua, carga eléctrica, descarga de grises/negras); combustible: última estación antes y kilómetros sin servicio; estado del camino para un vehículo grande; altura, viento, frío, calor, señal de celular si es relevante}

**Fotos necesarias:** principal: {encuadre ideal y desde dónde}; chicas: {una por cada especie, planta, edificio o plato que se menciona}
**Fuentes:** {links reales que usaste}
```

### Secciones opcionales

Van **solo si hay algo específico, verificable y propio de ese lugar**. Si lo que tenés es genérico, no la pongas. Una página puede tener una, varias o ninguna. El título depende del tema, por ejemplo:

- **Consejo fotográfico** — desde dónde y a qué hora sale la foto clásica (ej. en El Chaltén: salir por la ruta al amanecer para tener el Fitz Roy encendido, la postal más conocida del pueblo).
- **Cielo nocturno** — solo donde el cielo es realmente excepcional (altura, aire seco, sin contaminación lumínica, observatorio, reserva de cielo oscuro). "La Cruz del Sur se ve en toda la Patagonia" **no** califica.
- **Dónde comer** — un lugar puntual, vigente y bien valorado, con dirección; o un plato típico de ese lugar en particular.
- **Imperdible**, **Antes de ir**, **Si tenés un día más**, **Fiesta / evento**, etc.

Nunca uses "Foto" a secas como título.

## Plantilla de página (Pueblitos de Buenos Aires)

Para pueblos chicos de la provincia, pensados para escapadas de 1 a 3 días desde donde se retira la camper:

```
## {CÓDIGO} · {Pueblo}
- **Dónde:** Partido de {…} · ~{km} km de CABA (~{tiempo}) por {rutas}
- **Bajada:** {una oración con gancho}

### Por qué ir
{2 o 3 oraciones}

### Historia
{breve, específica: fundación, estación de tren, inmigración, personaje, etc.}

### Qué hacer
- **{Lugar puntual}** — {qué es y qué se hace ahí, 1 o 2 líneas}. {Dirección}. {Tel. / WhatsApp / Instagram / web, SOLO si está publicado}. {Horario o si requiere reserva, si está publicado}.
- … (de 2 a 5 lugares: bodegas, almacenes de ramos generales, museos, capillas, estancias, queserías, cervecerías, ferias, reservas)

### Dónde comer
{opcional: uno o dos lugares puntuales y bien valorados}

### En la camper
{dónde estacionar o pernoctar (camping municipal, predio, plaza tranquila), servicios cercanos, estado de los caminos de tierra si los hay}

**Fotos necesarias:** …
**Fuentes:** …
```

Estos lugares son candidatos a convenios comerciales con Terra Campers, así que los datos de contacto reales y vigentes tienen mucho valor.

## Ejemplo aprobado por el cliente

```
## AUS-01 · Glaciar Perito Moreno
- **Dónde:** Santa Cruz · El Calafate · Parque Nacional Los Glaciares
- **Bajada:** Una pared de hielo de 60 metros que cruje, se parte y cae al lago, a la vista desde las pasarelas.

### Cómo llegar
78 km desde El Calafate por la RP 11, asfaltada hasta el final (~1 h 15, apta camper). Se paga entrada al Parque Nacional en el portal de la ruta. Abre de 8 a 18 h de septiembre a abril y de 9 a 16 h el resto del año. Calculá 2 a 3 horas para las pasarelas.

### Historia
Lleva el nombre de Francisco "Perito" Moreno (1852–1919), el naturalista que, como perito argentino, defendió la frontera con Chile a fines del siglo XIX. Nunca llegó a verlo; un marino chileno lo había registrado antes con otro nombre.

### Por qué se rompe
El frente avanza hasta chocar con la Península de Magallanes y cierra el Brazo Rico. El agua represada sube varios metros, cava un túnel bajo el hielo y el arco termina derrumbándose: cada pocos años, sin fecha fija. Fue de los pocos glaciares patagónicos estables durante un siglo; hoy también adelgaza.

### Paisaje y flora
Una lengua del Campo de Hielo Patagónico Sur baja al lago entre bosque de lenga y ñire. Hacia el este, la sombra de lluvia de los Andes deja estepa de coirón y calafate, el arbusto espinoso que nombra al pueblo. Dicen que quien come su fruto, vuelve.

### Fauna
- **Huemul:** ciervo andino en peligro de extinción. Verlo es muy raro.
- **Cóndor andino:** planea sobre los paredones del Brazo Rico.
- **Zorro colorado:** ronda senderos y estacionamientos. No lo alimentes.

### Consejo fotográfico
Llegá temprano: menos gente y luz baja que marca las grietas. Un día nublado no es mala suerte, porque el azul del hielo se ve más intenso. Para las rupturas, filmá: se escuchan antes de verse.

### En la camper
No se puede pernoctar en la zona del glaciar. Salí de El Calafate con agua, gas y batería cargados: en los 78 km no hay estaciones de servicio. Llevá abrigo aunque sea verano.

**Fotos necesarias:** principal: frente del glaciar desde las pasarelas, con el Brazo Rico y los témpanos; chicas: calafate con fruto, huemul, cóndor, zorro colorado
**Fuentes:** …
```

## Archivo de salida

- Escribí **solo** en el archivo que te asignaron. No toques ningún otro archivo del repo ni del disco. No uses git. No descargues imágenes.
- Empezá el archivo con `# {Nombre de la región}`, una línea con el color/código de la región, y un **índice numerado en orden de recorrido**.
- Ordená los lugares como un viaje lógico en camper: que los códigos consecutivos armen un recorrido (por ejemplo, en el sentido en que se llega desde Buenos Aires).
- Después del índice, las páginas en ese mismo orden.
- Al final del archivo, una sección `## Pendientes de verificar` con todo lo que quedó marcado `[VERIFICAR]`.

## Material previo

Ya hay una investigación anterior de campings, actividades y restaurantes por ciudad en `/home/user/Terra-campers/guia-camper-argentina/guia-fuente.md`. Leela y reutilizá lo que sirva (sobre todo los campings con link, para "En la camper"), pero re-verificá lo que uses.

## Cobertura

La lista de lugares que te pasan es la base. Los **Parques Nacionales van siempre**, aunque el acceso sea difícil (con la advertencia honesta). Sumá los parques y reservas provinciales importantes. Podés agregar hasta 3 lugares notables que encuentres y no estén en la lista, o fusionar/descartar alguno que no justifique una página propia, explicándolo en tu respuesta final.

## Respuesta final

Cuando termines, respondé en pocas líneas: cuántos lugares escribiste, la lista de códigos y nombres, qué agregaste o descartaste y por qué, y cuántos datos quedaron marcados `[VERIFICAR]`.

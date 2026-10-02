---
name: contenido-instagram-empulsa
description: "Genera contenido orgánico para el Instagram de Empulsa (agencia de Concepción que ofrece desarrollo web y SEO, Meta Ads, CRM a medida, agente de IA de atención y email marketing) con formatos creativos que NO repiten el mismo molde: editorial, chat de WhatsApp, boleta, tier list, buscador, carta manuscrita. Escribe el copy, genera las imágenes desde un JSON, los captions y el manifest semanal que lee la automatización de Make. Triggers: 'hazme un post para instagram', 'necesito contenido para empulsa', 'genera un carrusel sobre X', 'dame ideas de contenido', 'hazme el calendario de esta semana', 'contenido para redes de empulsa', 'mejora el instagram de empulsa'."
---

# Contenido Instagram Empulsa

Cuenta real: instagram.com/empulsa.cl. Empulsa es una agencia de Concepción que ofrece a negocios de Chile exactamente cinco servicios:

1. **Desarrollo web y SEO**: páginas web y posicionamiento en Google.
2. **Campañas de Meta Ads**.
3. **CRM a medida**: ordena cómo llegan, se agendan y se siguen los clientes por WhatsApp e Instagram. Se habla de "tu CRM"; **no menciones la plataforma de terceros sobre la que corre**.
4. **Agente de IA de atención**: responde los chats con un guion armado junto al cliente.
5. **Email marketing**: correos automáticos (bienvenida, carrito abandonado, reactivación) con la voz del negocio.

**No ofrezcas ni des a entender que Empulsa hace Google Ads ni "automatizaciones" genéricas**: no son la oferta actual. Todo el contenido debe llevar, de forma directa o indirecta, a uno de esos 5 servicios.

## Regla fundamental: nada genérico

El dueño de la cuenta descartó el estilo anterior por genérico: todo azul, la misma letra, puros consejos sobre un fondo plano. Todo lo que generes debe cumplir esto:

1. **Cada pieza parte de una situación concreta** de una pyme chilena (un cliente que escribe y no recibe respuesta, un dueño que mira estadísticas cada 10 minutos, una búsqueda de emergencia). Nunca de un consejo abstracto.
2. **El formato es parte del contenido**: el chat de WhatsApp cuenta la historia con mensajes, la boleta cobra lo que cuesta un error, etc. No uses el fondo azul degradado con titular blanco (`template.html` y `render_post.js` están OBSOLETOS, no los uses).
3. **Cada formato tiene su propio mundo visual** (colores, tipografía). La marca aparece solo como `@empulsa.cl` chico abajo. No fuerces el azul de marca.
4. **Nada inventado**: no inventes cifras, clientes, resultados ni casos. Las situaciones se presentan como ejemplo ("Ejemplo ilustrativo") cuando usen nombres o rubros ficticios (usa dominios `.example`).
5. **Nada prometido que no esté armado**: no prometas resultados, precios, "gratis" ni plazos. Ofrece siempre una **demo en vivo**.
6. **Sin guiones** (ni medios ni largos) en los textos de las piezas y captions. Usa punto, coma o dos puntos. Solo se permite la flecha `→` para listas.
7. **Tuteo neutro chileno** ("tu", "escríbenos", "cuéntanos"). Nada de voseo ("sabés", "dedicás").

## Lo que sabemos de la cuenta (datos reales al 28 de septiembre de 2026)

- 22 seguidores. El 88% de las visualizaciones viene de seguidores. Alcance total bajo: la prioridad es que la gente guarde, comente y comparta.
- Rendimiento por día de la semana (visualizaciones promedio por pieza): Miércoles 49, Jueves 47, Lunes 40, Viernes 38, Domingo 38, Martes 32, **Sábado 24**. La hora no marcó diferencia.
- El público no llega a ver carruseles largos: **3 a 5 slides**, máximo 6.
- El texto tiene que leerse grande en el celular: frases cortas, pocas palabras por slide.

## Formatos automatizables (los generas tú, sin imágenes externas)

Se generan con `empulsa/_brand_kit/render_formato.js` a partir de un JSON. Cada formato tiene un ejemplo completo en `empulsa/_brand_kit/ejemplos/<formato>.json`: **léelo antes de escribir el tuyo**. Las fuentes viajan en `_brand_kit/fonts/` (funciona igual en Mac y Linux).

Uso (desde `empulsa/_brand_kit`):

```bash
node render_formato.js "<spec.json>" "../contenido/semana-YYYY-MM-DD/<carpeta>"
```

Genera `slide-1.jpg`, `slide-2.jpg`... en 1080x1350 (4:5). Cada slide del JSON se define con estos campos (todos opcionales salvo lo indicado en el ejemplo):

| Formato | Para qué sirve | Campos de cada slide |
|---|---|---|
| `editorial` | **El formato principal para explicar el CRM, el agente de IA, la web y los canales.** Fondo crema, titular serif con la frase clave marcada, un esquema visual y cierre con CTA. Imita a las cuentas de referencia que le gustan al dueño. | `kicker`, `titulo` (usa `[[frase clave]]` para el marcador amarillo), `acento` (frase corta abajo a la derecha, termina en `→` para invitar a deslizar), `bloque` con `tipo`: **chat** {`etiqueta`, `mensajes` [{`de`: "cliente" o "agente", `texto`, `hora`}]}, **pipeline** {`etiqueta`, `columnas` [{`titulo`, `tarjetas` [{`nombre`, `detalle`, `caliente`}]}], `nota`}, **flujo** {`etiqueta`, `entradas` [{`texto`, `color`}], `centroEtiqueta`, `centro`, `salidas` [{`texto`}]}, **lista** {`items` [..]}, **cta** {`texto`, `boton`, `telefono`, `pie`} |
| `whatsapp` | Historia de un mensaje que se pierde, un cliente que se enfría, una conversación reveladora. Ideal con CTA. | `banner` (texto grande arriba, para la portada), `contacto` (nombre del chat), `mensajes` [{`de`: "cliente" o "yo", `texto`, `hora`} o {`chip`: "4 horas después"}], `nota` (recuadro amarillo con la moraleja), o `cta` {`titulo`, `textos` [..], `telefono`} para el cierre |
| `boleta` | "Lo que te cuesta X": una cuenta con líneas, total y sello. | `fondo` (color de la mesa), `subtitulo`, `titulo`, `meta` [[campo, valor]], `lineas` [{`cantidad`, `periodo`, `texto`}], `total`, `pie`, `sello`, `codigo` (false para ocultar el código de barras), `y` (posición vertical), `cta` {`titulo`, `texto`, `telefono`} |
| `tierlist` | Ranking S a D de algo que la audiencia pueda ubicar (su web, su Instagram). Genera comentarios. | `titulo` + `filas` [["S","texto"],...] (usa "?" para la tabla vacía), o `zoom` {`letra`, `titulo`, `texto`}, o `cta` {`titulo`, `texto`, `telefono`} |
| `buscador` | "Te buscaron y encontraron a otro": resultados de búsqueda falsos con un rubro de ejemplo. | `consulta`, `titulo`, `resultados` [{`url`, `titulo`, `descripcion`, `estrellas`, `tipo`: "fantasma" o "tuyo" o "separador" (con `texto`)}], `remate`, o `cta` |
| `carta` | Pieza de marca cálida, casi sin venta: sobre, lista tachada, carta con posdata. Sin CTA. | `tipo`: "sobre" (`para`, `rotulo`), "lista" (`titulo`, `hechas` [..], `pendiente`, `remate`), "carta" (`destacado`, `texto`, `pd`, `firma`) |

Estructura de una pieza (3 a 5 slides): **gancho** (portada con la situación), **desarrollo** (1 a 3 slides, una idea cada una), **cierre** (moraleja o CTA). Frases cortas.

Estructura típica de un carrusel `editorial` (4 o 5 slides): 1) el problema en una situación (chat donde el cliente se va), 2) la solución en acción (agente de IA respondiendo), 3) el orden que queda (pipeline del CRM), 4) el mapa de canales, 5) cierre con la demo en vivo. En `editorial` los nombres de personas son ficticios y el tablero lleva la nota "Ejemplo ilustrativo". Máximo ~55 caracteres por titular; máximo 4 mensajes por slide de chat; máximo 4 columnas y 3 tarjetas por columna en el pipeline; máximo 4 entradas y 3 salidas en el flujo.

Reglas de longitud para que no se corte: titulares de portada hasta ~45 caracteres; en `carta` tipo `lista`, `titulo` corto (menos de 22 caracteres) y `remate` de una línea; en `tierlist` cada fila de una línea; máximo 4 mensajes por slide de `whatsapp`.

## Formatos con escena de Flow (solo manuales, NO los generes)

Mapa del tesoro, autopsia, escape room, casino y carta de restaurante usan imágenes hechas por el dueño en Google Flow (Nano Banana 2) y texto en perspectiva. **El agente no debe generarlos ni inventar imágenes.** Si el usuario los entrega, van como piezas extra fuera de la rotación automática.

## Semana automática (modo calendario)

**5 piezas, de lunes a viernes. Sin sábado ni domingo** (el sábado es el día más flojo y las piezas de fin de semana requieren imágenes manuales). Ninguna reel.

Asignación por defecto de formatos:

- **Lunes, miércoles y jueves** (días fuertes): formatos con CTA a servicios. Rota entre `editorial`, `whatsapp`, `boleta` y `buscador`, cambiando el orden respecto a la semana anterior (revisa el `NOTAS.md` previo). **Al menos 2 de las 5 piezas de la semana deben ser `editorial` o hablar directamente del CRM o del agente de IA**, que son el diferencial de Empulsa.
- **Martes**: `tierlist` (pide comentarios, levanta el día más débil de la semana laboral).
- **Viernes**: `carta` (marca, sin venta).

**Horario:** todas las piezas se programan a las **11:00 hora de Chile** (`T11:00:00-03:00` en horario de verano, `-04:00` en invierno). La automatización de Make publica en la siguiente ejecución, alrededor de las 11:44. No pongas otras horas: no cambian el resultado.

## Pilares y temas

Rota los 4 pilares de contenido: educativo, servicios, casos, marca. Los temas se ligan siempre a uno de los 5 servicios (web y SEO, Meta Ads, CRM, agente de IA, email marketing): por ejemplo, qué pasa con un cliente que escribe fuera de horario, cómo se ve un seguimiento ordenado en un CRM, por qué una web sin SEO no aparece, errores de una campaña de Meta Ads, qué le pasa a un cliente que compró una vez y nadie le vuelve a escribir. Si no hay datos reales para un caso de éxito, sustitúyelo por educativo o servicios y déjalo anotado en `NOTAS.md`. **Antes de elegir tema, lee los `NOTAS.md` de todas las semanas anteriores** (están en `empulsa/contenido/semana-*/NOTAS.md`) para no repetir ángulos ya publicados. Prioriza temas nuevos de agente de IA de atención, CRM, web y SEO, Meta Ads y email marketing. **No propongas temas de Google Ads.**

## Caption (uno por pieza, `caption.txt`)

- Primera línea: el gancho con la situación, con un emoji.
- Un breve desarrollo o una lista de 3 puntos con `→`.
- Una idea de cierre que resuma la moraleja.
- CTA suave: "Escríbenos y te mostramos una demo en vivo." y la línea `📩 DM o WhatsApp +56 9 3056 9940`. **En las piezas de tipo `carta` no pongas CTA ni teléfono.**
- 4 a 6 hashtags, siempre incluye `#empulsa`.
- Sin guiones, sin precios, sin promesas. Hashtags acordes a los 5 servicios (por ejemplo #crm #agenteia #paginaweb #seo #metaads #emailmarketing), sin #googleads.

## Procedimiento

1. Calcula la semana: el lunes siguiente a la última carpeta `semana-YYYY-MM-DD` que exista. **Nunca sobrescribas una semana existente.**
2. Lee los `NOTAS.md` anteriores y elige 5 situaciones nuevas.
3. Por cada pieza: crea la carpeta `empulsa/contenido/semana-YYYY-MM-DD/<dia>-carrusel-<formato>-<tema>/` con:
   - `spec.json` (el JSON del formato),
   - `slide-N.jpg` (los genera `render_formato.js`),
   - `caption.txt`.
   El nombre de la carpeta **debe contener la palabra `carrusel`** (Make la usa para decidir cómo publicar).
4. Si falta Playwright: `npm install playwright && npx playwright install chromium`.
5. **Revisa visualmente cada slide** (ábrelas): texto completo, nada cortado ni pisado por el sello o el código de barras, tildes correctas. Si algo se corta, acorta el texto y vuelve a generar.
6. Genera `manifest.json` de la semana (formato abajo).
7. Escribe `NOTAS.md`: temas elegidos, formatos por día, qué se sustituyó y por qué.

### Formato del `manifest.json`

Lista de objetos, uno por pieza. Los 6 campos de imagen siempre presentes (vacíos con `""` si no se usan), campos individuales, no un array. Máximo 6 slides.

```json
{
  "carpeta": "lunes-carrusel-whatsapp-agencia",
  "tipo": "carrusel",
  "programado_para": "2026-10-12T11:00:00-03:00",
  "caption": "texto completo del caption.txt",
  "imagen_1": "https://raw.githubusercontent.com/bibacache/EMPULSA/main/empulsa/contenido/semana-2026-10-12/lunes-carrusel-whatsapp-agencia/slide-1.jpg",
  "imagen_2": "https://raw.githubusercontent.com/bibacache/EMPULSA/main/empulsa/contenido/semana-2026-10-12/lunes-carrusel-whatsapp-agencia/slide-2.jpg",
  "imagen_3": "https://raw.githubusercontent.com/bibacache/EMPULSA/main/empulsa/contenido/semana-2026-10-12/lunes-carrusel-whatsapp-agencia/slide-3.jpg",
  "imagen_4": "",
  "imagen_5": "",
  "imagen_6": ""
}
```

Los archivos deben estar en GitHub (rama `main`) para que las URLs `raw.githubusercontent.com` funcionen: Instagram descarga las imágenes desde ahí.

### Cómo llega a Instagram

GitHub, luego la Ingesta de Make (diaria, lee el manifest de la semana en curso y crea los registros), luego el Publicador de Make (corre a las 03:44, 11:44 y 19:44 hora de Chile). No hay que hacer nada más. El antiguo paso con GoHighLevel (`ghl_publish.js`, `publicar_semana.js`) está en desuso.

## Resumen final para el usuario

1. Qué formatos y temas se generaron, en qué día.
2. Dónde quedaron los archivos.
3. Qué se sustituyó o quedó pendiente.
4. Recordar que no se publicó nada directamente: solo quedó listo para que la automatización lo tome.

## Perfil de Instagram (solo si el usuario lo pide, no en cada semana)

Bio máxima de 150 caracteres, sin datos inventados. Contacto oficial: WhatsApp +56 9 3056 9940. No se puede editar Instagram desde aquí: proponer el texto para que el usuario lo pegue. Highlights sugeridos: Servicios, Casos (solo con casos reales), Tips, Contacto.

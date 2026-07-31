---
name: contenido-instagram-empulsa
description: "Genera contenido orgánico para el Instagram de Empulsa (empresa de aceleramiento de negocios: Meta Ads, Google Ads, webs, email marketing, automatizaciones): copy + diseño de posts/carruseles con la marca real de Empulsa, guiones de reels, calendario semanal, y optimización del perfil (bio, highlights). Triggers: 'hazme un post para instagram', 'necesito contenido para empulsa', 'genera un carrusel sobre X', 'dame ideas de contenido', 'hazme el calendario de esta semana', 'guion para un reel sobre Y', 'contenido para redes de empulsa', 'mejora el instagram de empulsa', 'mejora la bio', 'mejora el perfil'."
---

# Contenido Instagram — Empulsa

Genera contenido orgánico de Instagram para Empulsa (aceleramiento de negocios: Meta Ads, Google Ads, webs, email marketing, automatizaciones), con copy y diseño de marca reales, listo para publicar.

**Regla fundamental: el contenido tiene que servir para captar clientes hoy, no repetir fórmulas viejas.** No reciclar literalmente el contenido antiguo de la carpeta `Contenido Organico para Instagram+/` como plantilla de mensajes — esa carpeta es historia, no la fuente de verdad de qué funciona. Sí se reutiliza el brand kit real (logo, colores) porque eso es identidad de marca, no una decisión de contenido.

---

## Recursos de marca (ya existen, no los inventes ni regeneres)

Todo vive en `empulsa/_brand_kit/`:

- `logo.png` — logo real de Empulsa (hoja + wordmark "empulsa"), con transparencia real. Extraído de `~/Documents/EMPULSA/LOGOTIPO.png`.
- `template.html` — plantilla de post cuadrado 1080x1080: fondo degradado azul de marca, titular en blanco con tipografía redondeada bold, logo en la esquina inferior derecha.
- `render_post.js` — script de Playwright que rellena la plantilla y exporta el PNG. Uso:
  ```bash
  cd empulsa/_brand_kit
  node render_post.js "Texto del titular" "TEXTO EYEBROW OPCIONAL" "../contenido/carpeta/slide-1.png"
  ```
- `fonts/Baloo2-Variable.ttf` — tipografía redondeada bold (Google Fonts, OFL), aproximación fiel a la tipografía real de Empulsa (no se tiene el archivo de fuente oficial; si el usuario lo consigue, reemplazar aquí).

**Colores de marca (extraídos por píxel de contenido real, no inventados):**
- Azul degradado: `#003EA9` (esquina superior izquierda) → `#0053C5` (resto)
- Crema del logo: `#F9ECD8`
- Texto de titulares: blanco `#FFFFFF`

Si `empulsa/_brand_kit/` no existe (proyecto nuevo o kit compartido), avisa al usuario y pide el logo original — no lo reconstruyas a ojo desde una captura.

**Auto-instalación:** si falta Playwright, instala con `npm install playwright && npx playwright install chromium` (avisa: "preparando herramientas, tarda un momento la primera vez").

---

## Estrategia de contenido (Instagram 2026 — investigado, no supuesto)

Esto determina el formato y el enfoque de cada pieza. Si ha pasado mucho tiempo desde la última vez que se generó contenido con esta skill, vale la pena volver a buscar en la web si algo cambió antes de asumir que sigue vigente.

- **Mezcla semanal que maximiza alcance + profundidad:** ~3-4 reels, 2-3 carruseles, 1-2 posts estáticos por semana.
- **Reels** ganan en alcance (2-3x más que estático) pero premian la actualidad: publicar sobre lo que pasa esa semana, no contenido "atemporal" guardado hace meses. Terminan con una llamada a la acción concreta (comentar una palabra clave, enviar DM) — el algoritmo pondera los DMs generados mucho más que los likes.
- **Carruseles** tienen el engagement más alto y son el mejor formato para autoridad B2B: "cómo hacer X", errores comunes, mini-lecciones que la gente guarda para volver a verlas.
- **Posts estáticos** para anuncios puntuales, citas de autoridad, o momentos de marca.
- **Métrica que importa:** guardados, compartidos, visitas al perfil, DMs — no likes. El copy y el CTA deben empujar hacia guardar/compartir/comentar, no solo "dale like".
- **Contenido educativo que enseña algo real y termina ofreciendo una consulta/diagnóstico gratis por DM** rinde mejor que contenido puramente promocional.

### Los 4 pilares de contenido de Empulsa (todos activos, rotar entre ellos)

1. **Educativo / tips** — errores comunes, mini-lecciones de marketing digital (ads, web, email, automatización).
2. **Servicios propios** — presentar Meta Ads, Google Ads, creación de webs, email marketing, automatizaciones como oferta concreta, sin sonar a folleto.
3. **Casos de éxito / resultados** — resultados de clientes, métricas, antes/después (si el usuario no tiene datos reales de un caso, pregúntale — no inventes cifras ni clientes).
4. **Marca / autoridad** — opinión, tendencias del sector, cómo trabaja Empulsa por dentro.

### Tono de voz

Profesional cercano: autoridad técnica real, pero directo, sin jerga corporativa hueca ni relleno. Nada de precios ni "ofertas especiales" en el copy.

---

## Paso 0 — Optimizar el perfil (una sola vez, no en cada pieza de contenido)

Cuenta real: [instagram.com/empulsa.cl](https://www.instagram.com/empulsa.cl/) — arrancando (pocos seguidores, casi sin historial), así que el perfil en sí es tan importante como el contenido: es lo primero que ve alguien que llega desde un post o un anuncio.

**Bio:** máximo 150 caracteres, sin inventar datos que no existan (nada de "+100 clientes" si no es real). Estructura recomendada: gancho corto → qué hace Empulsa → CTA. Ejemplos listos para probar (pedirle al usuario que elija o ajuste, no imponer uno):

1. `Aceleramos negocios que quieren vender más 🚀 Webs · Ecommerce · Ads · Automatización 📩 Escríbenos`
2. `Tu negocio, más rápido 🚀 Diseñamos webs, e-commerce y campañas que sí convierten 📩 DM para diagnóstico gratis`
3. `Empresa de aceleramiento digital 🚀 Webs, e-commerce, Meta/Google Ads y automatización 📩 Hablemos`

**Link en bio:** el usuario aún no tiene una URL o WhatsApp definido para poner ahí — dejar como pendiente explícito ("falta definir el link de bio: web, WhatsApp, o un link-in-bio tipo Linktree") en vez de inventar una URL. Preguntarlo de nuevo si en una sesión futura sigue sin resolverse y ya hace falta para una campaña.

**Historias destacadas (Highlights):** con 4 categorías alcanza para empezar, alineadas a los pilares de contenido de más abajo:
- 🚀 Servicios (Webs, Ecommerce, Ads, Automatización)
- 💬 Casos (a llenar según vayan existiendo casos reales, no antes)
- 🧠 Tips (contenido educativo evergreen)
- 📩 Contacto (cómo escribir, horarios de respuesta)

**Foto de perfil:** ya resuelta — usar `empulsa/_brand_kit/logo.png` (versión limpia, sin el halo gris del archivo original).

No tocar la bio real del usuario directamente (no se puede editar Instagram desde acá) — esto es una propuesta para que el usuario la pegue manualmente. Confirmar con el usuario antes de asumir que ya la cambió.

---

## Paso 1 — Entender qué necesita el usuario

Pregunta (o infiere del mensaje) en qué modo trabajar:

- **Modo tema:** el usuario da un tema concreto ("hazme un post sobre email marketing") → generar directamente ese post.
- **Modo ideas:** el usuario pide ideas o no tiene tema claro → proponer 3-5 ideas concretas (mezclando los 4 pilares) y dejar que elija una antes de desarrollarla.
- **Modo calendario:** el usuario pide contenido de la semana/mes → generar varias piezas de una vez siguiendo la mezcla semanal (reels/carruseles/estáticos) y rotando los 4 pilares.

Si falta un dato que no se puede inventar (una cifra de un caso de éxito, un nombre de cliente, un detalle técnico específico de un servicio), pregúntalo — no lo rellenes con datos ficticios.

**Excepción — ejecución autónoma sin usuario presente (agente programado/cron):** si esta skill corre en un agente recurrente sin nadie disponible para responder, no te quedes bloqueado. Reemplaza la pieza que necesitaba ese dato por contenido educativo o de servicios (los pilares que nunca dependen de datos externos), tal como se hizo la primera semana cuando no había un caso de éxito con métricas todavía. Deja constancia en el resumen final de qué pieza se sustituyó y por qué, para que el usuario lo revise cuando vuelva a interactuar.

---

## Paso 2 — Elegir formato y escribir el contenido

Según el tema y el pilar, decide el formato (reel, carrusel o estático) siguiendo la mezcla de la sección anterior.

**Para reels:** escribe un guion corto con: Hook (primeros 2 segundos, la razón para no hacer scroll), Desarrollo (2-4 puntos concretos), CTA (comentar palabra clave o enviar DM). No hace falta generar video ni imagen, solo el guion en texto — opcionalmente una imagen de portada con `render_post.js`.

**Para carruseles:** escribe un titular de portada + una idea por slide (numeradas si aplica) + slide de cierre con CTA suave. 4-7 slides típico.

**Para estáticos:** un titular único, contundente, statement-style.

Siempre acompaña con:
- **Caption** completo para el pie de Instagram (gancho en la primera línea, desarrollo breve, CTA hacia guardar/compartir/comentar/DM).
- **Hashtags** relevantes (5-10, mezcla de nicho + genéricos de marketing digital).

No incluyas datos de contacto (web, WhatsApp, teléfono) en el copy salvo que el usuario lo pida explícitamente en esa sesión.

---

## Paso 3 — Generar el diseño visual (carruseles y estáticos)

Para cada slide, ejecuta desde `empulsa/_brand_kit/`:

```bash
node render_post.js "<titular del slide>" "<eyebrow opcional, ej. EMPULSA o el número/categoría>" "<ruta de salida>.png"
```

- Guarda las imágenes en la carpeta del post (ver Paso 4).
- Revisa el PNG generado (ábrelo) antes de darlo por bueno: confirma que el texto no se corta y que cabe bien en el cuadro de 1080x1080. Si el titular es muy largo, acórtalo — la plantilla no reduce el tamaño de fuente automáticamente.
- Los reels no necesitan render salvo que el usuario quiera una portada.

---

## Paso 4 — Guardar y presentar

Estructura de carpetas en `empulsa/contenido/`:

- Post individual: `empulsa/contenido/YYYY-MM-DD-tema-slug/` con `caption.txt` (copy + hashtags), `slide-1.png`, `slide-2.png`... (o `guion.md` si es reel).
- Modo calendario: `empulsa/contenido/semana-YYYY-MM-DD/` con una subcarpeta por pieza, nombradas con el día y el pilar (ej. `lunes-reel-educativo/`, `martes-carrusel-servicios/`).

Al terminar, resume:
1. Qué se generó (formato, pilar, cuántas piezas).
2. Dónde quedaron guardados los archivos.
3. Qué datos faltaron y tuviste que preguntar (o qué quedó pendiente porque el usuario no lo tenía a mano).
4. Si quiere ajustar el titular, el copy, o generar la siguiente pieza.

No incluyas precios ni consejos de venta en el resumen.

---

## Paso 5 — Programar publicación automática (GoHighLevel)

Empulsa ya tiene GoHighLevel (GHL) con Instagram conectado. En vez de armar hosting de imágenes propio o pasar por la Graph API de Meta directamente, se usa la **Social Media Posting API de GHL** (`services.leadconnectorhq.com`), que ya resuelve el hosting de la imagen (Media Storage propio) y la conexión con Instagram.

Script: `empulsa/_brand_kit/ghl_publish.js` (usa `fetch`/`FormData` nativos de Node, no necesita dependencias nuevas).

### Configuración (una sola vez)

1. **Crear un Private Integration Token** en la subcuenta de Empulsa en GHL: Configuración de la subcuenta → *Integraciones privadas* → *Crear nueva integración* → activar los scopes `medias.write`, `socialplanner/account.readonly`, `socialplanner/post.write` → generar y copiar el token (solo se muestra una vez).
2. Copiar `empulsa/_brand_kit/.env.example` como `.env` y completar `GHL_PRIVATE_TOKEN` y `GHL_LOCATION_ID` (el locationId aparece en la URL del panel de la subcuenta).
3. Ejecutar `node ghl_publish.js --list-accounts` desde `empulsa/_brand_kit/` — es de solo lectura, no publica nada. Buscar en el resultado la cuenta de Instagram y copiar su `id` a `GHL_IG_ACCOUNT_ID` en `.env`.
4. **Nunca** subir `.env` a git ni compartirlo — contiene credenciales reales de la cuenta.

### Uso (por cada pieza de contenido)

```bash
cd empulsa/_brand_kit
node ghl_publish.js --schedule "../contenido/2026-08-03-tema/slide-1.png" "../contenido/2026-08-03-tema/caption.txt" "2026-08-03T08:00:00-04:00"
```

Esto sube la imagen al Media Storage de GHL y programa el post en Instagram para esa fecha/hora exacta (ajustar el offset de zona horaria del usuario, GHL usa ISO 8601).

**Antes de programar contenido real:**
- Confirmar con el usuario la fecha/hora de cada post contra el calendario acordado (Paso 1-4).
- Si la API devuelve error pidiendo `userId`, obtenerlo con la Get User API de GHL y agregarlo a `.env` como `GHL_USER_ID` (algunos tipos de token lo requieren para posts no-draft).
- Programar (`status: scheduled`) es reversible desde el panel de GHL; nunca uses `status: published` para probar — usa `scheduled` con fecha futura o revisa primero en modo `draft`.
- Esto publica en la cuenta de Instagram real de Empulsa — confirmar con el usuario antes de ejecutar `--schedule` la primera vez, y avisar qué se programó y para cuándo.

# Notas — Semana 2026-10-19

Generado de forma autónoma (agente programado, sin usuario presente para resolver dudas).

## Cálculo de la semana

Hoy (fecha del sistema al generar) es 2026-10-05, un lunes. La semana actual (2026-10-05 a 2026-10-11) y la siguiente (2026-10-12 a 2026-10-18) ya tenían contenido generado en el repo (la última carpeta existente era `semana-2026-10-12`). Siguiendo la regla de no regenerar semanas existentes, esta tanda corresponde a la semana siguiente a esa última carpeta: **semana-2026-10-19** (lunes 19 a domingo 25 de octubre de 2026).

## Mezcla semanal

Sigue vigente el sistema de formatos creativos descrito en la skill actual (editorial, whatsapp, boleta, tierlist, buscador, carta). **5 piezas, lunes a viernes, ninguna reel, sin fin de semana** (el sábado es el día más flojo y las piezas de fin de semana requieren imágenes manuales de Flow que este agente no genera).

| Día | Formato | Situación | Pilar / servicio |
|---|---|---|---|
| Lunes 19 | editorial | Las mismas tres preguntas (horario, despacho, ubicación) contestadas una y otra vez, hasta que un agente de IA las responde con el guion del negocio | Servicios: agente de IA de atención |
| Martes 20 | tierlist | Tier list de cómo responde un negocio sus mensajes, de "responde en minutos con precio y horario" a "el mensaje queda en visto" | Educativo / servicios: atención y CRM |
| Miércoles 21 | editorial | Un papelito, una libreta, la memoria de una sola persona: así se pierden clientes, hasta que el CRM ordena todo en un lugar | Servicios: CRM a medida |
| Jueves 22 | buscador | Le recomendaron un negocio (panadería de ejemplo), buscó el nombre exacto y solo encontró una publicación de Facebook de hace dos años | Servicios: web y SEO |
| Viernes 23 | carta | Para quien contesta los comentarios con su propio celular antes de dormir: pieza de marca, sin CTA | Marca |

Dos piezas (lunes y miércoles) son del formato `editorial` y hablan directamente del agente de IA y del CRM, cumpliendo la regla de la skill de que al menos 2 de las 5 piezas semanales sean editorial o hablen de ese diferencial. Orden de formatos en los días fuertes (lunes, miércoles, jueves): editorial, editorial, buscador — distinto del orden de la semana anterior (whatsapp, boleta, buscador en `semana-2026-10-12`), que no usó editorial ninguna vez.

## Pilar "Casos de éxito / resultados" sustituido

No hay datos reales de clientes disponibles en el repo para armar una pieza de casos de éxito con cifras o nombres reales, y la skill prohíbe inventarlos. Las 5 piezas de esta semana se repartieron entre los pilares educativo, servicios y marca, con ejemplos ilustrativos (dominio `.example`) cuando hizo falta un nombre o rubro ficticio, tal como indica la excepción de ejecución autónoma.

## Revisión de temas anteriores

Se revisaron los `NOTAS.md` de las 11 semanas anteriores (08-03 a 10-12) y de los posts sueltos (2026-07-30, 2026-08-11) antes de elegir los ángulos de esta semana, para no repetir lo ya publicado. En particular, de las piezas con formatos creativos (semanas 09-28 en adelante) ya se usaron: agencia que solo habla de impresiones (whatsapp), tier list de la web de una pyme, tier list del Instagram de una pyme, boleta de no tener web, boleta de no medir anuncios, buscador de búsqueda de emergencia por categoría (gásfiter, pastelería), carta de quien atiende y sube las historias, carta de quien revisa los anuncios antes de desayunar, editorial de CRM (cliente que se enfría) y editorial de email marketing. Para esta semana se evitaron esos ángulos exactos: el tierlist de esta semana es sobre la calidad de respuesta a mensajes (no sobre la web ni el Instagram), el buscador es sobre una búsqueda por nombre de marca (no por categoría ni de emergencia), el editorial de CRM usa la situación de los papelitos y la memoria (no la de clientes que se enfrían sin seguimiento) y el editorial de agente de IA se enfoca en preguntas repetidas (horario, despacho, ubicación), un ángulo nuevo.

## Horario de publicación (offset de Chile)

Toda la semana del 19 al 23 de octubre de 2026 cae en horario de verano de Chile (`America/Santiago`), así que el manifest usa `-03:00` para los 5 días.

## Nota técnica: generación de imágenes en este entorno

`npx playwright install chromium` falló en este entorno porque el proxy de red no permite acceder a `cdn.playwright.dev`. El sandbox ya trae un Chromium funcional preinstalado en `/opt/pw-browsers/chromium` (variable `PLAYWRIGHT_BROWSERS_PATH`), pero con una revisión distinta a la que espera el Playwright de este proyecto (1.62.1), que busca `chromium_headless_shell-1234` y no la encuentra. Se generaron las imágenes igual, apuntando `chromium.launch()` a ese ejecutable preinstalado mediante un pequeño script de precarga (`node -r <shim>`) que no modifica ningún archivo del repo. No fue necesario tocar `render_formato.js`; en el computador del usuario, con `npx playwright install chromium` funcionando normalmente, no hace falta este rodeo.

## Otros pendientes ya conocidos (no resueltos esta semana, no bloquean el contenido)

- Bio de Instagram: sigue sin confirmarse cuál de las 3 opciones propuestas se usó.
- Link en bio: sigue sin definirse (web, WhatsApp o link-in-bio).
- Highlights: sin confirmar si ya se armaron en la cuenta real.
- Caso de éxito real: si ya existe uno para publicar, avisarlo para generar esa pieza en una próxima semana o como contenido adicional.

## Publicación

No se ejecutó `ghl_publish.js` ni ningún otro script de publicación, y no se programó ni publicó nada en GoHighLevel ni en ninguna otra plataforma. El contenido queda listo en GitHub para que la Ingesta de Make lo tome y lo publique automáticamente según el manifest.

# Notas — Semana 2026-10-26

Generado de forma autónoma (agente programado, sin usuario presente para resolver dudas).

## Cálculo de la semana

La fecha del sistema al generar es 2026-10-12. La última carpeta `semana-YYYY-MM-DD` que ya existía en el repo es `semana-2026-10-19` (lunes 19 a domingo 25 de octubre). Siguiendo la regla de no regenerar semanas existentes, esta tanda corresponde a la semana siguiente a esa última carpeta: **semana-2026-10-26** (lunes 26 de octubre a domingo 1 de noviembre de 2026).

## Mezcla semanal

Sigue vigente el sistema de formatos creativos de la skill actual (editorial, whatsapp, boleta, tierlist, buscador, carta). **5 piezas, lunes a viernes, ninguna reel, sin fin de semana** (el sábado es el día más flojo y las piezas de fin de semana requieren imágenes manuales de Flow que este agente no genera).

| Día | Formato | Situación | Pilar / servicio |
|---|---|---|---|
| Lunes 26 | boleta | Lo que cuesta no tener email marketing: carritos abandonados, compras únicas sin seguimiento, cumpleaños sin saludo | Servicios: email marketing |
| Martes 27 | tierlist | Tier list de los correos que un negocio le manda a sus clientes, de "bienvenida y carrito abandonado automáticos" a "nunca les escribes después de que compran" | Educativo / servicios: email marketing |
| Miércoles 28 | editorial | Una pregunta por un anuncio de Meta Ads que nadie responde a tiempo y la lead se enfría, hasta que un agente de IA responde al instante y la lead queda ordenada en el CRM | Servicios: Meta Ads, agente de IA, CRM |
| Jueves 29 | editorial | Un cliente que pide cambiar su hora y nadie contesta, hasta que un agente de IA reprograma al instante y el cambio queda registrado en el CRM, para que no termine en una inasistencia | Servicios: agente de IA, CRM |
| Viernes 30 | carta | Para quien revisa el WhatsApp del negocio antes del primer café: pieza de marca, sin CTA | Marca |

Dos piezas (miércoles y jueves) son del formato `editorial` y hablan directamente del agente de IA y del CRM, cumpliendo la regla de la skill de que al menos 2 de las 5 piezas semanales sean editorial o hablen de ese diferencial. Orden de formatos en los días fuertes (lunes, miércoles, jueves): boleta, editorial, editorial, distinto del orden de las dos semanas anteriores (whatsapp/boleta/buscador en `semana-2026-10-12`, editorial/editorial/buscador en `semana-2026-10-19`, con editorial en lunes y miércoles). Esta semana además estrena el ángulo de email marketing en los formatos creativos (boleta y tierlist), un servicio que hasta ahora solo había aparecido en semanas con el sistema antiguo (previo a `semana-2026-09-28`).

## Pilar "Casos de éxito / resultados" sustituido

No hay datos reales de clientes disponibles en el repo para armar una pieza de casos de éxito con cifras o nombres reales, y la skill prohíbe inventarlos. Las 5 piezas de esta semana se repartieron entre los pilares educativo, servicios y marca, con la nota "Ejemplo ilustrativo" en los tableros de CRM de las piezas `editorial` que usan nombres o situaciones ficticias.

## Revisión de temas anteriores

Se revisaron los `NOTAS.md` de las 12 semanas anteriores (08-03 a 10-19) y de los posts sueltos (2026-07-30, 2026-08-11) antes de elegir los ángulos de esta semana, para no repetir lo ya publicado. En particular, de las piezas con formatos creativos (semanas 09-28 en adelante) ya se usaron: agencia que solo habla de impresiones (whatsapp), tier list de la web de una pyme, tier list del Instagram de una pyme, tier list de cómo se responden los mensajes, boleta de no tener web, boleta de no medir los anuncios, buscador de búsqueda de emergencia por categoría, buscador de búsqueda por nombre de marca, carta de quien atiende y sube las historias, carta de quien revisa los anuncios antes de desayunar, carta de quien contesta comentarios antes de dormir, editorial de CRM (cliente que se enfría, papelitos y memoria), editorial de agente de IA (preguntas repetidas de horario/despacho/ubicación) y editorial de email marketing. Para esta semana se evitaron esos ángulos exactos: el boleta y el tierlist de esta semana son sobre email marketing específicamente (ángulo nuevo dentro de los formatos creativos), el editorial del miércoles usa la situación de una lead de Meta Ads que se enfría por falta de respuesta (no la de clientes que escriben de noche ni la de papelitos), el editorial del jueves usa la situación de reprogramar una hora (ángulo nuevo, ligado a inasistencias) y la carta del viernes usa la situación de revisar el WhatsApp antes del primer café (distinta de "antes de desayunar" y "antes de dormir", ya usadas).

## Horario de publicación (offset de Chile)

Toda la semana del 26 de octubre al 1 de noviembre de 2026 cae en horario de verano de Chile (`America/Santiago`, vigente desde el 6 de septiembre de 2026 hasta abril de 2027), así que el manifest usa `-03:00` para los 5 días, igual que las semanas anteriores desde 09-14.

## Nota técnica: generación de imágenes en este entorno

Igual que en `semana-2026-10-19`, `npx playwright install chromium` falló en este entorno porque el proxy de red no permite acceder a `cdn.playwright.dev` (error 403 "request blocked"). El sandbox trae un Chromium funcional preinstalado en `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` (variable `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`), pero con una revisión distinta a la que espera el Playwright de este proyecto (busca la build `chromium_headless_shell-1234` y no la encuentra). Se generaron las imágenes apuntando `chromium.launch()` a ese ejecutable preinstalado mediante un pequeño script de precarga (`node -r <shim>.js`) guardado en el scratchpad de la sesión, que no modifica ningún archivo del repo. No fue necesario tocar `render_formato.js`; en el computador del usuario, con `npx playwright install chromium` funcionando normalmente, no hace falta este rodeo.

Al revisar visualmente cada slide se detectó un problema de layout en el slide 3 del jueves (`editorial`): el titular `[[queda registrado en tu CRM]]` cortaba la palabra "queda" justo en el salto de línea dentro del marcador amarillo, dejándola parcialmente tapada. Se corrigió moviendo "queda" fuera del marcador (`"Y el cambio queda [[registrado en tu CRM]]"`) y se volvió a generar esa pieza; el resto de los slides de esa carpeta no cambiaron. Las demás 18 imágenes se revisaron una por una y no mostraron texto cortado, tildes incorrectas ni elementos tapados por el sello o el código de barras.

## Otros pendientes ya conocidos (no resueltos esta semana, no bloquean el contenido)

- Bio de Instagram: sigue sin confirmarse cuál de las 3 opciones propuestas se usó.
- Link en bio: sigue sin definirse (web, WhatsApp o link-in-bio).
- Highlights: sin confirmar si ya se armaron en la cuenta real.
- Caso de éxito real: si ya existe uno para publicar, avisarlo para generar esa pieza en una próxima semana o como contenido adicional.

## Publicación

No se ejecutó `ghl_publish.js` ni ningún otro script de publicación, y no se programó ni publicó nada en GoHighLevel ni en ninguna otra plataforma. El contenido queda listo en GitHub para que la Ingesta de Make lo tome y lo publique automáticamente según el manifest.

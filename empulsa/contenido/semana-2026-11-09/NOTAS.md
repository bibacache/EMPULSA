# Semana 2026-11-09 (generada en modo autónomo)

Última carpeta existente antes de esta corrida: `semana-2026-11-02`. Esta semana corresponde al lunes siguiente (9 al 15 de noviembre de 2026).

## Formatos y rotación (regla de los 10 días)

Formatos usados en las tres semanas previas con su fecha más reciente: editorial (28 oct), quiz (7 nov), timeline (5 nov), buscador (31 oct), carta (3 nov), boleta (8 nov), tierlist (27 oct), mito (29 oct), whatsapp (2 nov), antesdespues (4 nov), nota (1 nov), email (6 nov).

Por la regla de no repetir un formato antes de 10 días, al 9 de noviembre solo estaban disponibles de entrada `editorial` (12 días desde el 28 oct), `tierlist` (13 días desde el 27 oct) y `mito` (11 días desde el 29 oct). El resto de los formatos se fue habilitando día a día conforme pasaban los 10 días desde su último uso: `buscador` desde el 10 nov, `nota` desde el 11 nov, `whatsapp` desde el 12 nov, `carta` desde el 13 nov, `antesdespues` desde el 14 nov. `email`, `quiz` y `boleta` no alcanzaban los 10 días dentro de esta semana (su último uso fue el 6, 7 y 8 de noviembre), así que se descartaron por completo.

Con esas fechas de disponibilidad se armó la semana completa (7 piezas, lunes a domingo) sin repetir ningún formato y sin que dos piezas seguidas compartan fondo (oscuro/claro) ni dinámica:

- Lun 9: `tierlist`, Meta Ads (tier list de tus anuncios). Fondo oscuro, dinámica jugar. Cierra con CTA.
- Mar 10: `editorial`, CRM (clientes que ya compraron y vuelven a escribir, con bloque de pipeline y de canales). Fondo claro, dinámica explicar. Cierra con CTA.
- Mié 11: `mito`, agente de IA (dos creencias nuevas, distintas a las del 29 de octubre). Fondo oscuro, dinámica desmentir. Cierra con CTA.
- Jue 12: `buscador`, web y SEO (una urgencia de gasfitería a las 22:00, rubro y situación nuevos). Fondo claro, dinámica mostrar. Cierra con CTA.
- Vie 13: `carta`, marca (un día de pocas ventas, sin culpa). Fondo oscuro, dinámica emoción. Sin CTA ni teléfono, como corresponde al formato.
- Sáb 14: `whatsapp`, CRM (varios chats a la vez y uno que se pierde en el mix, ángulo distinto al de "se te pasó" u "hora del día" ya usados). Fondo claro, dinámica historia. Cierra con CTA.
- Dom 15: `antesdespues`, email marketing (carrito abandonado y correos genéricos vs. personalizados, ángulo distinto al de "compró una vez" del 25 de octubre). Fondo oscuro, dinámica comparar. Cierra con pregunta para comentarios, sin botón de WhatsApp en la imagen (el WhatsApp sí va en el caption, como indica la skill).

## Variedad y reglas cumplidas

- Ningún formato se repite; `editorial` se usó solo 1 vez (dentro del máximo de 2).
- Dos piezas seguidas nunca comparten fondo: la semana alterna oscuro/claro/oscuro/claro/oscuro/claro/oscuro-verde.
- Dos piezas seguidas nunca comparten dinámica (jugar, explicar, desmentir, mostrar, emoción, historia, comparar: las 7 son distintas).
- Al menos 2 de las 5 piezas de lunes a viernes hablan directamente de CRM o agente de IA: el editorial del martes (CRM) y el mito del miércoles (agente de IA).
- Al menos 2 de las 7 piezas cierran sin botón de WhatsApp en la imagen: la carta del viernes (nunca lleva CTA) y el antesdespués del domingo (cierre con pregunta).
- Los 5 servicios reales de Empulsa quedan representados: Meta Ads (lunes), CRM (martes y sábado), agente de IA (miércoles), web y SEO (jueves), email marketing (domingo); la carta del viernes es de marca, sin servicio específico.
- No se mencionó Google Ads ni "automatizaciones" genéricas en ninguna pieza.
- Se revisó cada `spec.json` contra semanas anteriores para no repetir ángulos: se evitaron las situaciones ya publicadas (preguntas repetidas al agente de IA, leads de Meta Ads sin CRM, "se te pasó la cotización", buscar el nombre del negocio, cliente que compró una vez) y se usaron situaciones, rubros y nombres ficticios nuevos.

## Pilares

Se rotaron los pilares educativo y servicios en todas las piezas (explicando cómo funciona cada servicio a partir de una situación concreta) más una pieza de marca (la carta del viernes). No hubo ninguna pieza de "casos de éxito": como se indica abajo, no hay datos reales de clientes para armar un caso, así que esa categoría se sustituyó completa por piezas educativas y de servicios, igual que en las semanas anteriores.

## Qué se sustituyó y por qué (excepción de ejecución autónoma)

No existen datos reales de clientes, cifras ni resultados de campañas para construir un pilar de "casos de éxito" verificable, y esta corrida es autónoma (sin nadie presente para aportar un caso real). Por eso, siguiendo la excepción de la skill, el pilar de casos se sustituyó en las 7 piezas por contenido educativo y de servicios, con situaciones de ejemplo explícitamente marcadas como ficticias: nombres inventados (Constanza, Benjamín, Ignacia, Tomás, Sofía), negocios con dominios `.example`, y la nota "Ejemplo ilustrativo" en el bloque de pipeline del editorial del martes. No se inventó ninguna cifra, testimonio ni resultado real.

## Ajuste de entorno (no afecta el contenido)

`package.json` pasó de `playwright@^1.62.0` a `^1.63.0`: la versión anterior buscaba una revisión de Chromium distinta a la que ya está preinstalada en este entorno (`/opt/pw-browsers`), lo que impedía renderizar las imágenes. Se actualizó la dependencia para que coincida con el navegador ya disponible; no se tocó ningún archivo de contenido ni el renderizador.

## Publicación

No se ejecutó `ghl_publish.js` ni se programó ni publicó nada directamente: las 7 piezas quedan en `empulsa/contenido/semana-2026-11-09/` con sus `spec.json`, `slide-N.jpg` y `caption.txt`, y el `manifest.json` de la semana queda listo en GitHub (rama `main`) para que la Ingesta y el Publicador de Make lo tomen en su próxima ejecución.

# Semana 2026-11-16 (generada en modo autónomo)

Última carpeta existente antes de esta corrida: `semana-2026-11-09`. Esta semana corresponde al lunes siguiente (16 al 22 de noviembre de 2026).

## Formatos y rotación (regla de los 10 días)

Se revisaron los `manifest.json`/`NOTAS.md` de las semanas `2026-10-19`, `2026-10-26`, `2026-11-02` y `2026-11-09` para calcular el último uso de cada formato: tierlist 9 nov, editorial 10 nov, mito 11 nov, buscador 12 nov, carta 13 nov, whatsapp 14 nov, antesdespues 15 nov, quiz 7 nov, boleta 8 nov, timeline 5 nov, email 6 nov, nota 1 nov.

Por la regla de no repetir un formato antes de 10 días, `whatsapp`, `carta` y `antesdespues` quedan completamente fuera de esta semana (disponibles recién el 24, 23 y 25 de noviembre). El resto se fue habilitando día a día: 16 nov → `email`, `timeline`, `nota`; 17 nov → se suma `quiz`; 18 nov → `boleta`; 19 nov → `tierlist`; 20 nov → `editorial`; 21 nov → `mito`; 22 nov → `buscador`. De los 9 formatos disponibles en algún momento de la semana se usaron 7 (se dejaron fuera `quiz` y `tierlist`, que vuelven a estar disponibles para la próxima semana sin problema):

- Lun 16: `email`, email marketing (bienvenida tras la primera compra). Fondo claro, dinámica mostrar. Cierra con CTA.
- Mar 17: `timeline`, CRM (mantención de taller mecánico, sin seguimiento vs. con recordatorio automático). Fondo oscuro, dinámica historia. Cierra con pregunta, sin botón de WhatsApp en la imagen.
- Mié 18: `nota`, checklist multiservicio de mitad de semana (ángulo distinto al de la nota del 1 de noviembre, que era "antes del lunes" en domingo). Fondo claro, dinámica reflexionar. Cierra con CTA.
- Jue 19: `boleta`, Meta Ads (primera vez que boleta se usa para este servicio; costo de anuncios sin objetivo ni seguimiento). Fondo oscuro, dinámica mostrar. Cierra con CTA.
- Vie 20: `editorial`, agente de IA (urgencia de mascota a las 22:40, veterinaria ficticia, formato chat-chat-lista-cta). Fondo claro, dinámica explicar. Cierra con CTA.
- Sáb 21: `mito`, web y SEO (primera vez que mito se usa para este servicio; mitos sobre Google Maps y sobre los tiempos del SEO). Fondo oscuro, dinámica desmentir. Cierra con pregunta, sin botón de WhatsApp en la imagen.
- Dom 22: `buscador`, web y SEO (rubro nuevo: clases de yoga). Fondo claro, dinámica mostrar. Cierra con CTA.

## Variedad y reglas cumplidas

- Ningún formato se repite.
- Fondos alternados sin dos iguales seguidos: claro, oscuro, claro, oscuro, claro, oscuro, claro.
- Dinámicas sin repetirse en días consecutivos: mostrar, historia, reflexionar, mostrar, explicar, desmentir, mostrar (los tres "mostrar" nunca quedan adyacentes).
- Al menos 2 de las 5 piezas de lunes a viernes hablan directamente de CRM o agente de IA: el timeline del martes (CRM) y el editorial del viernes (agente de IA).
- Al menos 2 de las 7 piezas cierran sin botón de WhatsApp en la imagen (el WhatsApp va solo en el caption): el timeline del martes y el mito del sábado.
- Los 5 servicios reales de Empulsa quedan representados: email marketing (lunes), CRM (martes), Meta Ads (jueves), agente de IA (viernes), web y SEO (sábado y domingo); el nota del miércoles toca los cinco servicios a la vez como checklist educativo.
- No se mencionó Google Ads en ninguna pieza.
- Se revisó cada `spec.json` contra semanas anteriores para no repetir ángulos: nombres nuevos (Antonia, Cristóbal), negocios ficticios nuevos con dominio `.example` (Vivero Las Encinas, Taller Mecánico Ruta 5, Veterinaria Patitas Felices, Estudio de Yoga Respira), y situaciones nuevas (bienvenida de email, mantención de taller, chequeo de mitad de semana, anuncio sin objetivo, urgencia de mascota, mitos de web/SEO, búsqueda de clases de yoga) distintas a las ya publicadas.

## Pilares

Se rotaron los pilares educativo y servicios en las 7 piezas (cada una explica un servicio a partir de una situación concreta, o hace un chequeo educativo como el nota del miércoles). No hubo ninguna pieza de "casos de éxito": no existen datos reales de clientes para armar un caso verificable, y esta corrida es autónoma. Por eso, siguiendo la excepción de la skill, ese pilar se sustituyó por contenido educativo y de servicios en todas las piezas, igual que en las semanas anteriores.

## Qué se sustituyó y por qué (excepción de ejecución autónoma)

No existen datos reales de clientes, cifras ni resultados de campañas para construir un pilar de "casos de éxito" verificable, y esta corrida es autónoma (sin nadie presente para aportar un caso real). Por eso el pilar de casos se sustituyó en las 7 piezas por contenido educativo y de servicios, con situaciones de ejemplo explícitamente marcadas como ficticias: nombres inventados (Antonia, Cristóbal), negocios con dominios `.example`, y la nota "Ejemplo ilustrativo" en el correo del lunes y en ambos slides del timeline del martes. No se inventó ninguna cifra, testimonio ni resultado real.

## Corrección durante la generación

En el slide 1 de la boleta del jueves, el campo `meta` con el valor "el algoritmo, no tu negocio" se superponía visualmente con la etiqueta "Atendió" por quedar demasiado largo para una sola línea (el renderizador no mostró `AVISO`, pero al revisar la imagen se veía el texto pegado). Se acortó a "el algoritmo" y se volvió a generar esa pieza; el resto de las imágenes se revisó una por una sin encontrar más problemas.

## Publicación

No se ejecutó `ghl_publish.js` ni se programó ni publicó nada directamente: las 7 piezas quedan en `empulsa/contenido/semana-2026-11-16/` con sus `spec.json`, `slide-N.jpg` y `caption.txt`, y el `manifest.json` de la semana queda listo en GitHub (rama `main`) para que la Ingesta y el Publicador de Make lo tomen en su próxima ejecución.

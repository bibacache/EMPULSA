# Semana 2026-11-23 (generada en modo autónomo)

Última carpeta existente antes de esta corrida: `semana-2026-11-16`. Esta semana corresponde al lunes siguiente (23 al 29 de noviembre de 2026).

## Formatos y rotación (regla de los 10 días)

Se revisaron los `manifest.json`/`NOTAS.md` de las semanas `2026-11-02`, `2026-11-09` y `2026-11-16` para calcular el último uso de cada formato: tierlist 9 nov, editorial 20 nov, mito 21 nov, buscador 22 nov, carta 13 nov, whatsapp 14 nov, antesdespues 15 nov, email 16 nov, timeline 17 nov, nota 18 nov, boleta 19 nov, quiz 7 nov.

Por la regla de no repetir un formato antes de 10 días, `editorial` (disponible recién el 30 nov), `mito` (1 dic) y `buscador` (2 dic) quedan completamente fuera de esta semana. El resto se fue habilitando así: `tierlist` y `quiz` ya estaban disponibles desde el 19 y el 17 de noviembre; `carta` se habilita justo el 23 nov; `whatsapp` el 24 nov; `antesdespues` el 25 nov; `email` el 26 nov; `timeline` el 27 nov; `nota` el 28 nov; `boleta` el 29 nov. Con 9 formatos disponibles en algún momento de la semana se usaron 7 (se dejaron fuera `quiz` y `carta`, que vuelven a estar disponibles sin problema la próxima semana):

- Lun 23: `tierlist`, CRM (dónde guardas los datos de tus clientes, ángulo nuevo: no se había hecho tierlist de almacenamiento/orden de datos, los tierlist anteriores fueron de anuncios y de redes). Fondo oscuro, dinámica jugar. Cierra con CTA.
- Mar 24: `whatsapp`, agente de IA (un cliente escribe tres veces un domingo a la noche y recién se le responde 17 minutos después). Fondo claro, dinámica historia. Cierra con CTA.
- Mié 25: `antesdespues`, web y SEO (primera vez que este formato se usa para web y SEO; antes y después de aparecer en Google, de día y a las 23:00). Fondo oscuro, dinámica comparar. Cierra con pregunta, sin botón de WhatsApp en la imagen.
- Jue 26: `email`, email marketing (correo de recordatorio de recompra para una clienta de peluquería, ángulo distinto a bienvenida del 16 nov y reactivación del 6 nov). Fondo claro, dinámica mostrar. Cierra con CTA.
- Vie 27: `timeline`, Meta Ads (primera vez que timeline se usa para Meta Ads; un lead del anuncio con y sin seguimiento en las primeras horas). Fondo oscuro, dinámica historia. Cierra con CTA.
- Sáb 28: `nota`, checklist de fin de semana (ángulo distinto a los anteriores del 1 y 18 de noviembre, que eran de domingo y de mitad de semana; este cierra con una idea → solución igual que el del 18 nov pero con contenido nuevo). Fondo claro, dinámica reflexionar. Cierra con pregunta, sin botón de WhatsApp en la imagen.
- Dom 29: `boleta`, agente de IA (lo que cuesta no responder los mensajes del fin de semana, ángulo distinto al de boleta del 8 nov que era sobre atender mensajes a mano en general). Fondo oscuro con cierre en fondo claro (igual que las boletas anteriores), dinámica mostrar. Cierra con CTA.

## Variedad y reglas cumplidas

- Ningún formato se repite.
- Fondos alternados sin dos iguales seguidos: oscuro, claro, oscuro, claro, oscuro, claro, oscuro.
- Dinámicas sin repetirse en días consecutivos: jugar, historia, comparar, mostrar, historia, reflexionar, mostrar (los dos "historia" y los dos "mostrar" nunca quedan adyacentes).
- Al menos 2 de las 7 piezas hablan directamente de CRM o agente de IA (no hubo `editorial` disponible esta semana): el tierlist del lunes (CRM), el whatsapp del martes (agente de IA) y la boleta del domingo (agente de IA).
- Al menos 2 de las 7 piezas cierran sin botón de WhatsApp en la imagen (el WhatsApp va solo en el caption): el antesdespués del miércoles y el nota del sábado.
- Los 5 servicios reales de Empulsa quedan representados: CRM (lunes), agente de IA (martes y domingo), web y SEO (miércoles), email marketing (jueves), Meta Ads (viernes); el nota del sábado es un chequeo educativo que toca los cinco servicios a la vez.
- No se mencionó Google Ads en ninguna pieza.
- Se revisó cada `spec.json` contra semanas anteriores para no repetir ángulos: nombre ficticio nuevo (Javiera), negocio ficticio nuevo con dominio implícito (Rizos y Ondas, peluquería), y situaciones nuevas (dónde se guardan los datos de clientes, cliente que escribe tres veces un domingo, web antes y después en Google, recordatorio de recompra de peluquería, lead de Meta Ads con y sin seguimiento, checklist de fin de semana, costo de no responder el fin de semana).

## Corrección durante la generación

En el carrusel de whatsapp del martes, el primer borrador decía en el banner "Tres personas preguntan a la vez" pero el formato `whatsapp` solo puede mostrar un chat con un contacto, así que las tres preguntas se veían como de una sola persona. Se corrigió el guion a "Un cliente escribe tres veces" para que el texto calzara con lo que muestra la imagen, y se ajustó también la nota y el título del CTA. Se volvió a generar esa pieza completa; el resto de las imágenes se revisó una por una sin encontrar más problemas ni avisos de texto cortado.

## Pilares

Se rotaron los pilares educativo y servicios en las 7 piezas (cada una explica un servicio a partir de una situación concreta, o hace un chequeo educativo como el nota del sábado). No hubo ninguna pieza de "casos de éxito": no existen datos reales de clientes para armar un caso verificable, y esta corrida es autónoma. Por eso, siguiendo la excepción de la skill, ese pilar se sustituyó por contenido educativo y de servicios en todas las piezas, igual que en las semanas anteriores.

## Qué se sustituyó y por qué (excepción de ejecución autónoma)

No existen datos reales de clientes, cifras ni resultados de campañas para construir un pilar de "casos de éxito" verificable, y esta corrida es autónoma (sin nadie presente para aportar un caso real). Por eso el pilar de casos se sustituyó en las 7 piezas por contenido educativo y de servicios, con situaciones de ejemplo explícitamente marcadas como ficticias cuando corresponde: nombre inventado (Javiera), negocio ficticio (Rizos y Ondas), y la nota "Ejemplo ilustrativo" en el correo del jueves y en ambos slides del timeline del viernes. No se inventó ninguna cifra, testimonio ni resultado real.

## Nota sobre el estado del repositorio al iniciar esta corrida

Al comenzar esta ejecución, el `HEAD` local estaba separado (`detached HEAD`) un commit por delante de la rama `main` local, con el contenido completo de `semana-2026-11-16` ya generado por una corrida anterior pero sin fusionar en `main`. Al hacer `git fetch`, se confirmó que ese commit ya estaba en `origin/main` (otra ejecución ya lo había subido). Se restableció la rama local `main` para que siguiera a `origin/main` antes de empezar a generar esta semana, sin perder ni duplicar contenido.

## Publicación

No se ejecutó `ghl_publish.js` ni se programó ni publicó nada directamente: las 7 piezas quedan en `empulsa/contenido/semana-2026-11-23/` con sus `spec.json`, `slide-N.jpg` y `caption.txt`, y el `manifest.json` de la semana queda listo en GitHub (rama `main`) para que la Ingesta y el Publicador de Make lo tomen en su próxima ejecución.

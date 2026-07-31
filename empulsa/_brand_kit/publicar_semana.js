// Programa en un solo comando TODAS las piezas listas para publicar de una semana
// generada por la skill contenido-instagram-empulsa (carpeta empulsa/contenido/semana-YYYY-MM-DD/).
//
// Sube cada carrusel como un solo post multi-imagen (no un post por slide), agenda los
// estáticos, y SALTA los reels (son un guion + portada para grabar, no hay video que subir).
//
// Uso:
//   node publicar_semana.js ../contenido/semana-2026-08-03

const fs = require("fs");
const path = require("path");
const { loadEnv, uploadFile, schedulePost } = require("./ghl_publish.js");

// Hora local (Chile, UTC-4 en este período) de publicación por día, definida en el
// calendario estratégico de la Semana 1 — ajustar aquí si cambian los horarios.
const HORARIOS = {
  lunes: "08:00:00-04:00",
  martes: "09:00:00-04:00",
  miercoles: "12:00:00-04:00",
  jueves: "08:00:00-04:00",
  viernes: "12:30:00-04:00",
  sabado: "11:00:00-04:00",
  domingo: "10:00:00-04:00",
};

const ORDEN_DIAS = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function sinAcentos(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function fechaDelDia(lunesISO, diaNombre) {
  const offset = ORDEN_DIAS.indexOf(diaNombre);
  const d = new Date(lunesISO + "T00:00:00");
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const semanaPath = args.find((a) => !a.startsWith("--"));
  if (!semanaPath) {
    console.error("Uso: node publicar_semana.js <ruta a empulsa/contenido/semana-YYYY-MM-DD> [--dry-run]");
    process.exit(1);
  }

  const m = path.basename(semanaPath).match(/semana-(\d{4}-\d{2}-\d{2})/);
  if (!m) {
    console.error("La carpeta debe llamarse semana-YYYY-MM-DD (el YYYY-MM-DD debe ser el lunes de esa semana).");
    process.exit(1);
  }
  const lunesISO = m[1];

  if (dryRun) {
    console.log("--dry-run: no se sube nada ni se llama a GHL, solo se muestra qué se haría.\n");
  } else {
    loadEnv();
  }

  const carpetas = fs
    .readdirSync(semanaPath, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const programados = [];
  const saltados = [];

  for (const carpeta of carpetas) {
    const dir = path.join(semanaPath, carpeta);
    const diaNombre = sinAcentos(carpeta.split("-")[0]);

    if (!HORARIOS[diaNombre]) {
      console.log(`Saltando "${carpeta}" — no reconozco el día "${diaNombre}" en el nombre de carpeta.`);
      continue;
    }

    if (carpeta.includes("reel")) {
      saltados.push({ carpeta, motivo: "es un reel: hay que grabarlo a partir de guion.md antes de publicar" });
      continue;
    }

    const captionPath = path.join(dir, "caption.txt");
    if (!fs.existsSync(captionPath)) {
      saltados.push({ carpeta, motivo: "no tiene caption.txt" });
      continue;
    }
    const caption = fs.readFileSync(captionPath, "utf8").trim();

    // Carruseles: todas las slide-N.png en orden. Estáticos: post.png (o la única imagen que exista).
    let imagenes = fs
      .readdirSync(dir)
      .filter((f) => /^slide-\d+\.png$/.test(f))
      .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))
      .map((f) => path.join(dir, f));

    if (imagenes.length === 0) {
      const postPng = path.join(dir, "post.png");
      if (fs.existsSync(postPng)) imagenes = [postPng];
    }

    if (imagenes.length === 0) {
      saltados.push({ carpeta, motivo: "no encontré slide-N.png ni post.png" });
      continue;
    }

    const fecha = fechaDelDia(lunesISO, diaNombre);
    const scheduleDateISO = `${fecha}T${HORARIOS[diaNombre]}`;

    if (dryRun) {
      console.log(`\n→ ${carpeta}: programaría ${imagenes.length} imagen(es) para ${scheduleDateISO}`);
      programados.push({ carpeta, fecha: scheduleDateISO, slides: imagenes.length });
      continue;
    }

    console.log(`\n→ ${carpeta}: subiendo ${imagenes.length} imagen(es)...`);
    const urls = [];
    for (const img of imagenes) {
      urls.push(await uploadFile(img));
    }

    console.log(`  Programando para ${scheduleDateISO}...`);
    await schedulePost(urls, caption, scheduleDateISO);
    programados.push({ carpeta, fecha: scheduleDateISO, slides: imagenes.length });
  }

  console.log("\n========== RESUMEN ==========");
  console.log(`Programados (${programados.length}):`);
  for (const p of programados) console.log(`  ✓ ${p.carpeta} — ${p.fecha} (${p.slides} imagen/es)`);
  console.log(`\nPendientes / saltados (${saltados.length}):`);
  for (const s of saltados) console.log(`  · ${s.carpeta} — ${s.motivo}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

// Publica/programa posts de Instagram a través de la API de Social Planner de GoHighLevel.
// Requiere GHL_PRIVATE_TOKEN y GHL_LOCATION_ID en empulsa/_brand_kit/.env (no lo compartas ni lo subas a git).
//
// Uso:
//   node ghl_publish.js --list-accounts
//     -> lista las cuentas conectadas (para copiar el accountId de Instagram a .env como GHL_IG_ACCOUNT_ID)
//
//   node ghl_publish.js --schedule <imagen.png> <caption.txt> "<fecha ISO, ej 2026-08-03T08:00:00-04:00>"
//     -> sube la imagen a Media Storage y programa el post en Instagram

const fs = require("fs");
const path = require("path");

function loadEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    console.error("Falta empulsa/_brand_kit/.env con GHL_PRIVATE_TOKEN y GHL_LOCATION_ID. Ver INSTRUCCIONES en la skill.");
    process.exit(1);
  }
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m) process.env[m[1]] = m[2].trim();
  }
}

const BASE = "https://services.leadconnectorhq.com";

function authHeaders(extra = {}) {
  return {
    Authorization: `Bearer ${process.env.GHL_PRIVATE_TOKEN}`,
    Version: "v3",
    Accept: "application/json",
    ...extra,
  };
}

async function listAccounts() {
  const res = await fetch(`${BASE}/social-media-posting/${process.env.GHL_LOCATION_ID}/accounts`, {
    headers: authHeaders(),
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

async function uploadFile(filePath) {
  const form = new FormData();
  const buf = fs.readFileSync(filePath);
  form.append("file", new Blob([buf]), path.basename(filePath));
  const res = await fetch(`${BASE}/medias/upload-file`, {
    method: "POST",
    headers: authHeaders(),
    body: form,
  });
  const data = await res.json();
  if (!data.url) {
    throw new Error("No se pudo subir la imagen a Media Storage: " + JSON.stringify(data));
  }
  return data.url;
}

async function schedulePost(imageUrls, caption, scheduleDateISO) {
  const urls = Array.isArray(imageUrls) ? imageUrls : [imageUrls];
  const accountId = process.env.GHL_IG_ACCOUNT_ID;
  if (!accountId) {
    throw new Error("Falta GHL_IG_ACCOUNT_ID en .env. Corre --list-accounts primero y copia el id de la cuenta de Instagram.");
  }
  const body = {
    accountIds: [accountId],
    summary: caption,
    media: urls.map((url) => ({ url, type: "image/png" })),
    status: "scheduled",
    scheduleDate: scheduleDateISO,
    type: "post",
  };
  if (process.env.GHL_USER_ID) body.userId = process.env.GHL_USER_ID;

  const res = await fetch(`${BASE}/social-media-posting/${process.env.GHL_LOCATION_ID}/posts`, {
    method: "POST",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
  if (!data.success) {
    throw new Error("GHL rechazó el post — revisa el mensaje de arriba (puede faltar userId, o el accountId no es válido).");
  }
  return data;
}

async function main() {
  loadEnv();
  const [cmd, ...rest] = process.argv.slice(2);

  if (cmd === "--list-accounts") {
    await listAccounts();
  } else if (cmd === "--schedule") {
    const [imagePath, captionPath, scheduleDateISO] = rest;
    if (!imagePath || !captionPath || !scheduleDateISO) {
      console.error('Uso: node ghl_publish.js --schedule <imagen.png> <caption.txt> "<fecha ISO>"');
      process.exit(1);
    }
    const caption = fs.readFileSync(captionPath, "utf8").trim();
    console.log("Subiendo imagen a GoHighLevel...");
    const imageUrl = await uploadFile(imagePath);
    console.log("Imagen alojada en:", imageUrl);
    console.log("Programando post para", scheduleDateISO, "...");
    await schedulePost(imageUrl, caption, scheduleDateISO);
  } else {
    console.error("Comando no reconocido. Usa --list-accounts o --schedule.");
    process.exit(1);
  }
}

module.exports = { loadEnv, uploadFile, schedulePost, listAccounts };

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}

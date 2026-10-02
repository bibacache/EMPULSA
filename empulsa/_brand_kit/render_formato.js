// Genera un carrusel 1080x1350 (4:5) de un formato creativo SIN imagen externa, a partir de un JSON.
// Uso: node render_formato.js "<spec.json>" "<carpeta_salida>"   ->   slide-1.jpg, slide-2.jpg, ...
// spec.json = { "formato": "whatsapp|boleta|carta|tierlist|buscador|editorial", "slides": [ {...}, ... ] }  (ver la skill para los campos)
// Portable: usa solo fuentes incluidas en ./fonts (Inter, Courier Prime, Caveat, Playfair Display), funciona igual en Mac y Linux.
const path = require("path");
const fs = require("fs");
const { chromium } = require(path.join(__dirname, "..", "..", "node_modules", "playwright"));

const F = (n) => "file://" + path.join(__dirname, "fonts", n);
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const nl = (s = "") => esc(s).replace(/\n/g, "<br>");
const FACES = `@font-face{font-family:Inter;src:url("${F("Inter-Variable.ttf")}");font-weight:100 900}
@font-face{font-family:"Courier Prime";src:url("${F("CourierPrime-Regular.ttf")}");font-weight:400}
@font-face{font-family:"Courier Prime";src:url("${F("CourierPrime-Bold.ttf")}");font-weight:700}
@font-face{font-family:"Playfair Display";src:url("${F("PlayfairDisplay-Variable.ttf")}");font-weight:400 900;font-style:normal}
@font-face{font-family:"Playfair Display";src:url("${F("PlayfairDisplay-Italic-Variable.ttf")}");font-weight:400 900;font-style:italic}
@font-face{font-family:Caveat;src:url("${F("Caveat-Variable.ttf")}");font-weight:400 700}`;
const SANS = `Inter,"Helvetica Neue",Arial,sans-serif`, MONO = `"Courier Prime","Courier New",monospace`, HAND = `Caveat,"Bradley Hand",cursive`;
const wrap = (css, body) => `<!doctype html><html><head><meta charset="utf-8"><style>${FACES}
*{margin:0;padding:0;box-sizing:border-box}body{width:1080px;height:1350px;overflow:hidden;position:relative;font-family:${SANS}}${css}
.handle{position:absolute;left:50%;transform:translateX(-50%);bottom:34px;font-size:30px;padding:6px 26px;border-radius:30px;white-space:nowrap;font-family:${SANS}}
</style></head><body>${body}<div class="handle" style="${"HANDLE"}">@empulsa.cl</div></body></html>`;
const handleStyle = (s) => s; // marcador
const PHONE = "+56 9 3056 9940";

/* ---------------- whatsapp ---------------- */
const waCss = `body{background:#ECE5DD;background-image:radial-gradient(#d9d0c3 2px,transparent 2px);background-size:46px 46px}
.top{background:#075E54;color:#fff;height:150px;display:flex;align-items:center;gap:22px;padding:0 44px}
.av{width:84px;height:84px;border-radius:50%;background:#b6c3c0}.nm{font-size:40px;font-weight:700}.st{font-size:26px;opacity:.8}
.big{background:#075E54;color:#fff;padding:60px 54px 80px;font-size:92px;line-height:1.05;font-weight:800}
.chat{padding:60px 44px;display:flex;flex-direction:column;gap:44px}
.b{max-width:860px;padding:28px 34px 16px;border-radius:30px;font-size:50px;line-height:1.25;box-shadow:0 2px 3px rgba(0,0,0,.15)}
.b small{display:block;text-align:right;font-size:28px;color:#8a8a8a;margin-top:6px}
.in{background:#fff;align-self:flex-start;border-top-left-radius:6px}.out{background:#DCF8C6;align-self:flex-end;border-top-right-radius:6px}.out small{color:#5b8a5b}
.chip{align-self:center;background:#e1f2fb;color:#4a6a7a;padding:12px 30px;border-radius:18px;font-size:36px}
.note{margin:60px 44px 0;background:#fff3cd;border-left:12px solid #e0a800;padding:40px;font-size:64px;font-weight:700;color:#5a4300;line-height:1.15}
.cta{background:#075E54;color:#fff;padding:90px 64px;height:1350px;display:flex;flex-direction:column;justify-content:center;gap:44px}
.cta h1{font-size:88px;line-height:1.05}.cta p{font-size:48px;line-height:1.25;opacity:.92}.cta .n{background:#25D366;color:#053;font-weight:800;font-size:46px;border-radius:20px;padding:22px 28px;align-self:flex-start}`;
function whatsapp(s) {
  if (s.cta) return { css: waCss, handle: "background:rgba(255,255,255,.2);color:#fff", body: `<div class="cta"><h1>${nl(s.cta.titulo)}</h1>${(s.cta.textos || [s.cta.texto]).filter(Boolean).map((t) => `<p>${nl(t)}</p>`).join("")}<div class="n">${esc(s.cta.telefono || PHONE)}</div></div>` };
  const top = s.banner ? `<div class="big">${nl(s.banner)}</div>` : `<div class="top"><div class="av"></div><div><div class="nm">${esc(s.contacto || "Cliente nuevo")}</div><div class="st">en línea</div></div></div>`;
  const msgs = (s.mensajes || []).map((m) => m.chip ? `<div class="chip">${esc(m.chip)}</div>` : `<div class="b ${m.de === "yo" ? "out" : "in"}">${nl(m.texto)}<small>${esc(m.hora || "")}${m.de === "yo" && m.hora ? " ✓✓" : ""}</small></div>`).join("");
  return { css: waCss, handle: "background:rgba(255,255,255,.7);color:#075E54", body: `${top}<div class="chat">${msgs}</div>${s.nota ? `<div class="note">${nl(s.nota)}</div>` : ""}` };
}
/* ---------------- boleta ---------------- */
const boCss = `.r{position:absolute;left:110px;top:130px;width:860px;background:#fbfaf5;padding:70px 60px 100px;font-family:${MONO};color:#222;box-shadow:0 20px 40px rgba(0,0,0,.45);-webkit-mask:conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/40px 100%}
.r h1{font-size:82px;line-height:1.05;text-align:center;text-transform:uppercase;font-weight:700}.r h2{text-align:center;font-size:40px;margin:12px 0 30px;letter-spacing:4px;font-weight:700}
.hr{border-top:4px dashed #999;margin:26px 0}.it{font-size:42px;line-height:1.2;margin:28px 0}.it b{display:flex;justify-content:space-between;gap:16px;font-size:38px;font-weight:400;font-style:italic}.it span{display:block;font-size:50px;font-weight:700;margin-top:6px}
.meta{font-size:38px;display:flex;justify-content:space-between;font-style:italic;margin:8px 0}
.tot{font-size:76px;font-weight:700;text-align:center;line-height:1.1;margin:70px 0}.pie{font-size:40px;text-align:center}
.stamp{position:absolute;right:40px;top:930px;border:10px solid #c0271e;color:#c0271e;font-weight:900;font-size:80px;padding:6px 30px;transform:rotate(-14deg);font-family:${SANS};opacity:.85}
.bar{height:110px;margin-top:40px;background:repeating-linear-gradient(90deg,#222 0 4px,#fbfaf5 4px 8px,#222 8px 14px,#fbfaf5 14px 16px)}
.cta{font-size:70px;text-align:center;font-weight:700;line-height:1.15;margin:50px 0}.cta p{font-size:46px;font-weight:400;margin-top:34px}`;
function boleta(s) {
  const bg = s.fondo || "#3b2a1a";
  let b = "";
  if (s.subtitulo) b += `<h2>${esc(s.subtitulo)}</h2>`;
  if (s.titulo) b += `<h1>${nl(s.titulo)}</h1>`;
  if (s.meta) b += `<div class="hr"></div>${s.meta.map((m) => `<div class="meta"><i>${esc(m[0])}</i><i>${esc(m[1])}</i></div>`).join("")}<div class="hr"></div>`;
  if (s.lineas) b += s.lineas.map((l, i) => `${i ? '<div class="hr"></div>' : ""}<div class="it"><b><i>${esc(l.cantidad || "1 x")}</i><i>${esc(l.periodo || "")}</i></b><span>${nl(l.texto)}</span></div>`).join("");
  if (s.total) b += `<div class="hr"></div><div class="tot">${nl(s.total)}</div><div class="hr"></div>`;
  if (s.pie) b += `<div class="pie">${nl(s.pie)}</div>`;
  if (s.cta) b += `<div class="cta">${nl(s.cta.titulo)}<p>${nl(s.cta.texto || "")}</p><p style="font-weight:700;font-size:64px">${esc(s.cta.telefono || PHONE)}</p></div>`;
  if (s.codigo !== false) b += `<div class="bar"></div>`;
  return { css: `body{background:${bg}}${boCss}`, handle: "background:rgba(0,0,0,.45);color:#fbfaf5", body: `<div class="r" style="top:${s.y || 130}px">${b}</div>${s.sello ? `<div class="stamp">${esc(s.sello)}</div>` : ""}` };
}
/* ---------------- carta ---------------- */
const caCss = `body{background:#3a2616;background-image:repeating-linear-gradient(90deg,rgba(0,0,0,.18) 0 3px,transparent 3px 190px),linear-gradient(#4a301b,#2c1a0d);font-family:${HAND};color:#2a1a0c}
.sheet{position:absolute;background:#f4ead2;box-shadow:0 22px 44px rgba(0,0,0,.55)}.ruled{background-image:repeating-linear-gradient(transparent 0 92px,rgba(120,90,50,.2) 92px 94px)}
.env{left:90px;top:170px;width:900px;height:640px;background:#ecdcb4;transform:rotate(-2deg);border-radius:6px}
.flap{position:absolute;left:0;top:0;width:0;height:0;border-left:450px solid transparent;border-right:450px solid transparent;border-top:330px solid #dfcb9b;filter:drop-shadow(0 6px 6px rgba(0,0,0,.3))}
.seal{position:absolute;left:390px;top:270px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#d8483a,#8c1d12 70%);box-shadow:0 5px 10px rgba(0,0,0,.5);color:#f6d9d3;font-size:80px;text-align:center;line-height:118px;font-weight:700}
.addr{position:absolute;left:60px;right:60px;top:410px;font-size:72px;line-height:1.05;text-align:center}
.lbl{position:absolute;left:120px;right:120px;top:850px;font-size:70px;line-height:1.1;text-align:center;color:#f4ead2;text-shadow:0 3px 8px #000;transform:rotate(-1deg)}
.list{left:110px;top:100px;width:860px;height:1090px;transform:rotate(1.2deg);padding:70px 70px}.list h2{font-size:96px;margin-bottom:24px;color:#8c1d12;line-height:1}
.it{font-size:70px;line-height:94px;position:relative;padding-left:82px}.it:before{content:"";position:absolute;left:0;top:26px;width:44px;height:44px;border:5px solid #2a1a0c;border-radius:6px}
.it.d{text-decoration:line-through;text-decoration-thickness:6px;text-decoration-color:#8c1d12;opacity:.75}
.it.d:after{content:"";position:absolute;left:8px;top:22px;width:30px;height:30px;border-bottom:8px solid #2f5d2a;border-right:8px solid #2f5d2a;transform:rotate(40deg) scale(.7,1)}
.it.p{color:#8c1d12;font-weight:700}.circ{position:absolute;left:52px;top:0;right:0;height:100%;border:6px solid #8c1d12;border-radius:50%/60%;transform:rotate(-1.5deg)}
.note{margin-top:36px;font-size:78px;line-height:1.05;font-weight:700}
.letter{left:110px;top:120px;width:860px;height:1090px;transform:rotate(-1.4deg);padding:90px 80px 70px;display:flex;flex-direction:column;gap:40px;justify-content:center}
.letter .t{font-size:82px;line-height:1.1}.letter .g{font-size:100px;line-height:1;font-weight:700}.pd{font-size:66px;line-height:1.1;color:#5a3a1c}.sig{font-size:86px;font-weight:700;color:#8c1d12;text-align:right}
.ring{position:absolute;right:60px;bottom:40px;width:230px;height:230px;border-radius:50%;border:16px solid rgba(110,70,30,.28)}
.clip{position:absolute;right:120px;top:-30px;width:44px;height:150px;border:8px solid #9a9a9a;border-radius:24px;transform:rotate(-8deg);z-index:2}`;
function carta(s) {
  let b = "";
  if (s.tipo === "sobre") b = `<div class="sheet env"><div class="flap"></div><div class="seal">E</div><div class="addr">${nl(s.para)}</div></div><div class="lbl">${nl(s.rotulo || "")}</div>`;
  else if (s.tipo === "lista") b = `<div class="sheet list ruled"><h2>${nl(s.titulo)}</h2>${(s.hechas || []).map((t) => `<div class="it d">${esc(t)}</div>`).join("")}<div class="it p"><div class="circ"></div>${esc(s.pendiente)}</div><div class="note">${nl(s.remate || "")}</div></div>`;
  else b = `<div class="sheet letter ruled"><div class="clip"></div><div class="ring"></div>${s.destacado ? `<div class="g">${nl(s.destacado)}</div>` : ""}${s.texto ? `<div class="t">${nl(s.texto)}</div>` : ""}${s.pd ? `<div class="pd">${nl(s.pd)}</div>` : ""}${s.firma ? `<div class="sig">${nl(s.firma)}</div>` : ""}</div>`;
  return { css: caCss, handle: "background:rgba(0,0,0,.5);color:#f4ead2", body: b };
}
/* ---------------- tierlist ---------------- */
const COL = { S: "#ff7f7f", A: "#ffbf7f", B: "#ffdf7f", C: "#ffff7f", D: "#bfff7f" };
const tiCss = `body{background:#151515;color:#fff}h1{position:absolute;left:60px;right:60px;top:60px;font-size:84px;line-height:1.03;font-weight:800}
.tb{position:absolute;left:50px;right:50px;top:300px;display:flex;flex-direction:column;gap:12px}.row{display:flex;min-height:168px;background:#2a2a2a}
.L{width:190px;flex:none;display:flex;align-items:center;justify-content:center;font-size:104px;font-weight:900;color:#111}.c{flex:1;padding:16px 30px;font-size:48px;line-height:1.15;font-weight:600;display:flex;align-items:center}
.zoom{position:absolute;left:60px;right:60px;top:280px}.zoom .L{width:auto;height:300px;font-size:260px;border-radius:24px 24px 0 0}.zoom .txt{background:#2a2a2a;padding:60px;font-size:78px;line-height:1.15;font-weight:800;border-radius:0 0 24px 24px}.zoom .txt p{font-size:54px;font-weight:500;margin-top:26px;opacity:.85}
.cta{position:absolute;left:60px;right:60px;top:330px}.cta h1{position:static;font-size:100px}.cta p{font-size:52px;margin-top:40px;line-height:1.25;opacity:.9}.cta .n{display:inline-block;margin-top:40px;background:#25D366;color:#053;font-weight:800;font-size:50px;border-radius:20px;padding:22px 30px}`;
function tierlist(s) {
  const h = { css: tiCss, handle: "background:rgba(255,255,255,.14);color:#fff" };
  if (s.cta) return { ...h, body: `<div class="cta"><h1>${nl(s.cta.titulo)}</h1><p>${nl(s.cta.texto || "")}</p><div class="n">${esc(s.cta.telefono || PHONE)}</div></div>` };
  if (s.zoom) return { ...h, body: `<div class="zoom"><div class="L" style="background:${COL[s.zoom.letra] || "#fff"};display:flex;align-items:center;justify-content:center">${esc(s.zoom.letra)}</div><div class="txt">${nl(s.zoom.titulo)}<p>${nl(s.zoom.texto || "")}</p></div></div>` };
  const filas = (s.filas || []).map((f) => `<div class="row"><div class="L" style="background:${COL[f[0]] || "#ddd"}">${esc(f[0])}</div><div class="c">${esc(f[1] || "?")}</div></div>`).join("");
  return { ...h, body: `<h1 ${s.filas && s.filas.length && !s.titulo ? "" : ""}>${nl(s.titulo || "")}</h1><div class="tb" style="top:${s.titulo && s.titulo.length > 30 ? 330 : 250}px">${filas}</div>` };
}
/* ---------------- buscador ---------------- */
const buCss = `body{background:#f1f3f4;color:#202124}.sb{margin:70px 50px 0;height:140px;border-radius:70px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.25);display:flex;align-items:center;padding:0 46px;font-size:54px;gap:24px}
.ttl{margin:50px 60px 0;font-size:90px;line-height:1.05;font-weight:800}.res{margin:30px 60px 0;background:#fff;border-radius:26px;padding:28px 40px;box-shadow:0 1px 4px rgba(0,0,0,.15)}
.res .u{font-size:30px;color:#5f6368}.res .h{font-size:54px;color:#1a0dab;font-weight:600;margin:4px 0}.res .d{font-size:38px;color:#4d5156;line-height:1.25}.res .s{color:#e7a100;font-size:38px;margin-top:6px}
.ghost{opacity:.35}.you{border:6px dashed #c0271e;background:#fff5f4}.pg{margin:30px 60px 0;font-size:52px;font-weight:800;color:#c0271e;text-align:center}
.cta{margin:260px 60px 0}.cta h1{font-size:100px;line-height:1.05}.cta p{font-size:52px;margin-top:36px;line-height:1.25}.cta .n{display:inline-block;margin-top:40px;background:#25D366;color:#053;font-weight:800;font-size:50px;border-radius:20px;padding:22px 30px}`;
const MAG = `<svg width="46" height="46" viewBox="0 0 24 24"><circle cx="10" cy="10" r="7" fill="none" stroke="#5f6368" stroke-width="2.4"/><path d="M15.5 15.5L22 22" stroke="#5f6368" stroke-width="2.4" stroke-linecap="round"/></svg>`;
function buscador(s) {
  const h = { css: buCss, handle: "background:rgba(0,0,0,.08);color:#202124" };
  if (s.cta) return { ...h, body: `<div class="cta"><h1>${nl(s.cta.titulo)}</h1><p>${nl(s.cta.texto || "")}</p><div class="n">${esc(s.cta.telefono || PHONE)}</div></div>` };
  const res = (s.resultados || []).map((r) => r.tipo === "separador" ? `<div class="pg">${esc(r.texto)}</div>` : `<div class="res ${r.tipo === "fantasma" ? "ghost" : r.tipo === "tuyo" ? "you" : ""}"><div class="u">${esc(r.url || "")}</div><div class="h">${esc(r.titulo)}</div>${r.descripcion ? `<div class="d">${esc(r.descripcion)}</div>` : ""}${r.estrellas ? `<div class="s">${esc(r.estrellas)}</div>` : ""}</div>`).join("");
  return { ...h, body: `<div class="sb">${MAG}<span>${esc(s.consulta || "")}</span></div>${s.titulo ? `<div class="ttl">${nl(s.titulo)}</div>` : ""}${res}${s.remate ? `<div class="ttl" style="font-size:76px;margin-top:40px">${nl(s.remate)}</div>` : ""}` };
}

/* ---------------- editorial (fondo crema, titular serif con marcador amarillo, esquema) ---------------- */
const SERIF = `"Playfair Display",Georgia,serif`;
const edCss = `body{background:#F5EFE3;color:#1b1a17}
.kick{position:absolute;top:66px;left:0;right:0;text-align:center;font:400 27px ${MONO};letter-spacing:.05em}
.h{position:absolute;top:130px;left:64px;right:64px;text-align:center;font:500 84px/1.1 ${SERIF}}.h mark{background:#FFF59D;color:inherit;padding:0 14px;border-radius:4px;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.bd{position:absolute;left:64px;right:64px;top:470px;bottom:170px;display:flex;flex-direction:column;justify-content:center}
.lab{font:700 26px ${MONO};letter-spacing:.12em;text-transform:uppercase;text-align:center;color:#3a372f;margin-bottom:22px}
.ft{position:absolute;left:64px;right:64px;bottom:58px;display:flex;justify-content:space-between;align-items:baseline}.ft b{font:700 34px ${SANS}}.ft i{font:italic 400 38px ${SERIF};color:#C8583A}.ft i s{font:400 36px ${SANS};font-style:normal;text-decoration:none;margin-left:8px}
.card{background:#fff;border-radius:22px;box-shadow:0 6px 18px rgba(60,40,20,.10)}
.chat{display:flex;flex-direction:column;gap:22px}.m{max-width:840px;padding:26px 32px 14px;border-radius:26px;font:500 46px/1.25 ${SANS};background:#fff;box-shadow:0 4px 12px rgba(60,40,20,.10)}
.m small{display:block;font:400 25px ${MONO};color:#8a857a;margin-top:6px}.m.c{align-self:flex-start;border-top-left-radius:6px}.m.a{align-self:flex-end;background:#F6DDD2;border-top-right-radius:6px}.m.a em{display:block;font:700 22px ${MONO};letter-spacing:.12em;color:#C8583A;font-style:normal;margin-bottom:6px}
.pipe{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.col{background:#EDE4D2;border-radius:20px;padding:20px 12px 26px;min-height:520px}.col h4{font:700 25px ${MONO};letter-spacing:.08em;text-transform:uppercase;text-align:center;margin-bottom:16px}
.tk{padding:20px 14px;margin-bottom:16px;border-radius:14px;background:#fff;box-shadow:0 3px 10px rgba(60,40,20,.10);font:600 36px/1.15 ${SANS}}.tk small{display:block;font:400 25px ${MONO};color:#8a857a;margin-top:6px}
.tk.hot{border-left:8px solid #C8583A}
.flow{position:relative;height:640px;margin-top:10px}.flow svg{position:absolute;inset:0}.chip{position:absolute;display:flex;align-items:center;gap:12px;padding:14px 18px;border-radius:20px;background:#fff;box-shadow:0 4px 12px rgba(60,40,20,.10);font:700 26px ${MONO};letter-spacing:.06em;text-transform:uppercase}
.chip i{display:block;width:46px;height:46px;border-radius:12px}.core{position:absolute;left:355px;top:225px;width:270px;height:190px;border-radius:26px;background:#fff;box-shadow:0 8px 22px rgba(60,40,20,.15);display:flex;flex-direction:column;align-items:center;justify-content:center;font:600 44px ${SERIF}}.core b{font:700 22px ${MONO};letter-spacing:.14em;color:#C8583A;margin-bottom:6px}
.list{display:flex;flex-direction:column;gap:26px}.li{display:flex;align-items:center;gap:28px;padding:38px 36px}.li b{flex:none;width:72px;height:72px;border-radius:50%;background:#C8583A;color:#fff;display:flex;align-items:center;justify-content:center;font:700 42px ${SANS}}.li span{font:500 52px/1.2 ${SANS}}
.cta{text-align:center}.cta p{font:400 44px/1.3 ${SERIF};margin-bottom:34px}.pill{display:inline-block;border:3px solid #C8583A;color:#C8583A;border-radius:14px;padding:16px 34px;font:700 34px ${MONO};letter-spacing:.08em;text-transform:uppercase}.tel{font:700 76px ${SANS};margin:30px 0 8px}`;
const hl = (t = "") => nl(t).replace(/\[\[(.+?)\]\]/g, "<mark>$1</mark>");
function editorial(s) {
  const b = s.bloque || {};
  let body = "";
  if (b.tipo === "chat") body = `${b.etiqueta ? `<div class="lab">${esc(b.etiqueta)}</div>` : ""}<div class="chat">${(b.mensajes || []).map((m) => `<div class="m ${m.de === "agente" ? "a" : "c"}">${m.de === "agente" ? "<em>AGENTE IA</em>" : ""}${nl(m.texto)}<small>${esc(m.hora || "")}</small></div>`).join("")}</div>`;
  else if (b.tipo === "pipeline") body = `${b.etiqueta ? `<div class="lab">${esc(b.etiqueta)}</div>` : ""}<div class="pipe">${(b.columnas || []).map((c) => `<div class="col"><h4>${esc(c.titulo)}</h4>${(c.tarjetas || []).map((t) => `<div class="tk ${t.caliente ? "hot" : ""}">${esc(t.nombre)}<small>${esc(t.detalle || "")}</small></div>`).join("")}</div>`).join("")}</div>${b.nota ? `<div class="lab" style="margin-top:22px;font-weight:400;font-size:22px">${esc(b.nota)}</div>` : ""}`;
  else if (b.tipo === "flujo") {
    const L = b.entradas || [], R = b.salidas || [];
    const ys = (n) => Array.from({ length: n }, (_, i) => 30 + i * ((640 - 130) / Math.max(n - 1, 1)));
    const ly = ys(L.length), ry = ys(R.length);
    const paths = [...ly.map((y) => `<path d="M250 ${y + 30} C 300 ${y + 30}, 320 320, 355 320" />`), ...ry.map((y) => `<path d="M625 320 C 660 320, 690 ${y + 30}, ${R.length>1 && Math.abs(y+30-320)<40 ? 800 : 730} ${y + 30}" />`)].join("");
    body = `${b.etiqueta ? `<div class="lab">${esc(b.etiqueta)}</div>` : ""}<div class="flow"><svg viewBox="0 0 952 640" fill="none" stroke="#C8583A" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round">${paths}</svg>${L.map((t, i) => `<div class="chip" style="left:0;top:${ly[i]}px"><i style="background:${t.color || "#ddd"}"></i>${esc(t.texto || t)}</div>`).join("")}<div class="core"><b>${esc(b.centroEtiqueta || "")}</b>${esc(b.centro || "")}</div>${R.map((t, i) => `<div class="chip" style="right:0;top:${ry[i]}px"><i style="background:${t.color || "#C8583A"}"></i>${esc(t.texto || t)}</div>`).join("")}</div>`;
  } else if (b.tipo === "lista") body = `<div class="list">${(b.items || []).map((t) => `<div class="card li"><b>✓</b><span>${nl(t)}</span></div>`).join("")}</div>`;
  else if (b.tipo === "cta") body = `<div class="cta"><p>${nl(b.texto || "")}</p><div class="pill">${esc(b.boton || "Te respondemos por WhatsApp")}</div><div class="tel">${esc(b.telefono || PHONE)}</div>${b.pie ? `<p style="font-size:32px;margin:12px 0 0;opacity:.75">${nl(b.pie)}</p>` : ""}</div>`;
  return { css: edCss, handle: "display:none", body: `<div class="kick">${esc(s.kicker || "empulsa.cl")}</div><div class="h">${hl(s.titulo)}</div><div class="bd">${body}</div><div class="ft"><b>@empulsa.cl</b><i>${esc((s.acento || "").replace(/\s*→$/, ""))}${/→$/.test(s.acento || "") ? "<s>→</s>" : ""}</i></div>` };
}
const FORMATOS = { whatsapp, boleta, carta, tierlist, buscador, editorial };

(async () => {
  const [specPath, outDir] = process.argv.slice(2);
  if (!specPath || !outDir) { console.error('Uso: node render_formato.js "<spec.json>" "<carpeta_salida>"'); process.exit(1); }
  const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
  const fn = FORMATOS[spec.formato];
  if (!fn) { console.error("Formato desconocido: " + spec.formato + ". Opciones: " + Object.keys(FORMATOS).join(", ")); process.exit(1); }
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const tmp = path.join(__dirname, "_tmp_formato.html");
  for (let i = 0; i < spec.slides.length; i++) {
    const r = fn(spec.slides[i]);
    fs.writeFileSync(tmp, wrap(r.css, r.body).replace('style="HANDLE"', `style="${r.handle}"`));
    await page.goto("file://" + tmp);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    const out = path.join(outDir, `slide-${i + 1}.jpg`);
    await page.screenshot({ path: out, type: "jpeg", quality: 92 });
    console.log(out);
  }
  fs.unlinkSync(tmp);
  await browser.close();
})();

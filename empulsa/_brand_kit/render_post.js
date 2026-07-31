// Renderiza un post cuadrado 1080x1080 de Empulsa a partir de template.html
// Uso: node render_post.js "<headline>" "<eyebrow opcional>" "<ruta_salida.png>"
const path = require("path");
const { chromium } = require(path.join(__dirname, "..", "..", "node_modules", "playwright"));

async function main() {
  const [headline, eyebrow, outPath] = process.argv.slice(2);
  if (!headline || !outPath) {
    console.error('Uso: node render_post.js "<headline>" "<eyebrow>" "<salida.png>"');
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
  await page.goto("file://" + path.join(__dirname, "template.html"));
  await page.evaluate(({ headline, eyebrow }) => {
    document.getElementById("headline").textContent = headline;
    document.getElementById("eyebrow").textContent = eyebrow || "";
  }, { headline, eyebrow });
  await page.waitForTimeout(150); // asegurar carga de fuente variable
  await page.screenshot({ path: outPath });
  await browser.close();
  console.log("Guardado en", outPath);
}

main();

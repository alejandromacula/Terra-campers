// Renderiza guia-terra-campers.html a PDF y avisa qué páginas se desbordan.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(__dirname, 'guia-terra-campers.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const overflow = await page.evaluate(() =>
    [...document.querySelectorAll('.page')].map((p, i) => {
      const foot = p.querySelector('.foot');
      if (!foot) return null;
      const limit = foot.getBoundingClientRect().top - 2;
      const worst = Math.max(...[...p.querySelectorAll('.head,.mid,.fila,.cierre,.ap-body,.cols2')]
        .map(e => e.getBoundingClientRect().bottom));
      const code = (p.querySelector('.head .kick b') || {}).textContent || '';
      const anchos = [...p.querySelectorAll('.blk .lab, .fila > .lab')].filter(l => l.scrollWidth > l.clientWidth + 1)
        .map(l => `página ${i + 1} ${code}: el rótulo "${l.textContent}" no entra en el margen`);
      if (worst > limit) anchos.push(`página ${i + 1} ${code}: se pasa ${Math.round((worst - limit) / 3.78)} mm`);
      return anchos.length ? anchos.join('\n') : null;
    }).filter(Boolean));
  await page.pdf({ path: path.resolve(__dirname, 'guia-terra-campers.pdf'), width: '170mm', height: '255mm',
    printBackground: true, margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' } });
  // Versión liviana para pantalla: mismas páginas, fotos de 750 px (copias en liviano/).
  const fs = require('fs');
  const { execFileSync } = require('child_process');
  const liv = path.resolve(__dirname, 'liviano');
  fs.mkdirSync(liv, { recursive: true });
  for (const f of fs.readdirSync(path.resolve(__dirname, 'img')).filter(f => f.endsWith('.jpg'))) {
    const src = path.resolve(__dirname, 'img', f), dst = path.join(liv, f);
    if (!fs.existsSync(dst) || fs.statSync(dst).mtimeMs < fs.statSync(src).mtimeMs)
      execFileSync('convert', [src, '-resize', '750x750>', '-quality', '64', dst]);
  }
  {
    const p2 = await browser.newPage();
    await p2.route('**/img/*.jpg', r => {
      const f = path.join(liv, path.basename(new URL(r.request().url()).pathname));
      return fs.existsSync(f) ? r.fulfill({ path: f, contentType: 'image/jpeg' }) : r.continue();
    });
    await p2.goto('file://' + path.resolve(__dirname, 'guia-terra-campers.html'), { waitUntil: 'networkidle' });
    await p2.evaluate(() => document.fonts.ready);
    await p2.pdf({ path: path.resolve(__dirname, 'guia-terra-campers-liviana.pdf'), width: '170mm', height: '255mm',
      printBackground: true, margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' } });
  }
  await browser.close();
  console.log(overflow.length ? 'DESBORDES:\n' + overflow.join('\n') : 'Sin desbordes');
})();

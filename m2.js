const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  await ctx.route('**/*unpkg.com/**', route => {
    const url = route.request().url();
    let file = url.includes('react-dom') ? '/home/claude/vendor/umd/react-dom.production.min.js' : url.includes('react') ? '/home/claude/vendor/umd/react.production.min.js' : null;
    if (file) route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(file, 'utf8') });
    else route.abort();
  });
  const page = await ctx.newPage();
  await page.goto('http://localhost:8899/', { waitUntil: 'load' });
  await page.waitForTimeout(2000);
  const h = await page.evaluate(() => {
    const cols = [...document.querySelector('#about .cols-2').children];
    const contentH = c => { const ps = [...c.querySelectorAll('p')]; const top = ps[0].getBoundingClientRect().top; const bot = ps[ps.length-1].getBoundingClientRect().bottom; return Math.round(bot - top); };
    return cols.map(contentH);
  });
  console.log('content heights [left, right]:', h, '| diff:', Math.abs(h[0]-h[1]));
  await browser.close();
})();

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
  const card = page.locator('h3', { hasText: 'NeuroLexIQ' }).first();
  await card.scrollIntoViewIfNeeded(); await card.click();
  await page.waitForTimeout(1200);
  const pos = await page.$$eval('img', els => els.filter(i => i.src.includes('neurolexiq-g1')).map(i => i.style.objectPosition));
  console.log('g1 object-position:', pos);
  await browser.close();
})();

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
  await page.waitForTimeout(2500);
  await page.evaluate(() => { const el = document.querySelector('#about'); if (el) el.scrollIntoView(); });
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/mnt/user-data/outputs/preview/08-new-pull-quote.png' });
  await browser.close();
})();

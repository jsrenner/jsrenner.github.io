const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
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
  await card.scrollIntoViewIfNeeded(); await card.tap();
  await page.waitForTimeout(1200);
  const tX = await page.$eval('h1', el => Math.round(el.getBoundingClientRect().left));
  const sX = await page.$$eval('p', els => { const el = els.find(e => e.textContent.includes('Bridging product vision') || e.textContent.length > 40); return Math.round(el.getBoundingClientRect().left); });
  console.log('title left:', tX, '| subhead left:', sX);
  await page.evaluate(() => { const el = document.querySelector('.gallery-item'); if (el) el.scrollIntoView({ block: 'center' }); });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/home/claude/mobile-g1.png' });
  await browser.close();
})();

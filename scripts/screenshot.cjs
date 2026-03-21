// Takes a screenshot of the local preview server and saves it to preview.png.
// Run with: NODE_PATH=/tmp/node_modules node scripts/screenshot.cjs
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'preview.png' });
  await browser.close();
  console.log('Screenshot saved to preview.png');
})();

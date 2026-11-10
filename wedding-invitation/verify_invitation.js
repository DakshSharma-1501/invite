const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

async function main() {
  console.log('Launching Chromium for browser verification and PDF export...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 }
  });

  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html');
  console.log('Loading invitation from:', htmlPath);
  await page.goto(htmlPath, { waitUntil: 'networkidle' });

  // Wait a moment for fonts and images to render
  await page.waitForTimeout(1500);

  // Take preview screenshot of the full viewport
  await page.screenshot({ path: path.resolve(__dirname, 'preview_viewport.png'), fullPage: false });
  console.log('Saved preview_viewport.png');

  // Take element screenshot of each card
  for (let i = 1; i <= 3; i++) {
    const cardEl = await page.$(`#page${i}`);
    if (cardEl) {
      await cardEl.screenshot({ path: path.resolve(__dirname, `rendered_page_${i}.png`) });
      console.log(`Saved rendered_page_${i}.png`);
    }
  }

  // Generate the Print PDF
  const pdfPath = path.resolve(__dirname, 'wedding_invitation.pdf');
  console.log('Exporting A4 PDF to:', pdfPath);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
    preferCSSPageSize: true
  });
  console.log('PDF export complete.');

  await browser.close();
}

main().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});

const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://massage-website-omega.vercel.app/';

const screens = [
  { name: 'mobile-375', width: 375, height: 812, isMobile: true },
  { name: 'mobile-390', width: 390, height: 844, isMobile: true },
  { name: 'tablet-768', width: 768, height: 1024, isMobile: false },
  { name: 'desktop-1440', width: 1440, height: 1000, isMobile: false },
];

async function main() {
  const outputDir = path.join(__dirname, '..', 'site-check-results');
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const report = {
    url: SITE_URL,
    checkedAt: new Date().toISOString(),
    results: [],
  };

  try {
    for (const screen of screens) {
      console.log(`Проверяю экран: ${screen.name}`);

      const context = await browser.newContext({
        viewport: {
          width: screen.width,
          height: screen.height,
        },
        isMobile: screen.isMobile,
        deviceScaleFactor: 1,
      });

      const page = await context.newPage();
      const errors = [];

      page.on('pageerror', error => {
        errors.push({
          type: 'JavaScript',
          message: error.message,
        });
      });

      page.on('console', message => {
        if (message.type() === 'error') {
          errors.push({
            type: 'Console',
            message: message.text(),
          });
        }
      });

      try {
        const response = await page.goto(SITE_URL, {
          waitUntil: 'networkidle',
          timeout: 60000,
        });

        await page.screenshot({
          path: path.join(outputDir, `${screen.name}.png`),
          fullPage: true,
          animations: 'disabled',
        });

        const layout = await page.evaluate(() => ({
          pageTitle: document.title,
          viewportWidth: window.innerWidth,
          pageWidth: document.documentElement.scrollWidth,
          pageHeight: document.documentElement.scrollHeight,
          horizontalOverflow:
            document.documentElement.scrollWidth > window.innerWidth,
        }));

        report.results.push({
          screen: screen.name,
          status: response ? response.status() : null,
          ...layout,
          errors,
        });

        console.log(
          `  HTTP: ${response?.status() ?? 'нет ответа'} | ` +
          `Горизонтальная прокрутка: ${layout.horizontalOverflow ? 'ДА' : 'НЕТ'} | ` +
          `Ошибки: ${errors.length}`
        );
      } catch (error) {
        report.results.push({
          screen: screen.name,
          failed: true,
          message: error.message,
          errors,
        });

        console.log(`  Ошибка проверки: ${error.message}`);
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }

  fs.writeFileSync(
    path.join(outputDir, 'report.json'),
    JSON.stringify(report, null, 2),
    'utf8'
  );

  console.log('\nПроверка завершена.');
  console.log(`Результаты сохранены в: ${outputDir}`);
}

main().catch(error => {
  console.error('Ошибка запуска теста:', error);
  process.exitCode = 1;
});
const puppeteer = require("puppeteer");

describe("interacting with launching, pausing, and reloading", () => {
  it("should launch the browser?", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForTimeout(3000);
    await page.waitForSelector("h1");
    await page.reload();
    await page.waitForTimeout(3000);
    await page.waitForSelector("h1");
    await browser.close();
  });
});

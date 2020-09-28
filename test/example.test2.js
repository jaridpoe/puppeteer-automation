const puppeteer = require("puppeteer");

describe("interacting with go back & forward in the browser", () => {
  it("should go back and forward in browser", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 500,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto("http://example.com");
    await page.waitForSelector("h1");
    await page.goto("http://dev.to/");
    await page.waitForSelector("#top-bar");
    await page.goBack();
    await page.waitForSelector("h1");
    await page.goForward();
    await page.waitForSelector("#top-bar");
    await browser.close();
  });
});

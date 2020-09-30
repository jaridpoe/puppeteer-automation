const puppeteer = require("puppeteer");

describe("get element text", () => {
  it("does element have text", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto("http://example.com");
    const title = await page.title();
    const url = await page.url();
    const text = await page.$eval("h1", (element) => element.textContent);
    console.log("Text in the H1:", text);
    await browser.close();
  });
});

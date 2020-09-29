const puppeteer = require("puppeteer");

describe("get the title and url of a page", () => {
  it("should get title and url", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto("http://example.com");
    const title = await page.title();
    const url = await page.url();
    console.log("title", title);
    console.log("url", url);
    await browser.close();
  });
});

const puppeteer = require("puppeteer");

describe("get elements on page", () => {
  it("how many elements on a page", async () => {
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
    //$$ returns multiple elements versus $ which is single element
    const count = await page.$$eval("p", (element) => element.length);
    console.log("Text in the H1:", text);
    console.log("Number of p tags on a page", count)
    await browser.close();
  });
});

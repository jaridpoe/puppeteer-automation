const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("get xpath from xml", () => {
  it("should get element from xml", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });
    const page = await browser.newPage();

    await page.goto("http://example.com");
    //query language that helps identify elements from an XML document
    await page.waitForXPath("//h1");

    await browser.close();
  });
});
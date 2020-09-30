const puppeteer = require("puppeteer");

describe("device emulation", () => {
  let browser;
  let page;

  before(async () => {
    //initialize browser
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
    });

    //initialize page
    page = await browser.newPage();

    //there a default 30 second timeout but you can change that here
    await page.setDefaultNavigationTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
  });

  after(async () => {
    await browser.close();
  });

  it("Desktop device test", async () => {
    await page.setViewport({ width: 1650, height: 1050 });
    await page.goto("https://www.example.com");
    await page.waitFor(5000);
  });

  it("Tablet device test", async () => {
    const tablet = puppeteer.devices["iPad landscape"];
    await page.emulate(tablet);
    await page.goto("https://www.example.com");
    await page.waitFor(5000);
  });

  it("Mobile device test", async () => {
    const mobile = puppeteer.devices["iPhone X"];
    await page.emulate(mobile);
    await page.goto("https://www.example.com");
    await page.waitFor(5000);
  });
});

const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("set keyboard press simulation", () => {
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

  beforeEach(async () => {
    //runs before each it blocks
  });

  afterEach(async () => {
    //runs after each it blocks
  });

  after(async () => {
    await browser.close();
  });

  it("should simulate keyboard", async () => {
    await page.goto("http://example.com");
    const title = await page.title();
    const url = await page.url();
    const text = await page.$eval("h1", (element) => element.textContent);
    const count = await page.$$eval("p", (element) => element.length);

    expect(title).to.be.a("string", "Example Domain");
    expect(url).to.include("example.com");
    expect(text).to.be.a("string", "Example Domain");
    expect(count).to.equal(2);

    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.waitForSelector("#searchTerm");
    await page.type("#searchTerm", "Hello Word");
    await page.keyboard.press("Enter", { delay: 10 });
    await page.waitFor(5000);
  });
});

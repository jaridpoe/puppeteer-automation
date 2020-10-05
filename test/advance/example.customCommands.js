const puppeteer = require("puppeteer");
const expect = require("chai").expect;

const { click, getText, getCount } = require("./../../lib/customCommands");

describe("puppeteer hooks example", () => {
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

    const text = await getText(page, "h1");
    const count = await getCount(page, "p");

    expect(title).to.be.a("string", "Example Domain");
    expect(url).to.include("example.com");
    expect(text).to.be.a("string", "Example Domain");
    expect(count).to.equal(2);

    const selectorName = "#signin_button";
    await page.goto("http://zero.webappsecurity.com/index.html");
    await click(page, selectorName);
    await page.waitFor(() => !document.querySelector(selectorName));
    await page.waitForSelector(selectorName, {
      hidden: true,
      timeout: 3000,
    });
  });
});

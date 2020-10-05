const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("Visual Regression Testing", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Full Page Snapshot", async () => {
    await page.goto("https://www.example.com");
    await page.waitForSelector("h1");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureTresholdType: "pixel",
      failureThreshold: 500,
    });
  });
});

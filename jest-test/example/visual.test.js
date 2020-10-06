const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("Visual Regression Testing", () => {
  let browser;
  let page;
  let url = "https://qa-grid-hub-allconnext.pantheonsite.io/internet";

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Full Page Snapshot", async () => {
    await page.goto(url);
    await page.waitForSelector("h1");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureTresholdType: "pixel",
      failureThreshold: 500,
    });
  });

  test("Mobile Snapshot", async () => {
    await page.goto(url);
    await page.waitForSelector("h1");
    await page.emulate(puppeteer.devices['iPhone X'])
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureTresholdType: "pixel",
      failureThreshold: 500,
    });
  });


});

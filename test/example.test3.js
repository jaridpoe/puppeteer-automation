const puppeteer = require("puppeteer");

describe("interacting with inputs, checkbox, buttons, dropdown, and submit", () => {
  it("should fill out and submit form", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 500,
      devtools: false,
    });
    const page = await browser.newPage();
    //go to url
    await page.goto("https://devexpress.github.io/testcafe/example/");
    //type in  input
    await page.type("#developer-name", "Mike", { delay: 0 });
    await page.waitForTimeout(1000);
    //click in checkbox
    await page.click("#tried-test-cafe", { clickCount: 1 });
    await page.waitForTimeout(1000);
    //select in dropdown
    await page.select("#preferred-interface", "JavaScript API");
    await page.waitForTimeout(1000);
    //type in text field
    const message = "Lets fill that message with some test";
    await page.type("#comments", message, { delay: 0 });
    await page.waitForTimeout(1000);
    //click submit button
    await page.click("#submit-button");
    //get element on results page
    await page.waitForSelector(".result-content");
    //close browser
    await browser.close();
  });
});

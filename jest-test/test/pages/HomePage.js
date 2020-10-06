import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  constructor(url) {
    super(url);
    this.url = url;
  }
  async visit() {
    await page.goto(this.url);
    await page.waitForSelector("h1");
  }

  async isNavbarDisplayed() {
    await page.waitForSelector("nav");
    await page.waitForSelector("ul");
    await page.waitForSelector("li");
  }
}

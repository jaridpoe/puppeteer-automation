import HomePage from "./pages/HomePage";

describe("Example", () => {
  let page;

  beforeAll(async () => {
    jest.setTimeout(150000);
    let url = "https://qa-grid-hub-allconnext.pantheonsite.io/internet";
    page = new HomePage(url);
  });

  it("page should work", async () => {
    await page.visit();
  });

  it("navbar should be displayed", async () => {
    await page.isNavbarDisplayed();
  });

  it("should take a desktop snapshot", async () => {
    await page.takeDesktopSnapShot();
  });

  it("should take a mobile snapshot", async () => {
    const deviceName = "iPhone X";
    await page.takeMobileSnapShot(deviceName);
  });
});

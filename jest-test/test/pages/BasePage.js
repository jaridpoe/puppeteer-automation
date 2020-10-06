const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

export default class BasePage {
  async wait(time) {
    await page.waitForTimeout(time);
  }
  async getTitle() {
    return await page.title();
  }
  async getUrl() {
    return await page.url();
  }
  async takeDesktopSnapShot() {
    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot({
      failureTresholdType: "pixel",
      failureThreshold: 2000,
      customSnapshotIdentifier: await this.getTitle(),
      customSnapshotsDir: `./jest-test/snapshots/desktop`,
      customDiffDir: `./jest-test/snapshots/desktop/diff`,
    });
  }
  async takeMobileSnapShot(deviceName) {
    await page.emulate(puppeteer.devices[deviceName]);
    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot({
      failureTresholdType: "pixel",
      failureThreshold: 2000,
      customSnapshotIdentifier: `${await this.getTitle()}`,
      customSnapshotsDir: `./jest-test/snapshots/mobile`,
      customDiffDir: `./jest-test/snapshots/mobiles/diff`,
    });
  }
}

describe("Google Test", () => {
  beforeAll(async () => {
    jest.setTimeout(150000);
  });
  it("should open google homepage", async () => {
    await page.goto("https://google.com");
    await page.waitForTimeout(5000);
  });
});

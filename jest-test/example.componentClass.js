import HomePage from "./pages/HomePage";

describe("Example", () => {
  let homepage;

  beforeAll(async () => {
    jest.setTimeout(150000);
    homepage = new HomePage();
  });

  it("homepage should work", async () => {
    await homepage.visit();
  });

  it("navbar should be displayed", async () => {
    await homepage.isNavBarDispalyed();
  });
});

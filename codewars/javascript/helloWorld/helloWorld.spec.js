const helloWorld = require("./helloWorld");

describe("helloWorld", () => {
  it("should return a greeting", () => {
    expect(helloWorld()).toBe("Hello, world!");
  });
});

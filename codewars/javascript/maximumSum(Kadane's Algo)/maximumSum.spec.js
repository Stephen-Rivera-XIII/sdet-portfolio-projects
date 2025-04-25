const maxSequence = require("./maximumSum");

describe("maxSequence", () => {
  // happy path
  it("should return the sum an array with all positive numbers", () => {
    expect(maxSequence([1, 2, 3, 4, 5])).toBe(15);
  });
  it("should return the maximum sum of a subarray", () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  it("should return the maximum sum with alternating spikes in numbers", () => {
    expect(maxSequence([1, -1, 2, -1, 3, -1])).toBe(4);
  });
  it("should return a single positive number amongst negatives", () => {
    expect(maxSequence([-1, -4, -1, -6, -3, 5, -3, -6, -5])).toBe(5);
  });
  //zero cases
  it("should return 0 for an array filled with negative numbers", () => {
    expect(maxSequence([-1, -3, -5, -7])).toBe(0);
  });
  it("should return return 0 for an array filled with 0s", () => {
    expect(maxSequence([0, 0, 0, 0, 0])).toBe(0);
  });
  // edge cases
  it("should return 0 for an empty array", () => {
    expect(maxSequence([])).toBe(0);
  });
  it("should return 0 for an array with strings of numbers", () => {
    expect(maxSequence(["1", "2", "3", "4", "5"])).toBe(0);
  });
  it("should return 0 for an array with any type other than number", () => {
    expect(maxSequence([1, "2", true, [3]])).toBe(0);
  });
  it("should return 0 for any input that is not an array", () => {
    expect(maxSequence(2)).toBe(0);
  });
});

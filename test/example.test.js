import { describe, it, expect } from "vitest";
import LongestString from "../src/example.js";

// test suite
describe("example.LongestString", () => {
  // test case
  it("should return the longest string", () => {
    const result = LongestString("hello", "world");
    // assertions
    expect(result).toBe("hello");
  });
});

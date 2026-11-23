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

  it("should return the first string when both strings are of equal length", () => {
    const result = LongestString("test", "code");
    expect(result).toBe("test");
  });

  it("should return the second string when it is longer than the first", () => {
    const result = LongestString("short", "longer");
    expect(result).toBe("longer");
  });
  it("should return the first string when both strings are empty", () => {
    const result = LongestString("", "");
    expect(result).toBe("");
  });
});

import { describe, it, expect } from "vitest";
import LongestString from "../src/example-longest-string.js";
import IsPrime from "../src/example-is-prime.js";

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
  it("shoud handle empty strings correctly", () => {
    const result = LongestString("", "non-empty");
    expect(result).toBe("non-empty");
  });
  it("should return the first string when second strings are empty", () => {
    const result = LongestString("non-empty", "");
    expect(result).toBe("non-empty");
  });
  it("should ignore leading/trailing whitespace", () => {
    const result = LongestString("  hi  ", "world");
    expect(result).toBe("world");
  });
});

// is Prime test suite

describe("example.IsPrime", () => {
  it("should return true for small prime numbers", () => {});
  it("should return false for non prime numbers", () => {});
  it("should return matching result in an array using toEqual", () => {});
  it("should detects prime within a filtered list", () => {});
  it("should throw an error when passed a non-number", () => {});
});

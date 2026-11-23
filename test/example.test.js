import { describe, it, expect } from "vitest";
import LongestString from "../src/example-longest-string.js";
import IsPrime from "../src/example-is-prime.js";

//Longest string test suite
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
  it("should return true for small prime numbers", () => {
    const result = IsPrime(2);
    expect(result).toBe(true);
    const result2 = IsPrime(3);
    expect(result2).toBeTruthy();
  });
  it("should return false for non prime numbers", () => {
    const result = IsPrime(4);
    expect(result).toBe(false);
    const result2 = IsPrime(9);
    expect(result2).toBeFalsy();
  });
  it("should return matching result in an array using toEqual", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.map(IsPrime);
    expect(result).toEqual([false, true, true, false, true]);
  });
  it("should detects prime within a filtered list", () => {
    const number = [1, 2, 3, 4, 5];
    const result = number.filter(IsPrime);
    expect(result).toEqual([2, 3, 5]);
    expect(result).toContain(5);
    expect(result).not.toContain(4);
  });
  it("should throw an error when passed a non-number", () => {
    const result = () => IsPrime("not a number");
    // any of the following assertions can be used to check for thrown errors
    expect(result).toThrow();
    expect(result).toThrow("input must be a number");
  });
  it("should have correct type for result", () => {
    const result = IsPrime(3);
    const result2 = IsPrime(25);
    expect(result).toBeTypeOf("boolean");
    expect(typeof result2).toBe("boolean");
  });
});

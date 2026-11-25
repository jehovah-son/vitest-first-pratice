import { describe, it, expect } from "vitest";
import LongestString from "../src/example-longest-string.js";
import IsPrime from "../src/example-is-prime.js";
import ShippingCost from "../src/example-shipping-cost.js";

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

// is Prime test suite   1

// describe("example.IsPrime", () => {
//   it("should return true for small prime numbers", () => {
//     const result = IsPrime(2);
//     expect(result).toBe(true);
//     const result2 = IsPrime(3);
//     expect(result2).toBeTruthy();
//   });
//   it("should return false for non prime numbers", () => {
//     const result = IsPrime(4);
//     expect(result).toBe(false);
//     const result2 = IsPrime(9);
//     expect(result2).toBeFalsy();
//   });
//   it("should return matching result in an array using toEqual", () => {
//     const numbers = [1, 2, 3, 4, 5];
//     const result = numbers.map(IsPrime);
//     expect(result).toEqual([false, true, true, false, true]);
//   });
//   it("should detects prime within a filtered list", () => {
//     const number = [1, 2, 3, 4, 5];
//     const result = number.filter(IsPrime);
//     expect(result).toEqual([2, 3, 5]);
//     expect(result).toContain(5);
//     expect(result).not.toContain(4);
//   });
//   it("should throw an error when passed a non-number", () => {
//     const result = () => IsPrime("not a number");
//     // any of the following assertions can be used to check for thrown errors
//     expect(result).toThrow();
//     expect(result).toThrow("input must be a number");
//   });
//   it("should have correct type for result", () => {
//     const result = IsPrime(3);
//     const result2 = IsPrime(25);
//     expect(result).toBeTypeOf("boolean");
//     expect(typeof result2).toBe("boolean");
//   });
// });

// is Prime test suite 2

describe("examples.IsPrime", () => {
  it("treat 0 and 1 as non-prime, and 2 as prime", () => {
    const number = [0, 1, 2];
    const result = number.map(IsPrime);
    expect(result).toEqual([false, false, true]);
  });
  it("return false for all even numbers > 2", () => {
    const result = IsPrime(4, 9);
    expect(result).toBeFalsy();
  });
  it("identifies common primes", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.filter(IsPrime);
    expect(result).toContain(2);
    // or
    const result2 = IsPrime(5);
    expect(result2).toBe(true);
  });
  it("return false for perfect square reliably", () => {
    const result1 = IsPrime(49);
    expect(result1).toBe(false);
    const result2 = IsPrime(49);
    expect(result2).toBe(false);
  });
  it("return false for non-integers", () => {
    const result = IsPrime(2.5);
    expect(result).toBeFalsy();
  });
  it("should throw an error when passed a non-number input", () => {
    const result = () => IsPrime("not a number");
    // any of the following assertions can be used to check for thrown errors
    expect(result).toThrow();
    expect(result).toThrow("input must be a number");
  });
});

// SHIPPING COST TEST SUITE

describe("example.ShippingCost", () => {
  // it("should return a number", () => {
  //   const result = ShippingCost(5);
  //   expect(result).toBeTruthy;
  // });
  it.each([
    { weight: 0.5, expected: 3.99 },
    { weight: 3.38, expected: 5.99 },
    { weight: 10.16, expected: 8.99 },
    { weight: 70.4, expected: 14.99 },
  ])(
    "should charge correct prices for the interior weight",
    ({ weight, expected }) => {
      const result1 = ShippingCost(weight);
      expect(result1).toBe(expected);
    },
  );

  // boundary testing
  it.each([
    { weight: 1, expected: 3.99 },
    { weight: 5, expected: 5.99 },
    { weight: 20, expected: 8.99 },
    { weight: 20.1, expected: 14.99 },
  ])("should charge correct prices at boundaries", ({ weight, expected }) => {
    const result1 = ShippingCost(weight);
    expect(result1).toBe(expected);
    // const result2 = ShippingCost(5);
    // expect(result2).toBe(5.99);
    // const result3 = ShippingCost(20);
    // expect(result3).toBe(8.99);
    // const result4 = ShippingCost(20.1);
    // expect(result4).toBe(14.99);
  });

  it("should apply 'FREESHIPPING' coupon exactly", () => {
    const result = ShippingCost(40, "FREESHIPPING");
    expect(result).toBe(0);
  });
  it("should ignore non-matching coupon ", () => {
    const result1 = ShippingCost(1, "freeshipping");
    expect(result1).toBe(3.99);

    const result2 = ShippingCost(1);
    expect(result2).toBe(3.99);
  });
  it("should throw an error for invalid weight", () => {
    const result = () => ShippingCost(0);
    expect(result).toThrow();
  });
  it("should throw an error if coupon is not a string", () => {
    const result = () => ShippingCost(0, null);
    expect(result).toThrow();
  });
});

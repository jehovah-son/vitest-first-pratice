export default function ShippingCost(weight, coupon = "") {
  if (typeof weight !== "number") throw new Error("weight must be a number");
  if (typeof coupon !== "string") throw new Error("coupon must be a string");
  if (weight <= 0) throw new Error("weight must be greater than 0");

  if (coupon === "FREESHIPPING") return 0;

  if (weight <= 1) return 3.99;

  if (weight <= 5) return 5.99;

  if (weight <= 20) return 8.99;
  return 14.99;
}

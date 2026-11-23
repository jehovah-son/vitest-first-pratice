export default function IsPrime(num) {
  if (typeof num !== "number") {
    throw new Error("input must be a number");
  }
  if (num <= 1) {
    return false;
  }
  //   if (num <= 3) {
  //     return true;
  //   }
  //   if (num % 2 === 0 || num % 3 === 0) {
  //     return false;
  //   }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

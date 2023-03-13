const { isPrime, isPrimeOptimized } = require("./primeNumber");

test("is prime number", () => {
  expect(isPrime(5)).toBeTruthy();
  expect(isPrime(4)).not.toBeTruthy();
  expect(isPrime(17)).toBeTruthy();
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(0)).not.toBeTruthy();

  expect(isPrimeOptimized(5)).toBeTruthy();
  expect(isPrimeOptimized(4)).not.toBeTruthy();
  expect(isPrimeOptimized(17)).toBeTruthy();
  expect(isPrimeOptimized(2)).toBeTruthy();
  expect(isPrimeOptimized(0)).not.toBeTruthy();
  expect(isPrimeOptimized(35)).not.toBeTruthy();
});

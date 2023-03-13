/*
  problem - give a natural number N, determine if the number is prime or not

  a prime number is a natural number greater than 1 that is not a product 
  of two smaller natural numbers
*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
  // O(n)
}

/* 
  optimized variant

  integers larger than the square root do not need to be checked because
  whenever 'n = a * b', one of two factors 'a' and 'b' is less than or equal
  to the square root of 'n'
*/

function isPrimeOptimized(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
  // O(n)
}

module.exports = { isPrime, isPrimeOptimized };

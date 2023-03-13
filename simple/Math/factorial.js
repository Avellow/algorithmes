/* 
  problem - дано число n , найти факториал числа n
  факториал - произведение натуральных чисел от 1 до n

  factorial(4) = 4 * 3 * 2 * 1 = 24
*/

// my try
function factorial(n) {
  if (n < 0) throw new Error("number should be more or equal 0");
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
  // O(n)
}

module.exports = factorial;

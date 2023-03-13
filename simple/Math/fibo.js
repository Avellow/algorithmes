/* 
  problem - дано число n , найти первые n элементов последовательности фибоначи 
  последовательность, в которой каждое число - сумма двух предыдущих
  первые числа 0 и 1

  fibo(2) = [0, 1]
  fibo(3) = [0, 1, 1]
  fibo(7) = [0, 1, 1, 2, 3, 5, 8]
*/

// my first IMPLEMENTATION
function fibo(n) {
  const result = [0, 1];

  while (n > result.length) {
    const lastNum = result[result.length - 1];
    const penultimateNum = result[result.length - 2];
    result.push(lastNum + penultimateNum);
  }

  return result;
  /*
    сложность O(n)
  */
}

module.exports = fibo;

// from material

function fibo2(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

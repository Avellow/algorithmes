/* 
  recursion is a problem solving technique where the solution 
  depends on solutions to smaller instances of the same problem

  recursion is when a function calls itself

  why? a great techinque to simplify your solution

  if you find yourself breaking down your problem into smaller versions
  of the same problem, recursion is very useful

  should have a base case - a condition to terminate the recursion
  might simplify solution but it does not always translatd to a faster solution
*/

const cache = new Map();

function recursiveFibo(n) {
  if (n < 2) {
    return n;
  }

  if (cache.has(n)) {
    return cache.get(n);
  } else {
    const first = recursiveFibo(n - 1);
    cache.set(n - 1, first);
    const second = recursiveFibo(n - 2);

    return first + second;
  }
}

console.log("fibo", recursiveFibo(120));

function recursiveFactorial(n) {
  if (n === 0) return 1;

  return n * recursiveFactorial(n - 1);
}

console.log("factorial", recursiveFactorial(4));

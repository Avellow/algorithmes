/* 
  problem - given a positive integer 'n', determine if the number is a power of 2 or not

  
*/

//function isPowerOfTwo(n) {
//  if (n < 1) {
//    return false;
//  }

//  while (n > 1) {
//    if (n % 2 !== 0) {
//      return false;
//    }
//    n = n / 2;
//  }

//  return true;
//  // O (log n)
//}

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0; // O(1)
}

/* explanation 
  binary code - 1 -> 1; 2 -> 10; 4 -> 100; 8 -> 1000
  & - Binary bitwise operator (AND)
  https://tproger.ru/problems/explaination-what-the-following-code-do/

  к примеру 8 и(&) 7 -> 1 0 0 0 * 0 1 1 1 = 0 0 0 0 -> 0
            9 & 8 -> 1 0 0 1 * 1 0 0 0 = 1 0 0 0 -> 8 != 0

*/

module.exports = isPowerOfTwo;

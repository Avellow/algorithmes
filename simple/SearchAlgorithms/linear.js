/* 
  problem - given an array of n elements and a target element 't',
  find the index of 't' in the array. Return -1 if the target element
  is not found
*/

function linear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
  // O(n)
}

console.log(linear([1, 2, 3, 4], 5));

/* 
  problem - given a SORTED (!!!!) array of n elements and a target element 't',
  find the index of 't' in the array. Return -1 if the target element
  is not found
*/

function binary(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const element = arr[middleIndex];

    if (element === target) {
      return middleIndex;
    } else if (element < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
  // O (log n)
}

console.log(binary([], 0));
console.log(binary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], -5)); // 11 items
console.log(binary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], 156));
console.log(binary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], 2));
console.log(binary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], 200));

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
console.log("____________________");

function recursiveBinary(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  const element = arr[middleIndex];

  if (element === target) {
    return middleIndex;
  } else if (element < target) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}

console.log(recursiveBinary([], 0));
console.log(recursiveBinary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], -5)); // 11 items
console.log(recursiveBinary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], 156));
console.log(recursiveBinary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], 2));
console.log(recursiveBinary([-5, -2, 1, 2, 3, 4, 14, 18, 29, 100, 156], 200));
console.log("____________________");

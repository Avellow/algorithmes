/* 
  problem - given an array of integers, sort the array

*/

function bubbleSort(arr) {
  let hasBeenSwapped;

  do {
    hasBeenSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let firstNum = arr[i];
      let secondNum = arr[i + 1];

      if (firstNum > secondNum) {
        arr[i] = secondNum;
        arr[i + 1] = firstNum;
        hasBeenSwapped = true;
      }
    }
  } while (hasBeenSwapped);
  // O (n ^ 2)
}

const arr = [-2, 0, 10, 3, 1, 14, 13];
bubbleSort(arr);
console.log(arr);

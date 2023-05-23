// quick sort algorithm
const arr = [-6, 20, 8, -2, 4, -2, 19023, 8964, -199, 54];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const rightPart = [];
  const leftPart = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      leftPart.push(arr[i]);
    } else {
      rightPart.push(arr[i]);
    }
  }

  return [...quickSort(leftPart), pivot, ...quickSort(rightPart)];
}

console.log(quickSort(arr));

// худший сценарий - О(n ^ 2)
// примерный - О(n * logn)

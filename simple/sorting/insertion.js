// insertion algorithm

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i]; // number to insert
    let j = i - 1;
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = nti;
  }
}

const arr = [8, 20, -2, -4, -6];
insertionSort(arr);
console.log(arr);

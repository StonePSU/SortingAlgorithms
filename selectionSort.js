function swap(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, i, min);
    }
  }
  return arr;
}

selectionSort([5, 78, 32, 54, 39, 21, 64, 38]);

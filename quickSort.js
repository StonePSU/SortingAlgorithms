function pivot(arr, start = 0, end = arr.length + 1) {
  let pivotIndex = start;
  let pivot = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

//pivot([4, 2, 6, 7, 3, 10, 8])

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let index = pivot(arr, start, end);
    let left = quickSort(arr, start, index - 1);
    let right = quickSort(arr, index + 1, end);
  }

  return arr;
}

quickSort([4, 2, 6, 7, 3, 10, 8]);

/*
[4, 2, 6, 7, 3, 10, 8]
[4, 2, 6, 7, 3, 10, 8]
[4, 2, 6, 7, 3, 10, 8]
[4, 2, 3, 7, 6, 10, 8]

[3, 2, 4, 7, 6, 10, 8]
*/

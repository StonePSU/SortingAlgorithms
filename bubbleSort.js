function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let noSwaps; // declare variable to track whether or not we are swapping.  if we didn't swap on the last pass then we are done.
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    console.log(`PASS ${i}`);
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

bubbleSort([5, 2, 5, 7, 2, 7, 32, 46, 3, 12]);

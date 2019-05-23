function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([5, 39, 29, 30, 87, 28]);

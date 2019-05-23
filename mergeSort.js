function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];

  // loop executes while BOTH arrays still have values to compare
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // if, after the first loop ends, there are still values in the first array simply add the remaining values
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // if, after the first loop ends, there are still values in the second array simply add the remaining values
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // get the midpoint of the array and split into left and right halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 4, 56, 38]);

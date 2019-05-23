function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = digitCount(arr[i]);
    if (count > max) {
      max = count;
    }
  }

  return max;
}

function radixSort(arr) {
  let max = mostDigits(arr);

  for (let k = 0; k < max; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      buckets[getDigit(arr[i], k)].push(arr[i]);
    }

    arr = [].concat(...buckets);
    console.log(arr);
  }

  return arr;
}

radixSort([484, 23, 5593, 1103, 12, 447, 3929]);

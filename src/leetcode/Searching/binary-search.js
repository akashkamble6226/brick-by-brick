//this is a fast searching algorithm
// only pre condition is , the array should be sorted

const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const target = 9;

function doBinarySearch(ar, t) {
  let start = 0;
  let end = ar.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (ar[mid] === target) {
      return mid; // index found
    }

    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(doBinarySearch(arr, target));

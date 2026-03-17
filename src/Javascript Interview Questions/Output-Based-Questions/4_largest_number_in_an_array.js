const arr = [10, 2000, 4, 7, 33, 55];

function findLargestNum(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  console.log("largest is ", largest);
}
findLargestNum(arr);

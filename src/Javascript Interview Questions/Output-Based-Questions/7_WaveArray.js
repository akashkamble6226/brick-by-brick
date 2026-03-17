// given a sorted array , need to swap elements , to make them wave form

// eg - given array is - [2,4,7,8,10]
// output will be - [4,2,8,7,10]

//thinking
// we need pair, that means we need criteria to stop at length - 1, not just length
// here we need to swap a pair every time, so we need to go to next pair after each iteration

const arr = [2, 4, 7, 8, 10];

function makeWaveArr(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

console.log(makeWaveArr(arr));


// Time & Space Complexity (Interview Ready)

// Time: O(n)

// Space: O(1) (in-place)
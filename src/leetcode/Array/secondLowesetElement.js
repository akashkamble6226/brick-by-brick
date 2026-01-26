//question - given an array find out the second lowest element from array

// thinking
// if the array is gaurenteed to be distinct , then
// use sort and return arr[1] elemtn

// think like this - “When a new best friend arrives, the old best friend doesn’t disappear — it moves to second place.”

const arr = [5, 2, 8, 1, 3];

// const sor = arr.sort((a, b) => a - b);
// console.log(sor[1]);
//time complexity is -> O(n log n )

// if its not gaurenteed then below is the O(n) solution
function findSecondLowest(arr) {
  let lowest = Infinity;
  let secondLowest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current < lowest) {
      secondLowest = lowest;// this has to first
      lowest = current;
    } else if (current > lowest && current < secondLowest) {
      secondLowest = current;
    }
  }

  return secondLowest;
}

console.log(findSecondLowest(arr));

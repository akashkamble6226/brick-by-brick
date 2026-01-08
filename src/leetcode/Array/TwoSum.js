// Given an array and a target, find two numbers that add up to the target.
let arr = [1, 0, 6, 7, 9];
const sum = 10;

// {1:0,}

// step 1 -> think
// step 2 -> bruteforce
// step 3 -> optimal solutions
// step 4 -> time and space complexity

// brute force approch
// Time complexity -> O(n²)
// space complexity -> O(1)
function findTwoSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum === arr[i] + arr[j]) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Optimized Approch
// brute force approch
// Time complexity -> O(n)
// space complexity -> O(n)
function findTwoSumOther(arr, sum) {
  let storage = new Map();
  for (let i = 0; i < arr.length; i++) {
    let compl = sum - arr[i];
    if(storage.has(compl)){
      return [storage.get(compl), i]
    }
    storage.set(arr[i], i)
  }
}
console.log(findTwoSumOther(arr, sum));

// Time Complexity
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {

// The outer loop runs n times

// The inner loop runs (n − i − 1) times

// Total comparisons ≈
// (n-1) + (n-2) + ... + 1 = n(n-1)/2

// 👉 Time Complexity = O(n²)

// Even though you return early when you find the pair,
// in the worst case (no pair exists or the pair is at the very end), you still check almost all combinations.

// 🧠 Space Complexity

// You are not using any extra data structures
// Only a few variables (i, j)
// The returned array [arr[i], arr[j]] is constant-sized
// 👉 Space Complexity = O(1) (constant space)

// question is
// you have given 2 strings
// 1st is abgtu
// 2nd is atu

// we need to check if second string element present in same order
// by neglecting in between characters
const firstString = "abgtu";
const secondString = "atu";

function checkHasSubsequence() {
  let j = 0;
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === secondString[j]) {
      j++;
    }
  }
  return j === secondString.length;
}

console.log(checkHasSubsequence());


// Time & Space Complexity 🚀
// Time: O(n)
// Space: O(1)
// Much better than nested loops.

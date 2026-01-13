// question is
// you have given 2 strings
// 1st is abgtu
// 2nd is atu

// we need to check if second string element present in same order
// by neglecting in between characters
const firstString = "abgtu";
const secondString = "atu";

function checkHasSubsequence() {
  let sec = "";
  for (let i = 0; i < firstString.length; i++) {
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i] === secondString[j]) {
        sec += firstString[i];
        i++;
        j++;
      }
    }
  }
  console.log("sec", sec);
  return sec === secondString;
}

console.log(checkHasSubsequence());
//not working
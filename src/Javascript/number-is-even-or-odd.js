// check given number is even or odd

// 1) using remainder
// 2) using bitwise and
// 3) using substract way
// 4) using divide and multiply way

let num = 5;
// const ans = num % 2 === 0 ? "Even" : "odd";
// console.log(ans)

// const ans = num & 1  ? "Odd": "Even"

// while (num > 1) {
//   num -= 2;
// }
// let out;
// if (num === 1) {
//   out = "ODD";
// } else {
//   out = "EVEN";
// }

function doDivMul(num) {
  const first = Math.floor(num / 2);
  const second = first * 2;
  let ans;
  if (num === second) {
    ans = "EVEN";
  } else {
    ans = "ODD";
  }
  return ans
}
console.log(doDivMul(num));

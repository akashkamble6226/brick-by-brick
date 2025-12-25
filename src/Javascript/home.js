// let user = {
//   name: "Piyush",
//   age: 24,
//   childObj: {
//     name: "Roadside Coder",
//     getDetails() {
//       console.log(this.name);
//     },
//   },
// };

// 1 function array , sum -> matching values which equals to sum

let input = [2, 7, 11, 15, 3, 6];
let sum = 9;

const findMatching = (arr, sum) => {
  // find those two values
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// n * n
console.log(findMatching(input, sum));

//question -> convert this nested array into single array
// [[1,2],[3,4],[5,6]]
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const nestedArr = [7, [1, 2], [3, 4], [5, 6]];
// using pre-built methods
//1st way
console.log(nestedArr.flat());
//2nd way
console.log([].concat(...nestedArr));
//3rd way
const out = nestedArr.reduce((acc, item) => acc.concat(item), []);
console.log(out);

// ______________
// using custome code

let flattendArray = [];
function flatIt(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattendArray.push(arr[i][j]);
    }
  }
}
flatIt(arr)
console.log("Custome", flattendArray);

// -----------------
// to handle deep nested using Recursion
let flattendArray2 = [];
function flatIt2(nestd) {
  for (let i = 0; i < nestd.length; i++) {
    if(Array.isArray(nestd[i])){
        flatIt2(nestd[i])
    } else {
        flattendArray2.push(nestd[i])
    }
  }
}
flatIt2(nestedArr)
console.log("Custome2", flattendArray2);
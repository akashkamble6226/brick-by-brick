let arr = [1, 0, 4, 4, 4, 5, 0, 5];

// k = 3 (return three element which has highest frequency)

// first questions - how to maintain Object or Map with frequencies
// using map
// function returnKnumberofMaxFrequencyElements(arr, k) {
//   let store = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (store.has(arr[i])) {
//       store.set(arr[i], store.get(arr[i]) + 1);
//     } else {
//       store.set(arr[i], 1);
//     }
//   }
//   console.log(store);
// }

//using default methods
function returnKnumberofMaxFrequencyElements(arr, k) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    store[arr[i]] = (store[arr[i]] || 0) + 1;
  }
  console.log(store);
  // convert to array & sort by frequency desc
  return Object.entries(store)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => Number(item[0]));
}
const ans = returnKnumberofMaxFrequencyElements(arr, 3);
console.log(ans)

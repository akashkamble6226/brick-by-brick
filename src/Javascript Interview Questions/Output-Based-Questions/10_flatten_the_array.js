const arr = [1, 2, [3, 4, [5, 6]]];

function flattenTheArray(arr) {
  let result = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      result = result.concat(flattenTheArray(i));
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(flattenTheArray(arr))

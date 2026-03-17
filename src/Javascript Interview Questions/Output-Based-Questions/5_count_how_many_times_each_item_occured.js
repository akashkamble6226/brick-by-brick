const arr = [1, 2, 4, 4, 5, 7, 9, 8, 5, 9];

function occurenceCount(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = (result[arr[i]] || 0) + 1;
  }

  for (let key in result) {
    if (result[key] === 1) {
      console.log(key);
    }
  }

  console.log(result);
}

occurenceCount(arr);

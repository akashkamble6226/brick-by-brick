// polyfill of filter

Array.prototype.myNewFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};


const arr = [1,2,4,6]

const ans = arr.myNewFilter((item) => item % 3 === 0);

console.log(ans)

// polyfill of map
Array.prototype.myNewMap = function(cb){
    let temp = [];

    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }

    return temp
}

const arr = [1,2,3];

const res = arr.myNewMap((item) => item * 2);
console.log(res)
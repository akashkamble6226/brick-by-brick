const arr = [10, 20, 30, 40, 50, 60, 60, 50, 10];

function removeDup(arr){
     return new Set(arr);
}

console.log(removeDup(arr))
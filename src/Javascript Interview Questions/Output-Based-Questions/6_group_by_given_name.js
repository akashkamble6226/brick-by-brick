const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
];

// => 

//     {
//         "Fruite" [{ name: "Apple", category: "Fruit" },],
//         "Vegetable"[{ name: "Carrot", category: "Vegetable" },]
//     }

function groupBy(arr, type){
    let res = {}

    for(let item of arr){
        const cate = item[type];

        if(!res[cate]){
            res[cate] = [];
        }

        res[cate].push(item)
    }

    console.log(res)
}


groupBy(products, "category")
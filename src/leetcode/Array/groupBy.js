const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
];

function groupBy(lst, cat) {
  let obj = {};

  for (let item of lst) {
    const type = item[cat];
    if (!obj[type]) {
      obj[type] = [];
    }
    obj[type].push(item);
  }

  return obj;
}

console.log(groupBy(products, "category"));

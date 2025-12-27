// question - filter out names whose ids match with users id

let users = [1, 2, 3, 4, 6, 5];

let names = [
  { id: 1, name: "Akash" },
  { id: 5, name: "Jems" },
  { id: 3, name: "Raghav" },
];

const ans = names.flatMap((item) => (users.includes(item.id) ? item.name : []));
console.log(ans);

//question - you have given an array , if item is even then give me square of it else nothing

const ans2 = users.flatMap((item) => (item % 2 === 0 ? item * item : []));
console.log(ans2);

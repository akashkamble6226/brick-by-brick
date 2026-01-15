const animal = {
  name: "Jems",
  show: function () {
    console.log(`${this.name} is a good boy.`);
  },
};

const lion = {
  name: "Rocky",
  __proto__: animal,
};

lion.show();

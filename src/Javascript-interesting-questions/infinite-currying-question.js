function sum(num1) {
  return (num2) => {
    if (num2 === undefined) {
      return num1;
    } else {
      return sum(num1 + num2);
    }
  };
}

const res = sum(1)(2)(3)();
console.log(res);

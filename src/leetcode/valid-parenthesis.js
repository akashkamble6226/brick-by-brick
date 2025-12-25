// Q - ()[()]

const input = "()[())";

function isValid(input) {
  const stack = [];
  const para = "() [] {}";
  let index = 0;

  while (index < input.length) {
    stack.push(input[index]);
    index++;

    const open = stack[stack.length - 2];
    const close = stack[stack.length - 1];

    const together = open + close;

    if (para.includes(together)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isValid(input))

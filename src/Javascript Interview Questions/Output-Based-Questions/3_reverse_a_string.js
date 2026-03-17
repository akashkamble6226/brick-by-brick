const name = "Akash";

function reverseString(name) {
  let result = "";
  // one way
  const rev = name.split("").reverse().join("");
  //   console.log(rev);

  //other way
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  console.log("res", result);
}

reverseString(name);

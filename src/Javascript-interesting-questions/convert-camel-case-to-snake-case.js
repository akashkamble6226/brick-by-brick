// convert someData => some_data

const snakeCase = str => {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

console.log(snakeCase("jemsBond"));
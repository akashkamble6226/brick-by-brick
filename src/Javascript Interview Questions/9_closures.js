// A function remembers the variables from its outer (lexical) scope 
// even after the outer function has finished executing.

// think of closure like:

// A function carrying a backpack of variables from its outer scope.

// Even when the outer function is gone,
// the backpack still exists.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const f = outer();
f();
f();
f();

// What happens here?

// outer() runs.

// It creates variable count.

// It returns inner.

// Normally count should disappear.

// But closure keeps count alive.

// So inner() remembers count.

// ______________________________

// Another example

function greet(name){
    return function (){
        console.log(`Hello there, ${name}`);
    }
}

const he = greet("akash");
he()


// real world example 

function createBankAccount(balance){
    return {
        deposit(amt){
            balance = balance + amt;
            console.log(balance)
        },
        getBalance(){
            return balance;
        }
    }
}

const acc = createBankAccount(1000);
acc.deposit(500)
console.log(acc.getBalance())

// But here is the important part 👇

// Both functions remember the variable balance because of closure.
// So even though createBankAccount() finished execution, the variable still exists in memory.

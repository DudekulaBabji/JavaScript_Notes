//Higher order function
//a function which takes another function as an argument or a returns a function from it is known as hof




//example
//Takes a function as argument

function greet(name, callback) {
  console.log("Hello " + name);
  callback();   // calling the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Babji", sayBye);

//example
//Higher Order Function Returns a Function

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

let double = multiply(2);
console.log(double(5)); // 10

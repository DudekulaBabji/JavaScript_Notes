//1)var 
// var is old way used before ES6 to declare variable
//if any variable is give in scope or without scope it will execute
//not modify

//example for var
var name = "Babji";
console.log(name); // Babji

var name = "Krishna"; // re-declaration allowed
console.log(name); // Krishna

name = "Sai"; // re-assignment allowed
console.log(name); // Sai

//scope example
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ Works (function-scoped)
}
test();

//hoisting example
console.log(a); // undefined
var a = 10;


//2)let
//let introduced in ES6 - use it for most cases
//if any varaible is diclaring with inside scope it access only inside the scope 
//it modify

//example for let
let city = "Hyderabad";
console.log(city); // Hyderabad

city = "Chennai"; // ✅ can re-assign
console.log(city);

// let city = "Delhi"; ❌ Error: can't re-declare

//scope example for let
if (true) {
  let x = 20;
  console.log(x); // 20
}
// console.log(x); ❌ Error (block scope)

//hoisting example
console.log(num); // ❌ ReferenceError
let num = 5;


//3)const
//const introduced in ES6- use it when the variable value should not change
//if any variable is disclered  by using const it is not accesable outside scope 
//it is not modified

//example
const country = "India";
console.log(country); // India

// country = "USA"; ❌ Error (can't re-assign)



// 
function example() {
  var a = 10;
  let b = 20;
  const c = 30;

  if (true) {
    var a = 100; // same variable (function scope)
    let b = 200; // new variable (block scope)
    const c = 300; // new variable (block scope)
    console.log(a, b, c); // 100, 200, 300
  }

  console.log(a, b, c); // 100, 20, 30
}
example();


//hoisting
//js allows a programmer to use a variable before the declaration statement
//variable hositing is only supported by "var" where as "let" & "const" doesn't support varaible hoisting

//example
console.log(a); // undefined
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c); // 10, 20, 30

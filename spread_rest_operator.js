//spread operator
//allows you to expand elements of an array object into individual elements

//1)example
const arr1 = [1,2,3]
const arr2=[...arr1] // copies arr1
console.log(arr2)  //[1,2,3]

//2)example 
//It’s also used to pass array elements as individual arguments.

function add(a,b,c){
    return a+b+c
}

const nums=[1,2,3]
console.log(add(...nums)) //6

//Rest operator
//allows you to collect multiple values (arguments, array items, object) into a single variable
function test(a,...b){
    console.log(a) // 10
    console.log(b) //[20,30]
}
test(10,20,30)

//example
const person = { name: "Krishna", age: 22, city: "Hyderabad" };

const { name, ...details } = person;

console.log(name);    // Krishna
console.log(details); // { age: 22, city: "Hyderabad" }



// Difference Between Spread     and                 Rest
// Feature	Spread Operator (...)	         Rest Operator (...)
// Purpose	Expands elements	             Collects elements
// Used in	Function calls, arrays, objects	 Function parameters, destructuring
// Example	sum(...arr)	                     function sum(...nums)


//example to compare both

// Spread → Expands
const arr = [1, 2, 3];
console.log(...arr);  // 1 2 3

// Rest → Collects
function show(...args) {
  console.log(args);
}
show(1, 2, 3);        // [1, 2, 3]


//3)Destructuring
//allows you to unpack values from arrays or objects into separate variables - all in single

//array destructing example
const [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

//object destructuring
const { name, age } = { name: "Babji", age: 22 };
console.log(name); // Babji
console.log(age);  // 22

//
const numbers = [1, 2, 3, 4];
const [first, , third] = numbers;

console.log(first); // 1
console.log(third); // 3

//using rest operator
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

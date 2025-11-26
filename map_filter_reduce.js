//1)Map
//this map() method used to loop through each element of an array  this method takes a callback function as an argument
//callback function is involved for each element of the array or object

//Transform each element and returns a new array
//used when you want to modify values

//example 

let nums = [1, 2, 3, 4];

let doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]


//example 2
const arr=[5,6,7,8,9]

function double(x){
    return x*2
}
function binary(x){
    return x.toString(2)
}
const output=arr.map(binary)
console.log(output)
//example 3
const users = [
{ firstName: "akshay", lastName: "saini", age: 26},
{ firstName: "donald", lastName: "trump", age: 75},
{ firstName: "elon", lastName: "musk", age: 50},
{ firstName: "deepika", lastName: "padukone", age: 26},
];

const output= users.map(function(x){
    return x.firstName +" " + x.lastName
})
console.log(output)

//2)filter()
//filter fuction is actually used to filter the value inside an array
//filter elements return a new Array
//Length becomes smaller or same
// used when you want to keep only elements that pass a condition


//example 1 
let nums = [1, 2, 3, 4, 5];

let even = nums.filter(n => n % 2 === 0);

console.log(even); // [2, 4]

//example 2
const arr=[5,1,3,2,6]
function even(x){
    return x%2===0
}
const output=arr.filter(even)
console.log(output)

//example 3
const users = [
{ firstName: "akshay", lastName: "saini", age: 26},
{ firstName: "donald", lastName: "trump", age: 75},
{ firstName: "elon", lastName: "musk", age: 50},
{ firstName: "deepika", lastName: "padukone", age: 26},
];

const output=users.filter(function (x) {
    return x.age>30    
}).map((x)=> x.firstName)
console.log(output)

//3)reduce
//reduces array to a single value
// use to excutes a function on each element of an array to reduce it to a single value
//used - sum, max, min, counting
//accumulator - starts with initialvalue and stores the result after each step
//currentvalue - the current element being processed

let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10




//example
const users = [
{ firstName: "akshay", lastName: "saini", age: 26},
{ firstName: "donald", lastName: "trump", age: 75},
{ firstName: "elon", lastName: "musk", age: 50},
{ firstName: "deepika", lastName: "padukone", age: 26},
];

const output=users.reduce(function (acc, crr) {
    if(acc[crr.age]){
        acc[crr.age] = ++acc[crr.age]
    }
    else{
        acc[crr.age]=1
    }
    return acc
},{})
console.log(output)



//Difference
// Feature	        map()	      filter()	            reduce()
// Returns	      New array	  New filtered array	  Single value
// Array length	  Same	      Smaller or same	      Always 1
// Purpose	      Transform	   Select & filter   	Combine & calculate
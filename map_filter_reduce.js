//1)Map
//this map() method used to loop through each element of an array  this method takes a callback function as an argument
//callback function is involved for each element of the array or object

const arr=[5,6,7,8,9]

function double(x){
    return x*2
}
function binary(x){
    return x.toString(2)
}
const output=arr.map(binary)
console.log(output)
//example
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

const arr=[5,1,3,2,6]
function even(x){
    return x%2===0
}
const output=arr.filter(even)
console.log(output)

//example
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
// use to excutes a function on each element of an array to reduce it to a single value
//used - sum, max, min, counting
//accumulator - starts with initialvalue and stores the result after each step
//currentvalue - the current element being processed

const num=[10,20,30,40]

const output= num.reduce(function (acc , crr) {
    return acc+ crr
},0)

console.log(output)

const max=num.reduce(function(acc, crr) {
    if(crr>acc){
        acc=crr
    }
    return acc
},0)
console.log(max)

// Step	acc	curr Result
// 1	0	10	10
// 2	10	20	30
// 3	30	30	60
// 4	60	40	100


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
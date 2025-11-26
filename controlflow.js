
//condition control statement
//1)if condition

var a=5
var b=8
if(a<b){
    console.log("b is greater than a")
}

//2)if else condition

var a= 5
var b=8
if(a>b){
    console.log("b is greather than a")
}
else{
    console.log("a is greather")
}

//3)if else if else

var a=5
var b=5
if(a<b){
    console.log("b is grather")
}
else if(a==b){
    console.log("a==b")
}
else{
    console.log("a is greather")
}

//4)switch
// A switch statement can replace multiple if checks
// The switch statement is used to execute one block of code among many based on the value of an expression.
var color="yellow"
switch (color) {
    case "blue":
        console.log("blue is choose")
        break;
    case "yellow":
        console.log("yellow choose")
        break;
    default:
      //code to execute if no case match
}

//Looping controll
//1)while loop
var a=1
while(a<=10){
    console.log(a)
    a++
}

//2)do while
//The do...while is used when you want to run a code block at least one time.
var a=1
do{
    console.log(a)
    a++
}
while (a<=10)

//3)for loop
for (let a= 1; a <=10; a++) {
    console.log(a)
}

//4)for of
//it is used for array
//it can do for iterables of array - indivial point looping checking
var ar=[1,2,3,4,5]
console.log(ar)
for(var res of ar){
    console.log(res)
}

//5)for-in used for object
//The for...in loop is primarily used for objects to access their property names (keys).
//to get key

var obj={
    name:"ram",
    age:23,
    gender:"male"
}
for(let res in obj){
    console.log(res)
}

//to get value
var obj={
    name:"ram",
    age:23,
    gender:"male"
}
for(let res in obj){
    console.log(obj[res])
}

//Optional chaining is a safe way to access nested object properties,even if the property doesnt exist
let pets={
    cat:{
        name:"Hari",
        age:20
    }
}
console.log(pets.dog?.name)
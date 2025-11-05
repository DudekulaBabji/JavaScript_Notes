//1)Function declearation & function statement
//creating function with function keyword
function name(){
    alert("hi")
}
name()

//for using parameters
function display(a,b)
{
    console.log(a*b)
}
display(5,8)

//2)Function expression
//It allows us to create a new function in the middle of any expression.
//creating a function which can be named function or name function & string into variable

const display= function(a,b) {
    console.log(a*b)
}
display(5,8)

//3)Arrow Functiong
//Arrow func introduced in ES6 version
//An arrow function is a shorter synatax for writing functions 

var display=(a,b)=>a*b 
var res= display(5,8)
console.log(res)

//4)Anonmus function
//a function without a name doesnt have own identity
//in any function reference is not given 
(function() {
    console.log("hello")
})
()

//fs nad fe  difference is  hoisting

//5)first class function

//first class citizens
//the abalitity of function  to be used as value and can be passed as a argument to another function
//functions are treated like any other variable
//store a function in a variable
//pass a function as an argument to another function
const b= function(param1){
    return function xyz(){
    }
}
console.log(b())
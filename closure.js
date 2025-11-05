//closure
//a function binds together with it lexical envirment
//function along with lexical scope bundle together forms a closure
//this enables a js programmer to use parent functions inside child function
function x(){
    var a=7
    function y(){
        console.log(a)
    }
    y()
}
x()

//we can pass a function inside the function parameteres also
function x(){
    var a=7
    
    y()
}
x(function y(){
        console.log(a)
    })
//
//when the y return the x has gone but in the clouser it assces the lexical of y and execute a value
function x(){
    var a=7
    function y(){
        console.log(a)
    }
    return y;
}
var z=x();
console.log(z);
z()

//Data hiding
//Data hiding is like we have a variable and we want privacy over it so that no other functions or other parts of the code can have access over it is called Data hiding or data privacy.
//In other words, we are just encapsulating the data so that other parts of the code can't have access to it.

function counter(){
    var count=0
    return function incrementCounter(){
        count++
        console.log(count)
    }
}

var counter1= counter()
counter1()
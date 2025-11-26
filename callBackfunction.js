//callback function
//taking a function that passing to a another function
//passing a function as an argument to another function 


//why 
// JavaScript uses callbacks to handle tasks that take time, such as
// loading data
// waiting for a timer
// handling user actions

hello(goodbye)
function hello(callback){
    console.log("hello")
    callback()
}

function goodbye(){
    console.log("goodbye")
}


function greet(name, callback) {
  console.log("Hello " + name);
  callback();   // calling the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Babji", sayBye);
// Output:
// Hello Babji
// Goodbye!

// Explanation
// greet() is the main function
// sayBye() is the callback function
// We pass sayBye as an argument to greet
// Inside greet, it runs after the main task
// So first it prints Hello Babji, then Goodbye!
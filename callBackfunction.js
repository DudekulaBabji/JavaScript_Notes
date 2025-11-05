//callback function
//taking a function that passing to a another function
//passing a function as an argument to another function 


hello(goodbye)
function hello(callback){
    console.log("hello")
    callback()
}

function goodbye(){
    console.log("goodbye")
}
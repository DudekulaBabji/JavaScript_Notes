//Event Loop
//JavaScript is single-threaded → it can run only one task at a time.
// manager that keeps checking and pushing tasks to the call stack

//1) Call Stack -> it will runs your code line-by-line 
//2) Web APIs(browser APIs) -> it will handle async task setTimeout, fetch , DOM events 
//3)callback queue -> it will store call backs waiting to run 
//4)microtask queue -> it will store promise callbacks 
//5)event loop -> keeps checking 
  //  if call stack is empty -> it need to push next task 



//example


//in the browser we have call stack , web api , callback ,event loop, console
//in first line it will goes through the console for start
//in web api it access the settimeout hold for 5 sec 
//in that time js not wait for 5 sec so it console the last line end
//after cb function hold in call stack que
//event loop check in call stack if any there in call back que then event loop access to the call stack
//then it console

console.log("start")

setTimeout(function cb () {
    console.log("callback");
}, 5000);
console.log("end")
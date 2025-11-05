//in the browser we have call stack , web api , callback ,event loop, console
//in first line it will goes through the console for start
//in web api it access the settimeout hold for 5 sec 
//in that time js not holf for 5 sec so it console the last line end
//after cb function hold in call stack que
//event loop check in call stack if any there in call back que then event loop access to the call stack
//then it console

console.log("start")

setTimeout(function cb () {
    console.log("callback");
}, 5000);
console.log("end")
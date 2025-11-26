//setInterval
//runs a function repeatedly, at specified intervals (in milliseconds).
//runs a function repeatedly after a fixed time

//example 
let count = 0;

setInterval(() => {
  count++;
  console.log("Count:", count);
}, 1000);

//how to stop setInterval
let count = 1;

let timer = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(timer);
  }
}, 1000);


//clearInterval method is used to stop the setInterval function from running further.
//it takes the interval ID returned by setInterval as an argument.


let count = 1;

let timer = setInterval(() => {
  console.log(count);
  count++;

  if (count === 6) {
    clearInterval(timer);
    console.log("Interval Stopped");
  }
}, 1000);

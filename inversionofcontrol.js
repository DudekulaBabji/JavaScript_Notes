//inversion of control
//Inversion of Control (IoC) means that you give control of your function execution to someone else (another function or system).


function getData(callback) {
  setTimeout(() => {
    callback("Here is the data");
  }, 2000);
}

getData((data) => {
  console.log(data);
});

// Detailed Explanation
// You expect the callback to run after 2 seconds.
// But YOU are not the one calling it.
// The browser/runtime decides when to call it.
// If something goes wrong (timers paused, errors), your callback may:
  // Run late
  // Run multiple times
  // Never run
// This uncertainty = IoC.

//to fix IoC
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here is the data");
    }, 2000);
  });
}

getData().then(data => console.log(data));

//inversion of control
//Inversion of Control (IoC) means that you give control of your function execution to someone else (another function or system).
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server");
    callback("Success");
  }, 2000);
}

fetchData(function (msg) {
  console.log("Callback executed:", msg);
});

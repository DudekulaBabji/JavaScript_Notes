# Synchronous Functions (Blocking Code)
- Synchronous code runs line by line, one after another.
- A line must finish completely before the next line starts.
- The execution of the program is paused if one of the statements take a very
long time.

✔ Blocks the execution
✔ Slow tasks stop everything
✔ Simple but can freeze the browser


# example
console.log("Start");

function longTask() {
  for (let i = 0; i < 1000000000; i++) {} // long loop
}

longTask(); // blocking the code

console.log("End");

# output
Start
(Delay... CPU is busy)
End


# Asynchronous Functions (Non-Blocking Code)
- Asynchronous code allows JavaScript to start a task, then continue running other code, and finish the task later.

✔ Does not block
✔ Uses callbacks, promises, async/await
✔ Perfect for API calls, timers, file loading

# example
console.log("Start");

setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);

console.log("End");

# output
Start
End
After 2 seconds

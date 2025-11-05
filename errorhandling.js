//no matter how great we are at programming but sometimes our scripts have errors they may occur because of our mistake
//try - code that may throw an error
//catch - handles the error
//finally - always runs(cleanup)
//throw new Error - create your own error intentionally
try {
  console.log("Start of try block");
  let result = a + 10; // ❌ 'a' is not defined — this will cause an error
  console.log(result);
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Code in finally always runs");
}


//try...catch with throw
try {
  let age = -5;
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Validation complete.");
}


//error handling in promise

const myPromise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("✅ Task completed successfully!");
  } else {
    reject("❌ Something went wrong!");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));


// error handling in promise chaining

new Promise((resolve, reject) => {
  resolve(10);
})
  .then((num) => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Step 2:", num);
    throw new Error("Something broke in Step 2!"); // ❌ Error happens
  })
  .then((num) => {
    console.log("Step 3:", num); // Skipped due to error
  })
  .catch((error) => {
    console.error("Caught an error:", error.message);
  })
  .finally(() => {
    console.log("Promise chain finished (success or fail).");
  });

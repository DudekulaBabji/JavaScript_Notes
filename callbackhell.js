//call back hell
//callback hell happens when you have many nested callback function, making the code hard to read, difficult to debug
//it asynchronous operations
//its is pyramid of doom

setTimeout(() => {
    console.log("step1")
    setTimeout(() => {
        console.log("step2")
        setTimeout(() => {
            console.log("step3")
        }, 3000);
    }, 2000);
}, 1000);

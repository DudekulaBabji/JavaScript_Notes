//1)promise.all()
//is a method that takes an array of promise and return a single promise
//it will not wait other promise after rejected
// resolve when all promises are fulfilled 
//rejects immediatly if any promise rejects 

const p1 = Promise.resolve(10)
const p2= new Promise((resolve)=>{
    setTimeout(() => {
        resolve(20)
    }, 1000);
})
const p3= new Promise((resolve)=>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

Promise.all([p1,p2,p3])
.then((results)=>{
    console.log("all promise resolved", results)
})
.catch((error)=>{
    console.error("one promise is break",error);
})

//2)promise.allSetteled()
//takes an array of promises and return a single promise
//it waits for all promises to settle
//it never doesnt stop when one rejects
//it returns an array of objects describing the outcomes of each promise

const p1 = Promise.resolve(10)
const p2=  Promise.reject("error happened")
const p3= new Promise((resolve)=>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

Promise.allSettled([p1,p2,p3])
.then((result)=>{
    console.log("all promise done",result)
})

//3)promise.race()
//takes an array of promises and return in single promise
//that promise settle resolve or reject the first promise
//Because the reject happens first, the race ends immediately with that rejection.
//Doesn’t wait for all promises — ends on first one
const p1= new Promise((_,reject)=>{
    setTimeout(() => {
        reject(10)
    }, 1000);
})
const p2= new Promise((resolve)=>{
    setTimeout(() => {
        resolve(20)
    }, 2000);
})
const p3= new Promise((resolve)=>{
    setTimeout(() => {
        resolve(20)
    }, 3000);
})
Promise.race([p1,p2,p3])
.then((result)=>{
    console.log("all are done", result)
})
.catch((error)=>{
    console.error("one error",error)
})

//4)promise.any()
//takes an array of promise and returns in a single promise
//it ignores rejections- it only cares about the first successful promise
//if all promises reject it shows and AggregateError
//AggregateError - special error containing all rejection reason
//first di fail iethy 2nd di chupistadi leda first dey
const p1= new Promise((_,reject)=>{
    setTimeout(() => {
        reject(10)
    }, 1000);
})
const p2= new Promise((resolve)=>{
    setTimeout(() => {
        resolve(20)
    }, 2000);
})
const p3= new Promise((resolve)=>{
    setTimeout(() => {
        resolve(20)
    }, 3000);
})
Promise.any([p1,p2,p3])
.then((result)=>{
    console.log("all are done", result)
})
.catch((error)=>{
    console.error("one error",error)
})
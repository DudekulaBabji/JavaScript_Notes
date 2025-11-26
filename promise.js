//inmutable
//1)what is promise?
//Promise object is a placeholder for a certain period of time until we recive a value from a acsynchronous operation
//or
//promise is an object that represents eventual completion of asynchronous operation
//it get resolve or reject
//it is used to handle async task like fetching data from server, reading file

//2)why promises are important?
//we can avoid callback hell - nested callbacks into simple chain
//better error handling

//3)how it works
//A promise has three states
    //1)pending - inital state (task not finished)
    //2)fulfilled (resolved ) - task completed successfully
    //3)Rejected - task failed

//Example 1 ):

const myPromise = new Promise((reslove, reject)=>{
    let add= 6
    if(add>2){
        reslove("6 greather")
    }else{
        reject("not greather")
    }
})
myPromise
.then(result => console.log(result))  
.catch(error =>console.log(error))

//.then() method is called when promise resolves successfully
//the call back function inside .then() receives whatever value was passed to reslove()


//example 2):
//Asynchronous Example with setTimeout

const fetchData = new Promise((resolve, reject) => {
  console.log("Fetching data...");
  setTimeout(() => {
    resolve("Data fetched successfully!");
  }, 2000);
});

fetchData
  .then(data => console.log(data))
  .catch(err => console.log(err));


//Promise chaining

//using multiple .then() methods one after another
//where each .then() runs after the previous one finishes


function step1() {
  return Promise.resolve("Step 1 done");
}

function step2() {
  return Promise.resolve("Step 2 done");
}

step1()
  .then(res => {
    console.log(res);
    return step2();
  })
  .then(res => console.log(res));


//simple example
const myPromise = new Promise((resolve, reject)=>{
     resolve(2)
})
myPromise
.then((num) =>{
    console.log("first number",num)
    return num*2
    // passes 4 to next .then()
})
.then((num)=>{
    console.log("second number",num)
    return num+3
})
.then((num)=>{
    console.log("last number", num)
})

//example 2 with async tasks for promise chaning
function step1(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("step1: data fetched")
            resolve("Data from step1")
        }, 1000);
    })
}
function step2(preivousdata){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("step2: procced", preivousdata)
            resolve("data from step2")
        }, 1000);
    })
}
function setp3(preivousdata){
    return new Promise((reslove)=>{
        setTimeout(() => {
        console.log("step3: final result", preivousdata)
        reslove("all over")
        }, 1000);
       
    })
}
step1()
.then((result1)=>step2(result1))
.then((result2)=>setp3(result2))
.then((finalResult) => console.log(finalResult))
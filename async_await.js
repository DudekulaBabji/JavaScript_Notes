//async
//async is a keyword that create async function
//it always have to return a promise
//if it doent return a promise it automatically return as promise
//it allows you to asynchronous code

async function getData(){
    return "hiii"
}

const data=getData()
data.then((result)=>
    console.log(result)
)

//async/await
//async & await combined and use to handle promise
//await is the keyword that can only be used inside a async function
const p = new Promise((resolve)=>{
    resolve("hiii resolved")
})

async function handlePromise(){
    const data= await p
    console.log(data)
}
handlePromise()

//example 1
const p = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("promise resloved ")
    }, 10000);
})

async function handlePromise() {
    console.log("hello")
    const data= await p 
    console.log("namste")
    console.log(data)
}
handlePromise()


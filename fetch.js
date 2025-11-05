//fetch
//fetch is a promise it gives responsive object
//response object has a body which is readble stream
//converting the readble into jason

const API_URL = "https://api.github.com/users/DudekulaBabji"

async function handle(params) {
    try{
     const data= await fetch(API_URL)
    const jsonData = await data.json()
    console.log(jsonData)
    } catch(error){
        console.log(error)
    }
   
}
handle()
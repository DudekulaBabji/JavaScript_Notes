//block is also known as compound statement
//block use to combine multiple js in one group
//let and const are block scope
//there are stored for seperate memory space resureded from the block

{
    var a=10
    console.log(a)
}

{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(b) // reference error
console.log(c)

//shadowing
//for var
var a=100
{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a) // 10
//a=10 shadowing the a=100 in that in memory allocation global a=100 becomes a=10

//for let
let b=100
{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)//20
    console.log(c)
}
console.log(b)//100
//in side block scope it shows the normal b=20
//for out side the block scope it shows script b=100

//for const
const c=100
{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)//30
}
console.log(c) //100
 
//illegal shadowing
let a= 20
{
    var a=20 // a has already declared
}
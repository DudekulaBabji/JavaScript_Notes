//object
//it is a javascript object notation(json format)
//collection of data in format of key&value pair
//no iterables , no indexing

//example
var obj={
    name:"Babji",
    age:23
}
console.log(obj)

//1)without json format
var obj={}
obj.name="Babji"
obj.age=24
console.log(obj)

//2)for new keyword
var obj1=new Object()
obj1.name="babjiii"
console.log(obj1)

//3)how to add element in obj
var obj={
    name:"Babji",
    age:23
}
obj.contact=123456
console.log(obj)

//4)how to delete an elemet in a object
var obj={
    name:"Babji",
    age:23
}
delete obj.age
console.log(obj)

//5)how to fetch an elements individually
var obj={
    name:"babji",
    age:23
}
console.log(obj.name) 

//6)for invoking the elements for using this keyword
var obj={
    name:"Baji",
    age:23
}
function info(){
    return this.obj.name+" your age is  "+this.obj.age
}
var res=info()
console.log(res)
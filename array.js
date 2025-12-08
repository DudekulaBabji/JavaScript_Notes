//array
//array are collection of multiple data which is stored in a single variable
//elements can be added or remove
//each and every index has its own index number starting from 0
//array can store multiple data types
//array are mutable(can be changed)
//it is an data structure
//it is an object
//it is an iterable
//it is an indexed
var ar=[1,2,3,4]
console.log(ar)

//array constructor

var ar=new Array(1,2,3,4)
console.log(ar)

//Array Methods
//1)push
//this method is use to add elements in the end of the array

var ar=[1,2,3,4,5]
ar.push(6,8)
console.log(ar)

//2)unshift
//this method is use the add elemnts in the first index of array

var ar=[1,2,3,4,5]
ar.unshift(6,8)
console.log(ar)

//for placing the elements in middle we use index it remove that element and add new element
ar[2]=77     
console.log(ar)


//3)splice
//this method is use to add or remove elements from any index position
var ar=[1,2,3,4,5]
ar.splice(2,0,9) 
console.log(ar)
//2-index, 0-delete, 9-add a value

//4)pop
//this method removes the last element from the array
var ar=[1,2,3,4,5]
ar.pop()
console.log(ar) 

//5)shift
//this method removes the first element from the array
var ar=[1,2,3,4,5]
ar.shift()
console.log(ar)

// deleting the element in between in array
delete ar[2]
console.log(ar)

//6)concat
//this method combines two or more arrays and gives a new output
var ar1=[1,2,3,4,5]
var ar2=["a","b","c","d","e"]
var res=ar1.concat(ar2)
console.log(res)

//7)sort
//this method gives the accesending order of elements in array
var ar=[5,6,3,1,7,9,0]
ar.sort()
console.log(ar)

//8)reverse
//this method gives the reverse of elements in array
var ar=[2,5,8,0,4,1,7]
ar.reverse()
console.log(ar)

//9)toString
//converting the array into string or dont need to display like array
var ar=["a","b","c",1,"f"]
console.log(ar)
var a=ar.toString()
console.log(a)

//10)join
//converting arry into string & allow to add character in b/w
var ar=["A","B","C","D"]
var a=ar.join("-")
console.log(a)

//11)slice
//it is slicing for an array
var ar=[1,2,3,4,5,6]
var a=ar.slice(2,5)
console.log(a)

//12)index of
//if we need give an value to get index
var ar=[1,2,3,4,5,6]
var a=ar.indexOf(6)
console.log(a)

//14)last indexof
//it will get through last indexof
var ar=["A","B","C","D","E"]
var a=ar.lastIndexOf("B")
console.log(a)

//15)includes
//it wil check weather a element is present in array or not it will give true or false
var ar=[1,2,3,4,5,6]
var a=ar.includes(6)
console.log(a)

//16)find
var a=[1,10,5,6,14]
var res=a.find(greater)
console.log(res)
function greater(value){
    return value>4
}
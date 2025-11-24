//in javascript the textual data is stored as strings. there is no seperate type for single character

//1)using single quotes
var s1="this is strring"
var s2='this is string'
console.log(s1)
console.log(s2)

//2)using a string inside another string by using escape(\) character
 var s1="this \"is\" string"
 console.log(s1)

//3)using back ticks
var s2=`this is string`
console.log(s2)

//4)using string constructor
var s4= new String("academy")
console.log(s4)

//5)comparing the constructor shows false object there is no comaprison

var s1= new String("babji")
var s2= new String("babji")
console.log(s1==s2)

//6)comparing without constructor
var s1="babji"
var s2="babji"
console.log(s1==s2)

//methods

//1)toUpperCase()
//used to convert entire string in upper case
var s1="babji is good boy"
console.log(s1.toUpperCase())

//2)toLowerCase
//used to convert entire string in lower
var s1="BABJIIII"
console.log(s1.toLowerCase())

//3)includes
//check wheter it present or not
var s1="babji is good boy"
console.log(s1.includes("o"))

//4)CharArt
//used to check index of character
var s1="babji is good boy"
console.log(s1.charAt(6))

//5)replace()
//replacing the string into another string
var s1="this is string"
console.log(s1.replace("is","IS"))

//6)replaceAll
//it give undefined 
var s1="this is string"
console.log(s1.replaceAll("is"))

//7)repeat()
//if any sting or any character we need to repeat we use repeat
var s1="babji"
console.log(s1.repeat(2))

//9)trim()
//removes the white space nor character
var s1="    babji is good boy    "
console.log(s1)
console.log(s1.trim())

//10)split()
//slipt a string into array of substring

let fruits = "apple,banana,mango";
console.log(fruits)
let result = fruits.split(","); 
console.log(result);

//11)match()
//The match() method searches a string for a pattern (using a regular expression) and returns an array of matches.

let text = "JavaScript is amazing";
let result = text.match(/i/g); 
console.log(result); 

//12)search()
//The search() method searches for a substring or pattern (regex) in a string and returns the index (position) of the first match
let text = "I love JavaScript";
let position = text.search("o");
console.log(position); 

var s1 = "babji";
var a = s1[0].toUpperCase() + s1.slice(1);
console.log(a);

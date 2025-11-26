//Document Object Model
//DOM = JavaScript's way to read, access, and change HTML elements on the webpage.

//content to display on body of html

// var content=document.body
// content.append("Javascript")

//1)document.createElement()
//to create an element that we need to fetch in html we use this method

var div=document.createElement("div")
div.innerText="This is div"
document.body.append(div);
div.style.border="1px solid black"

var h1=document.createElement("h1")
h1.innerText="Hi! Good Morning"
h1.classList.add("h")
div.appendChild(h1)

document.body.appendChild(div)

//2)document.querySelector()
//is used to select (find) the first HTML element that matches a given CSS selector (like #id, .class, tag, etc.)

var query=document.querySelector(".h")
query.style.color="green"

// let all=document.querySelectorAll("p")
// let button=document.querySelector("#onClick")
// button.addEventListener("click",function(){
//     all.forEach(function(p){
//         p.style.color="blue"
//         p.style.fontWeight="bold"
//     })
    
// })


//3)document.setElementByClassName()
//the function target & return all the element with matching class value
//it return html collection and to the access to using index value

let data=document.getElementsByClassName("a")[0]
data.innerText="bhchbhdsbhjbh"


//addEventListener() is used to attach an event handler to an HTML element — it lets you run a function whenever a specific event happens (like click, mouseover, keydown, etc.)


//4)document.getElementById()
//is a DOM method used to select a single HTML element by its ID.

//example

<h1 id="title">Hello</h1>

let heading = document.getElementById("title");
heading.innerText = "Welcome!";

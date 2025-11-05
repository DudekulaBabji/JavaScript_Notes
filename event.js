//Event is an action that happens in the browser

//1)onClick
//onclick event is javascript is triggered when the user click on element like button, link, image
//when element is clicked run th specified javascript code or function

function display(){
    alert("u clicked me")
}

//2)onmouseover
//event in js happens when the mouse pointer moves over an element
function over(){
    var div=document.getElementById("h1").innerText="hiii"
}

//3)onmouseout
//event in javascript occurs when the mouse pointer leaves an element
function out() {
    var o=document.getElementById("h1").innerText=" "
    
}

//4)onChange
//The onchange event occurs when the value of an input element changes and the element loses focus (or selection is made).
//<input> <select> <textarea></textarea>
function showValue(inp) {
 document.getElementById("name").innerText="the changed item"+" "+inp
 
}
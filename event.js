//Event is an action that happens in the browser

//1)onClick
//onclick event is javascript is triggered when the user click on element like button, link, image
//when element is clicked it will run the specified javascript code or function

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
//👉 It triggers whenever the user changes the value of an input field.
//The onchange event occurs when the value of an input element changes and the element loses focus (or selection is made).
//<input> <select> <textarea></textarea>
function showValue(inp) {
 document.getElementById("name").innerText="the changed item"+" "+inp
 
}


function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {name}</p>
    </div>
  );
}
export default App;


//5)event listener
//An event listener is a function that waits for an event to occur and then executes your code.

// ✅ Why do we use Event Listeners?

// ✔ Helps make the webpage interactive
// ✔ Allows code to run when the user performs an action
// ✔ Cleaner and more flexible than inline events (onclick="")
// ✔ You can attach multiple listeners to the same element

//syntax
element.addEventListener(eventType, callbackFunction);

//Explanation:
// element: The HTML element you want to attach the event listener to.
// eventType: A string representing the type of event to listen for (e.g., "click", "mouseover").
// callbackFunction: The function that will be called when the event occurs.

//example
<button id="btn">Click Me</button>

<script>
  document.getElementById("btn").addEventListener("click", function () {
    alert("Button was clicked!");
  });
</script>

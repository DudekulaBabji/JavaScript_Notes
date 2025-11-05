let count=0
function positive() {
    count++;
    document.getElementById("count").innerText=count

    
}

function negative() {
    count--;
    document.getElementById("count").innerText=count
    
}
function reset() {
    count=0
    document.getElementById("count").innerText=count
    
}
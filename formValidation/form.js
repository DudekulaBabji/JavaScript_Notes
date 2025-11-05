function display() {
    var fp=/^[A-Za-z]+$/
    var pp=/[6-9][0-9]{9}/
    var fn=document.getElementById("fname").value
    var ln=document.getElementById("lname").value
    var num=document.getElementById("num").value
    if(fn==""){
        document.getElementById("fmsg").innerText="First name is required"
        return false
    }
    if(fn.match(fp))
        true
    else{
        document.getElementById("fmsg").innerText="only alphabets allowed"
        return false
    }
    if(ln==""){
        document.getElementById("lmsg").innerText="Last name is requires"
        return false
    }
    if(num.match(pp))
        true
    else{
        document.getElementById("pmsg").innerText="Give valid number"
        return false

    }
    
    
}
//setTimeout
//setTimeout method sets a timer which executes a function or pieace of code once the timer expires

function set(){
    setTimeout(() => {
        var a=20
        console.log(a)
    }, 5000);
    console.log("hiii")
}
set()


function x(){
    for (let i = 1; i <=5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i*1000);  
    }
}
x()


function x(){
    for (var i = 0; i<=5; i++) {
        function close(x) {
            setTimeout(() => {
                console.log(x)
            },x*1000);
        }
        close(i)    
    }
}
x()
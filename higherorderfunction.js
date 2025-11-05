//Higher order function
//a function which takes another function as an argument or a returns a function from it is known as hof

function x(){
    console.log("namaste")
}

function y(x) {
    x()
    
}

const radius =[3,4,5,6,7]

const area = function (radius){
    return Math.PI * radius * radius;
}
const circumference= function(radius){
    return 2 * Math.PI * radius
}

const diameter= function(radius){
    return 2 * radius;
}

const calculate = function(radius, logic) {
    const output =[]
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    
    }
    return output
}

console.log(calculate(radius, area));
console.log(calculate(radius,circumference))
console.log(calculate(radius, diameter))
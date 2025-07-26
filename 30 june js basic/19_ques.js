
// Take two numbers and check if they are equal, or print which one is greater.

var prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Enter first number "))
let n2 = parseInt(prompt("Enter second number "))

if(n1===n2){
    console.log("they are equal");
}
else{
    console.log("not are not equal and greter is "+ Math.max(n1,n2));
}
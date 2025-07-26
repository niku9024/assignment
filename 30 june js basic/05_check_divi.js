// Input a number and check if it's divisible by 3 or not.


var prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number :"))

if (num%3==0 ){
    console.log("yes, it is divisiable");
}
else{
    console.log("no it is not divisable");
}
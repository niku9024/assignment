
// Take a number and check if it's divisible by either 3 or 5 but not both.

var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number :"))

if (!(n%3==0 && n%5==0))
{
    console.log("it is divisiable by either 3 or 5");
}
else{
    console.log("it is divisiable by both");
}
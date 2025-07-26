
// Take a number and check whether it is divisible by both 5 and 11.

var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a num :"))

if (n%5==0 && n%11==0)
{
    console.log("yes it is divisiable by both");
}
else{
    console.log("no");
    
}
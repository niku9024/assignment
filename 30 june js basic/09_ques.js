
// Input a number and check if it is a 3-digit number.

var prompt = require('prompt-sync')();

let digit = parseInt(prompt("Enter a number :"))

if (digit >=100 && digit<=999)
{
    console.log("it is a three digit number");
}
else{
    console.log("not ");
}
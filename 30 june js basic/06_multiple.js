
// Input a number and check if it’s a multiple of 7 or not.

var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number :"))

if (n%7==0 && n<=70){
    console.log("yes, it is multiple of 7");
}
else{
    console.log("no, it is not multiple of 7");
}

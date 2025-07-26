
// Count the number of digits in a given number using a loop.

var prompt = require('prompt-sync')();

let n = (prompt("Enter a num :"))

let count=0;
while(n>0){
    count++;
    n=Math.floor(n/10)
}

console.log(count);
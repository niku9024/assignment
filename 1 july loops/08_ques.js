

// Find the product of numbers from 1 to 10.

var prompt = require('prompt-sync')();

let n=parseInt(prompt("Enter a number :"))

for(let i=1; i<=10; i++)
{
    console.log(i*n);
}


// Print the factorial of a number (e.g., 6! = 720).

var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number :"))

let sum=1;
for(let i=1; i<=n; i++)
{
    sum*=i
}
console.log(sum);
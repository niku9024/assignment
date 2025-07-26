

// Check if a given number is a prime number using a loop.

var prompt = require('prompt-sync')();

let n=parseInt(prompt("ENter a number :"))

if(n==1 || n==2)
    {
        console.log("prime");
    }

for(let i=2; i<n; i++)
{
    

    if(n%i==0){
        console.log("not prime");
        break;
    }

    if(i==n-1){
        console.log("prime");
    }
}


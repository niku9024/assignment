
// Input a number and check if the sum of its digits is even or odd.

var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number :"))

let sum=0;

while(n>0){
    sum=sum + n%10;
    n=Math.floor(n/10);
}

if (sum%2==0)
{
    console.log("even");
}
else{
    console.log("odd");
}
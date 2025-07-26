

// Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.

var prompt = require('prompt-sync')();

let n = (prompt("Enter a num :"))

let rev="";
let cpy = n;
while(n>0){
    rev+=n%10;
    n=Math.floor(n/10)
}

if(cpy==rev)
{
    console.log("yes it is palindrome");
}
else{
    console.log("not prime");
}

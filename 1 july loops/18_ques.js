

// Print the reverse of a number using a loop (e.g., 123 → 321).

var prompt = require('prompt-sync')();

let n = (prompt("Enter a num :"))

let rev="";
while(n>0){
    rev+=n%10;
    n=Math.floor(n/10)
}

console.log(rev);
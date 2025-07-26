
// Input a number and print whether it is even, odd, and also whether it's positive or negative.

var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number :"))

if(n%2==0){
    console.log("it is even");
    if(n>=0){
        console.log("positive");
    }
    else{
        console.log("negative");
    }
}
else{
    console.log("it is odd");
    if(n>=0){
        console.log("positive");
    }
    else{
        console.log("negative");
    }
}
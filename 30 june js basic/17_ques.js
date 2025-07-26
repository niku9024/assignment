
// Input a number and check if it is a prime number (basic logic).

var prompt = require('prompt-sync')();

let n = parseInt(prompt("ENter a number :"))

if(n%2==0 || n%3==0 || n%4==0 || n%5==0 || n%6==0 || n%7==0 || n%8==0 ||n%9==0){
    console.log("not");
}
else{
    console.log("yes");
}
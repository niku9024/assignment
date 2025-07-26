
// Input a number and check if it is between 10 and 50.


var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a number :"))

if (n>10 && n<50)
{
    console.log("yes it lie bettween 10 and 50");
}
else{
    console.log("no");

}


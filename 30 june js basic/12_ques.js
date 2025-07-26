
// Input a year and check if it is a leap year.

var prompt = require('prompt-sync')();

let year = parseInt(prompt("Enter a year :"))

if ((year%4==0 || year%400==0) && (year%100!=0)){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}
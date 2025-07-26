
// Input a character and check if it's uppercase, lowercase, digit, or special character.

var prompt = require('prompt-sync')();

let chart = prompt("Enter a charcter ")

if (chart>='a' && chart<='z')
{
    console.log("lowercase");
}
else if (chart>='A' && chart<='Z')
{
    console.log("uppercase");
}
else if(chart%1==0){
    console.log("digit");
}
else{
    console.log("special character");
}
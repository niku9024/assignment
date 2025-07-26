
var prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter age :"))

if (age>=18){
    console.log("it can vote");
}
else{
    console.log("it cannot vote");
}
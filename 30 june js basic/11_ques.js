
// Input three numbers and find the greatest among them.

var prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Enter first number :"))
let n2 = parseInt(prompt("Enter second number :"))
let n3 = parseInt(prompt("Enter third number :"))

console.log("greater is "+Math.max(Math.max(n1,n2),n3));
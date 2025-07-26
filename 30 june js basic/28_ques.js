
// Take a password as input and check if it is strong (length ≥8, includes digit and special character).

var prompt = require('prompt-sync')();

let password = prompt("Enter password :")

if(password.length>=8)
{
    console.log("strong");
}
else{
    console.log("weak");
}
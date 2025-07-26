
// Create a mini login system: input username and password, and check if both match stored values.

var prompt = require('prompt-sync')();

let username=prompt("Enter username :")
let password = prompt("Enter password :")

let exist_user="rohan@383836";
let exist_password = "dvwgdwe7e2378289e7yy3yeye"

if(username==exist_user && password==exist_password)
{
    console.log("Login successfully !");
}
else{
    console.log("Invalid details");
}
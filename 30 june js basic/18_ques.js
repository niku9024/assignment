
// Input someone's name and age, and check if they can get a driving license (age ≥ 18).

var prompt = require('prompt-sync')();

let name = prompt("Enter a name :")
let age = parseInt(prompt("Enter age :"))

if (age>=18){
    console.log("yes "+name + "can get driving license" );
}
else{
  console.log("no "+name+" cannot get driving license" );

}
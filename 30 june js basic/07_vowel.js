
// Input a character and check whether it's a vowel or consonant (assume lowercase).

var prompt = require('prompt-sync')();

let a = prompt("ENter a charater :")

if (a=='a' || a=='e' || a=='i' || a=='o' || a=='u'){
    console.log("it is vowel");
}
else{
    console.log("it is consonant");
}
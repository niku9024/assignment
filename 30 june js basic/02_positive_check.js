var prompt = require('prompt-sync')();  

let num = parseInt(prompt("Enter a number :"))

if(num<0){
    console.log("negative");
}
else if(num==0){
    console.log("zero");
}
else{
    console.log("positive");
}
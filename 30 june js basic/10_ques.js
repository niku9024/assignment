
// Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).


var prompt = require('prompt-sync')();

let temp = parseInt(prompt("Enter temprature :"))

if (temp<15){
    console.log("its  cold");
}
else if(temp>=15 && temp<=30){
    console.log("Moderate");
}
else{
    console.log("hot");
}
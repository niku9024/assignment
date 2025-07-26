
// Input the day number (1–7) and print the corresponding weekday.

var prompt = require('prompt-sync')();

let day = prompt("ENter a num from 1 to 7 :")

if(day==1){
    console.log("sunday");
}
else if (day==2){
    console.log("monday");
}
else if (day==3){
    console.log("tuesday");
}
else if(day==4){
    console.log("wednesday");
}
else if(day==5){
    console.log("thrusday");
}
else if(day==6){
    console.log("friday");
}
else{
    console.log("saturday");
}

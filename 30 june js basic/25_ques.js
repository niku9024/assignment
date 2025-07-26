
// Input hours worked and calculate overtime pay. Overtime is paid for >40 hours at Rs. 12/hr.


var prompt = require('prompt-sync')();

let hour = parseInt(prompt("ENter worked time in hours :"))

let overtime_pay=0;
if(hour>40){
    let ov = hour-40;
    console.log("Total payment of overtime is : "+ ov*12);
}
else{
    console.log("no overtime pays");
}
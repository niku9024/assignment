
// Input marks in 5 subjects, calculate the average and print grade using if-else.

var prompt = require('prompt-sync')();

let s1 = parseInt(prompt("Enter first subject mark :"))
let s2 = parseInt(prompt("Enter second subject mark :"))
let s3 = parseInt(prompt("Enter third subject mark :"))
let s4 = parseInt(prompt("Enter fourth subject mark :"))
let s5 = parseInt(prompt("Enter fifth subject mark :"))

let total = (s1+s2+s3+s4+s5)/5;

if (total>=90){
    console.log("grade A");
}
else if(total>=75 && total<90){
    console.log("grade B");
}
else if(total>=60 && total<75)
{
    console.log("grade C");
}
else if (total>=40 && total<60)
{
    console.log("D");
}
else{
    console.log("fail");
}
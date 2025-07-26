
// Input marks of a student (out of 100) and print the grade:

var prompt = require('prompt-sync')();

let mark = parseInt(prompt("ENter mark between 1 to 100 :"))

if (mark>=90){
    console.log("grade A");
}
else if(mark>=75 && mark<90){
    console.log("grade B");
}
else if(mark>=60 && mark<75)
{
    console.log("grade C");
}
else if (mark>=40 && mark<60)
{
    console.log("D");
}
else{
    console.log("fail");
}
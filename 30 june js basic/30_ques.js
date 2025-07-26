
// Input the side lengths of a triangle and check if it is valid, isosceles, equilateral, or scalene.

var prompt = require('prompt-sync')();

let s1 = parseInt(prompt("Enter first number :"))
let s2 = parseInt(prompt("Enter second number :"))
let s3 = parseInt(prompt("Enter third number :"))

let n=0;
if(s1+s2>s3){
    console.log("triagle is valid");
}

if(s1 ==s2 && s1==s3 && s2==s3 )
{
    console.log("all side are equal");
}else if(s1==s2 || s1==s3 || s2==s3){
    console.log("two sides are equal");
}
else{
    console.log("not any sides are equal");
}

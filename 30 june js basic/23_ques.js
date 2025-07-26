
// Input a number and check if it is a palindrome number (e.g., 121).

var prompt = require('prompt-sync')();

let st = parseInt(prompt("Enter a number :"))

let n="";
let cp_st=st;
while(0<st){
    n+=st%10;
    st=Math.floor(st/10);
}



if(n==cp_st)
{
    console.log("yes");
}
else{
    console.log("no");
}
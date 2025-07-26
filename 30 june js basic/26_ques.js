
// Input basic salary and calculate net salary based on conditions:

// HRA = 20%, DA = 50% if basic < 10000; else HRA = 30%, DA = 80%.

var prompt = require('prompt-sync')();

let salary = parseInt(prompt("Enter basic salary :"))

if (salary < 10000)
{
    salary+=(salary*(50/100))+(salary*(20/100))
    console.log("Total salary :"+salary);
}
else{
    salary+=(salary*(30/100))+(salary*(80/100))
    console.log("Total salary :"+salary);

}

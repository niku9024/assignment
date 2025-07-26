// Input month number and print number of days in that month.

var prompt = require("prompt-sync")();

let day_num = parseInt(prompt("Enter month number :"));

if (
  day_num == 1 ||
  day_num == 3 ||
  day_num == 5 ||
  day_num == 7 ||
  day_num == 8 ||
  day_num == 10 ||
  day_num == 12
) {
  console.log("31 days");
} else if (day_num == 2) {
  console.log("28 days");
} else {
  console.log("30 days");
}

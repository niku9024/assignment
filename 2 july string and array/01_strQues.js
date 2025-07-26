//    Write a function `reverseString(str)` that takes a string and returns it reversed.

function reverseString(str) {
    let rev = str.split('').reverse().join('');
  return rev;
}

console.log(reverseString("hello"));

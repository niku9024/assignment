
// What is the result of this?

const a = [1, 2, 3];
const b = a.slice(0, 2);
b[0] = 100;
console.log(a); // [1,2,3]

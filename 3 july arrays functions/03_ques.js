
// What will be the output of the following?

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); 

// it prints [1,2,3,4] because b contains the memory address of a if we chnage the element of the b then changes are reflact also the a array
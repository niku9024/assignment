

// Count how many numbers between 1 and 100 are divisible by both 3 and 5.

let count=0;
for(let i=1; i<=100; i++)
{
    if(i%3==0 && i%5==0)
    {
        count++;
    }
}

console.log(count);
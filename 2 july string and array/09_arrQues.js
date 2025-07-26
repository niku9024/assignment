

// Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`


function sumEven(arr)
{
    let sum=0;
    for(let i of arr)
    {
        if(i%2==0)
        {
            sum+=i;
        }
    }

    return sum;
}


console.log(sumEven([11,22,3,4,6,8]));
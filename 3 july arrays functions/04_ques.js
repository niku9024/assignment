
// How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?

function Largest(arr)
{
    let max = arr[0];
    for(let i of arr)
    {
        if(i>max)
        {
            max=i
        }
    }
    
    return max;
}


function secondLar(arr){

    let sum=Largest(arr);
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==sum){
            arr[i]=0;
        }
    }

    return Largest(arr)

}

console.log(secondLar([11,22,3,4,55,56,77]));
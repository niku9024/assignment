
//  Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`


function emoveDuplicates(arr){

    let ans=[]

    for(let i=0; i<arr.length; i++)
    {
        if(!(ans.includes(arr[i])))
        {
            ans.push(arr[i])
        }
    }

    return ans;
}

console.log(emoveDuplicates([1,2,2,6,3,4,4]));
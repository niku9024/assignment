
//  Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`


function flattenArray(arr){

    let ans=[]

    for(let i of arr)
    {
        for(let j of i)
        {
            ans.push(j)

        }
    }

    return ans;
}

console.log(flattenArray([[1, 2], [3, 4], [5]]));
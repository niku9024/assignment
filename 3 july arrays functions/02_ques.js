
// Given an array of numbers, how do you remove all duplicate values without using Set?

function removeDuplicate(arr)
{
    let ans=[]
    for(let i of arr)
    {
        if(!ans.includes(i)){
            ans.push(i)
        }
    }
    return ans;
}


console.log(removeDuplicate([1,2,2,2,3,44,2,3,443]));

// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]


function Chunk(arr,n)
{
    let ans=[]
    let v=0;
    for(let i=0;i<Math.floor(arr.length/n); i++)
    {
        let sub_array=[]
        for(let j=0; j<=n-1; j++)
        {
            sub_array[j]=arr[v++];
        }
        ans.push(sub_array)
    }
    return ans;
}

console.log(Chunk([1,2,3,4,5,6],2));

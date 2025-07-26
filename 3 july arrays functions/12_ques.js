
// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]



function FindPair(arr,n)
{
    let ans=[]
    
    for(let i=0; i<arr.length; i++)
    {
        let sub_arr=[]
        for(let j=i; j<arr.length; j++)
        {
            if( arr[i]+arr[j] == n )
            {
                sub_arr.push(arr[i],arr[j])
            }
        }

        if(sub_arr.length==2)
        {
            ans.push(sub_arr);
        }
        
    }

    return ans;
}


console.log(FindPair([1, 2, 3, 4, 5,6],9));
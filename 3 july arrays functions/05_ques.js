
// How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}



function Occurence(arr)
{
    let obj={};

    for(let i of arr)
    {
        if(obj.hasOwnProperty(`${i}`)){
            obj[`${i}`]++;
        }
        else{
            obj[`${i}`]=1
        }
    }
    
    return obj;
}


console.log(Occurence([1,2,3,2,3,4,3,3]));

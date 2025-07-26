
// Given an array of numbers, return a new array containing only the elements that are prime numbers.


function checkPrime(n){
    let count=0;
    for(let i=1; i<=n; i++)
    {
        if(n%i==0)
        {
            count++;
        }
    }

    if(count==2)
    {
        return true;
    }
    else{
        return false;
    }
}


function checkArrPrime(arr){

    let ans=[];
    for(let i=0; i<arr.length; i++)
    {
        if(checkPrime(arr[i]))
        {
            ans.push(arr[i])
        }
    }

    return ans;
}


console.log(checkArrPrime([11,22,21,23,33,41]));
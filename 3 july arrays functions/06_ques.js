
// Write a custom implementation of the .map() method (polyfill).



function map(fun,arr){

    let new_arr=fun(arr)

    return new_arr;
}


let ans = map((ar)=>{
    for(let i=0; i<ar.length; i++)
    {
        ar[i]=ar[i]+3
    }
    return ar;
},[1,2,34,5,2])


console.log(ans);
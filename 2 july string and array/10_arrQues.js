
// Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`



function groupByType(arr){

    let obj={}

    for(let i of arr)
    {
       if(obj.hasOwnProperty(typeof i))
       {
            obj[typeof i].push(i);
       }
       else{
        obj[typeof i]=[i]
       }

    }
    
    return obj;
}

console.log(groupByType([1, 'a', true, 2, 'b']));
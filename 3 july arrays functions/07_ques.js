
// How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]

// Sort by name (alphabetical), then age (ascending)

function sortObj(arr)
{
    let ans =[]
    let name=[]
    let age=[]

    for(let i of arr)
    {
        name.push(i.name);
        age.push(i.age);
    }

    name.sort();
    age.sort((a,b)=>b-a)

    for(let i=0; i<arr.length; i++)
    {
        arr[i].name=name[i];
        arr[i].age=age[i];
    }

    return arr;

}

console.log(sortObj([{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "Sohn", age: 22}]));
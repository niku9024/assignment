
// Write a function `countVowels(str)` to count the number of vowels in the given string.  

let count=0;
function countVowels(str){
    
    let arr=['a','e','i','o','u']
    for(let i=0; i<=4; i++)
    {
        for(let j=0; j<str.length; j++)
        {
            if(str[j]==arr[i]){
                count++;
            }
        }
    }

    return count;
}


console.log(countVowels('abhaa'));
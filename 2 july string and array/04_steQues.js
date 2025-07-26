
// Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  


function capitalizeWords(str){
    let arr = str.split(' ');

    let ad =[]

    for(let i=0; i<arr.length; i++)
    {
        let fir=arr[i][0].toUpperCase();
        let sec=arr[i].slice(1);
        ad.push(fir+sec)
    }

    return ad.join(' ')
}


console.log(capitalizeWords("hello world kaise ha"));



// Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).

function isPalindrome(str){
    if(str.toUpperCase()==str.split('').reverse().join('').toUpperCase())
        
    {
        return true;
    }
    else{
        return false
    }
}


console.log(isPalindrome("Madam"));


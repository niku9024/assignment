

// Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).

for(let i=1; i<=10; i++){

    for(let j=1; j<=4; j++)
    {
        if(i+j==5)
        {
            console.log(i , j);
            
        }
    }
}
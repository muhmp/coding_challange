function printDivisors(n)
{
    
    // Note that this loop runs till square root
    for(let i = 1; i <= Math.sqrt(n); i++)
    {
        if (n % i == 0)
        {
            
            // If divisors are equal, print only one
            if (parseInt(n / i, 10) == i)
                console.log(i);
                
            // Otherwise print both
            else 
                console.log(i + " " + 
                      parseInt(n / i, 10) + " ");
        }
    }
}

console.log(printDivisors(1234567890))
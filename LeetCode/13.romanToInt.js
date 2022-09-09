//roman to Integer

function romanToInt(s) {
    //define each roman numeral
    let roman = {
        I: 1, V:5, X:10, L:50, C:100, D:500, M:1000

    }
    //define the sum
    let sum = 0;
    //loop through the string
    for(let i = 0; i < s.length; i++){
        //if the current value is less than the next value
        if(roman[s[i]] < roman[s[i+1]]){ // example value: 2 < 5
            //subtract the current value from the sum
            sum -= roman[s[i]]; // example sum: 0 - 2 //DECREMENT
        }else{
            //add the current value to the sum
            sum += roman[s[i]]; // example sum: 0 + 2 //INCREMENT
        } // until the condition satisfies
    }
    return sum;
}
console.log(romanToInt("II")); //output 2
// Integer to Roman
// Given an integer, convert it to a roman numeral.

//code
// answer
function intToRoman(num) {
    let roman = '';
    let romanNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
        };
        for (let i in romanNum){
            while (num >= romanNum[i]){
                roman += i;
                num -= romanNum[i];
            }

        }
        return roman;
    }

//test
console.log(intToRoman(58));
 

/* 
// try to solve it by myself
function intToRoman(num) {
    //define the string  
    let roman = "";
    //define each roman Num (each changes of the numbers)
    let romanNum = {
        I: 1, IV: 4, V:5, IX:9, X:10, XL: 40, L: 50,
        XC: 90,C: 100, CD: 400,D: 500, CM: 900,M: 1000,
    };

    //loop the romanNum variable
    for(let i in romanNum){
        //condition while the defined number means num variable is equal or bigger than the variable of romanNum
        while(num >= romanNum[i]){ // example: if i put num = 3 then it should be increased by 1 until it reach 3
            //increase the roman variable by the romanNum variable
            roman +=i;
            num -= romanNum[i]; // -= means the number decrease by the value of the variable
        }
    }
    return roman; 
}

console.log(intToRoman(58)); */
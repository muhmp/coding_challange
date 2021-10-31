/**
 * Find the longest sequence of zeros in binary representaion of an integer
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//step 1 converting to Array

/**
//example for N = 9
let N =9;
const binary = N.toString(2); // "1001"
const binaryArray = binary.split('') // split each into array
 */

//refactoring for recursion
function getGaps(binaryArray,gaps){
    
    //finding the first one via index
    const firstOne = binaryArray.indexOf("1");
    //if index is -1 then there is none , example : 0000

    if(firstOne > -1){
            //step2 finding the first one
            let newBinaryArray = binaryArray.slice(firstOne +1);//["0", "0", "1"]
            //traverse array
            const secondOne = newBinaryArray.indexOf("1");// 2
           
            /**
            //storing lengths in An Array
            const gaps = []; //passed t
            //adding 2 to gaps
            gaps.push(secondOne);
         */

    if (secondOne > 0){
        //adding 2
        gaps.push(secondOne);
    }
    //pass the parameter of the gaps array
    return getGaps(newBinaryArray.slice(secondOne + 1),gaps);
    }

    //gets largest value in array
    //return Math.max.apply(Math,gaps);
    // if gaps array length is empty return 0
     // otherwise return largest value in array
     return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}


//range
function solution(N) {
    //test the value
    if (N === parseInt(N,10)&& N>=1 && N <= 2147483647){
        //convert to binary
        const binary = N.toString(2).split('');
        
            return getGaps(binary,[]);
        }
        return 0;
}

console.log(solution(529));

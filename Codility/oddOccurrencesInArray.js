/** Odd Occurrences in Array */

/* 
//solution 1
function oddOccurrenceInArray(N) {
    //define the result variable
    let result = 0;

    //start here
    for(let element of N){
        result ^= element;
    }
    return result;
}
console.log(oddOccurrenceInArray([9,3,9,3,9,7,9]));
 */

//solution 2
function oddOccurrenceInArray(N) {

    return N.reduce((a, b) => a ^ b);
}

console.log(oddOccurrenceInArray([9,3,9,3,9,7,9]));
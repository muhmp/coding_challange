/**
 * compute number of distinct values in array
 */

function distincNum(A){
    const number = new Object(); //learn oop for new Object
    for(let i = 0 ; i <A.length; i++){
        number[A[i]] = 1;
    }
    return(Object.keys(number).length);
}
console.log(distincNum([2,4,2,5,6]))
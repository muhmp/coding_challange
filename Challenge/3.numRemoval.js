// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0 //define variable
    let numArr = [] //define array

    //codition -> when there is 5 then delete

    while(N){ //define condition for the deleted number
        numArr.push(N%5);//arr
        N = Math.floor(N/5);
    }
    for(let i=0; i <numArr.length; i++){
        let j=0;
        for(let k=numArr.length-1; k>=0;k--){
            if(k!== i){ //if doesnt match 
                j=j*5+numArr[i];
            }
        }
        result = Math.max(j,result)
    }
    return result;

}
console.log(solution(5500));
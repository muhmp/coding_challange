// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A && A.length > 0){
        let theNum = new Set(); //visited number

    //funct
    let result = A.every((num) => {
        if(theNum.has(num-1) || theNum.has(num+1)){ //if visited number -1 or number +1
            return 0; //return true
        }
        theNum.add(num)
        return 1;
    });

    return !result; //return false

    }
}
console.log(solution(7));

console.log(solution(4,3));

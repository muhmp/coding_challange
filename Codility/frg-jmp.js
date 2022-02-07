/**frg jmp
 * 
 * 
 */

/* Solution 1 */
function solution(X,Y,D){
    return Math.ceil((Y-X)/D);
}

console.log(solution(10,85,30)); //3

/* Solution 2  */

function frogJump (A,B,C){
    if((B-A)%C == 0 ){
         return (B-A)/C;    
    }
    //else
    return (B-A)/C + 1;
}

console.log(frogJump(10,85,30)); //3
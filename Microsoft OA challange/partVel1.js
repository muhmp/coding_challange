//particle velocity practice

function solution(N){
    let total = 0;

    //loop condition
    for(let i = 0 ; i< N.length; i++){ //intialize i = 0 ; condtion i< {1,3,5,7,9} ; increment i= 1,3,5,7,9
        //condition start from 0
        //intialize j=0;  if 5 < 3 == 2 ; increment i again
        for(j=0; i+2 < N.length && N[i+1]-N[i];i++){
           // for(j=0; i+2 < N.length && N[i+1]-N[i] == N[i+2]-N[i+1];i++){
            j++;//increment j
            total +=j; //assign total with j
        }
    }
    //out loop and return
    return total;
}

console.log(solution([(-1,2),(1,2)]))
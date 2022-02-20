
/* solution 1 
function solution(N){
    //define A and S
    let A = [];
    let S = [];
    //loop condition
    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++){
            //pow
            S.push(Math.pow(2,i)*3*Math.pow(3,j));
       

        }
    }
    return S; 
} */




//try 2
function solution(N){ //main function
    // TODO: Change these from var to let
    //define A and S
    let A = [];
    let S = new Set();
    //loop condition
    for(let i = 0; i<N; i++){//p
        for(let j = 0; j< N; j++){//q
           /*  result = Math.pow(2,i)*Math.pow(3,j);
            S.add(result);
            A = Array.from(S);
            A.sort((x,y)=>x-y);
             */
            
            //calculation part
            result = eq(i,j);
            S.add(result);
            // TODO: Move these out of the loop to the bottom
            A = Array.from(S);
            //sort the list
            A.sort((x,y)=>x-y);
        }
    }
    return A[N];
}

function eq(p,q){
    //2^p*3^q
    return Math.pow(2,p)*Math.pow(3,q);
    //return Math.pow(2,p)*3*Math.pow(3,q);
}
 
//A[4] = 6
//A[5] = 8
//A[6] = 9

console.log(solution(3));//4
console.log(solution(4));//6
console.log(solution(5));//should be 8
console.log(solution(6));//should be 9
console.log(solution(7));//should be 12
console.log(solution(8));//should be 16
 


/* 
//solution 3
function solution(N){
    //define array
    x=[];
    //range
    if(N>=0 && N<=200){
        //run the function
        sequenceNum();
        return x[N];
    }
}

let n=20;
function sequenceNum(n){
    //loop condition
    for(let i = 0; i<n; i++){ //P
        for(let j= 0 ; j<n ; j++){ //S
            //2^p*3^q
            x.push(Math.pow(2,i)*Math.pow(3,j));
        }
    }
    //sort the list
    x.sort();
}

//print
console.log(solution(5));//8 */
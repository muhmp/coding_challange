
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (let i = 0; i < N; i++) { //row
        var output = '';
        for (let j =0; j<N-1; j++) //col
            output += '';
        
        for (let k = 0; k <= i; k++) 
            output += 'L';
        console.log(output);  
    } 
}

console.log(solution(4));
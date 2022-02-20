/**
 * Particle velocity
 * 
 */
 /**
  * Particle velocity
  * Define:
  *     Measure a single particle in N equally distributed moemnts of time
  *     K is recorded in array as particles as particles[K]
  *     
  * Question:
  *     count all the periods of time when the movement of the particlse was stable
  *     
  */

 
 function solution(N){ // particle
    //define velocity
    let totalVelocity = 0;
    //const parArr = N.length; //define the length of the array
    
    for(let i = 0 ; i<N.length;i++){ //for every array of particle example [-1,0,1,3,...]
        for (let j=0;i+2< N.length && N[i+1]-N[i] == N[i+2] - N[i+1]; i++){//for every array of particle example [-1,0,1,3,...]
            j++; //inc
            totalVelocity +=j;
        }

    }
    return totalVelocity;

 }

 //total velocity
 console.log(solution([1,3,5,7,9]));
 console.log(solution([7,7,7,7]));
 console.log(solution([3,-1,-5,-9]));
 console.log(solution([-1,1,3,3,3,2,3,2,1,0]));

 /**
  * print normal array

//solution 2
function largeInside(num){//get the parameter inside the for loop
    //define array
    let results = [];
    for(let i=0;i<num.length;i++){
        //define compared number using array
        let compareNum = num[i];
        results[i] = compareNum; //get the value equal to the array
    }
    return results;
}

console.log(largeInside([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  */
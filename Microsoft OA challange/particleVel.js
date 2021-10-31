/**
 * Particle velocity
 * 
 */

// const readline = require('readline');

/**
 function particleVelocity(particles) {
     // WRITE YOUR BRILLIANT CODE HERE
     let total_periods = 0;
     const particles_size = particles.length;
     for (let i = 0; i < particles_size; i++) {
         for (let count = 0; i + 2 < particles_size && particles[i + 1] - particles[i] === particles[i + 2] - particles[i + 1]; i++) {
             count++;
             total_periods += count;
         }
     }
     return total_periods < 1000000000 ? total_periods : -1;
 }
 console.log(particleVelocity([-1,1,3,3,3,2,3,2,1,0]));
 */

 /**
 const rl = readline.createInterface(process.stdin);
 rl.on('line', (input) => {
     rl.close();
     const particles = input.split(' ').map(x => parseInt(x, 10));
     console.log(particleVelocity(particles));
 });
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
    const parArr = N.length; //define the length of the 
    
    for(let i = 0 ; i<parArr;i++){ //for every array of particle example [-1,0,1,3,...]
        for (let j=0;i+2<parArr&&N[i+1]-N[i] === N[i+2] - N[i+1]; i++){
            j++;
            totalVelocity +=j;
        }

    }
    return totalVelocity;

 }

 //total velocity
 console.log(solution([1,3,5,7,9]));
  


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
/**A group of friends went holiday together.
 * Meeting point using N cars
 * P[K] people and S[K] seats in the K-th car
 * for K range from 0 to N-1
 * some of the seats of the cars may be free
 * write a function given two arrays P and S, consisting N integer each
 * return the minimum number of cars needed to hold all the people
*/

//given array P =[1,4,1] S =[1,5,1] should return 2.
/** solution 1
function solution(P,S){
    // write your code in JavaScript (Node.js 8.9.4)
    minimumNumofCars = 0;
    for(let i = 0; i < P.length; i++){
        if(P[i] > S[i]){
            minimumNumofCars += Math.ceil(P[i]/S[i]);

        }

    }


    return minimumNumofCars;

}

console.log(solution([1,4,1],[1,5,1]));
 */

//P: people, S: seats
//return the minimum number of cars needed to hold all the people
/* 
function seatFree(P,S){
    let totalSeats = 0;
    //loop through P and S
    for(let i = 0; i < P.length; i++){
        totalSeats += P[i];
        S[i] = S[i] - P[i];
        return S;
    }
    return totalSeats;
}
console.log(seatFree([1,4,1],[1,5,1])); */




/* *A group of friends went holiday together.
 * Meeting point using N cars
 * P[K] people and S[K] seats in the K-th car
 * for K range from 0 to N-1
 * some of the seats of the cars may be free
 * write a function given two arrays P and S, consisting N integer each
 * return the minimum number of cars needed to hold all the people
 */

//given two arrays P and S, consisting N integer each
//return minimum number of cars needed to hold all the people
//solution 2
function solution(P,S){
    // write your code in JavaScript (Node.js 8.9.4)
    
    let totalSeats = 0;
    let totalPeople = 0;
    let minimumSeats = 0;
    for(let i = 0; i < P.length; i++){
        totalPeople += P[i];
        totalSeats += S[i];
    }
    if(totalPeople > totalSeats){
       //get the number of cars needed
       minimumSeats = Math.floor(totalPeople/totalSeats);
    }
    return minimumSeats;

}
console.log(solution([1,4,1],[1,5,1]));



/* 
function solution(P,S){
    let totalSeats = 0;
    //loop through P and S
    for(let i = 0; i < P.length; i++){
        totalSeats += P[i];
        //seats in the K-th car for K range from 0 to N-1

        return S;
    }
    return totalSeats;
}
console.log(solution([1,4,1],[1,5,1]));
 */
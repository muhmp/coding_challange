
function minimumCars(P, S)
{
        let minimum = 0;
        for(let i = 0; i < P.length; i++){ //numbers of people
            for(let j=0; j < S.length; j++){//numbers of seats
                // if value of P is less than value of S
                if(P[i] <= S[j]){ //if [1,4,1]<=[1,5,1] 
                  //every friend had a seat in the care they came in; that is, P[K] <= S[K] for each K within the range [0..N-1]
                   minimum = S[j];
                }
            //return the length of the array
            return minimum;
        }
    }
}

console.log(minimumCars([4,4,2,4],[5,5,2,5]));
/**
 * 
 * @param {*} A 
 * @param {*} K 
 * @return {array}
 */

/* 
function cyclicRotation(A,K){
    //if A shifted to by its own length K then just return array
    if(A.length === K || K===0){
        return A;
    }

    //Run K number times saving last element in the array as  temporary variable, adding it to the front array

    for(let i =0 ; i<K.length;i++){
        let lastElement = A[A.length-1];
        A.unshift(lastElement); //add element at the beginning
        A.pop();//remove element from the end of the array
    }
    return A;
}

console.log(cyclicRotation([1,2,3,2]));

 */


//solution 2
function cyclicRotation(A,K){
    //if A shifted to by its own length K then just return array
    K = (A.length > K) ? K : K%A.length;

    //backwarding calculation
    var d = A.slice(0, A.length-K); //slicing the array from 0 to the end of the array minus K
    var c = A.slice(A.length-K, A.length);//slicing the array from the end of the array minus K to the end of the array
    return c.concat(d); //merging the two arrays c & d
}


console.log(cyclicRotation([3,8,9,7,6],4)); 

console.log(cyclicRotation([1,2,3,2],2));

console.log(cyclicRotation([1,2,3,2],1));
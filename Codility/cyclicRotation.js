/**
 * 
 * @param {*} A 
 * @param {*} K 
 * @return {array}
 */
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
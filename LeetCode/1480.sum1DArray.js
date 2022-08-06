//given an array nums
// return the running sums of nums
// input: [1,2,3,4]
// output: [1,3,6,10] -> 1+2, 3+3, 6+4, 10+0


// code
var runningSum = function(nums){
    // define a result array
    let result = [];
    
    //loop
    for (let i =0 ; i<=nums.length-1;i++){ //num.length-1 because we want to include the last element
        if(i == 0 ){
            result.push(nums[i]);
        }else{// sum
            result.push(nums[i] + result[i-1]); // means the previous array + the current array
        }
    }
    return result;
}

//print
console.log(runningSum([1,2,3,4]));
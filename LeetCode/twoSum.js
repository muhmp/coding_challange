/**
 * Given an array of integers 
 * nums and an integer target, 
 * return indices of the two numbers such 
 * that they add up to target.
 */

function twoSum(nums, target){

    // using brute force sol : iterate through every possible combination until we find a solution
    //loop
    for (let i =0;i<nums.length;i++){
        for(let j=i ; j< nums.length;i++){ //j is equal value with i
            //condition
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
   
};

//test
console.log(twoSum([2,7,11,5],9));

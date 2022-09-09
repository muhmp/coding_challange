//given binary array nums, return the maximum number of consecutive 1's in the array

// input nums = [1,1,0,1,1,1]
// output 3

//
function findmaxConsecutives(nums){
    //define array
    a =[];

    //initial count so that we can count the number of 1's
    count = 0;
    while(nums.length > 0){ //while the nums variable is bigger/not empty
        if(nums[0] == 1){ // if the first element is 1
            count++; // increment means we count the increment of 1's in the array
            nums.shift(); // shift method removes the first element of the array and returns it 
        }else{ // if the first element is not 1
            a.push(count); //push the count means we insert the count values into the array
            count = 0; // we reset the count for the next iteration
            nums.shift(); // we shift the array to the next element
        }
    }
    a.push(count); //after the while loop, we push the last count value into the array
    return Math.max(...a); // return the meaximum 


}

//call function
console.log(findmaxConsecutives([1,1,0,1,1,1])); //output 3
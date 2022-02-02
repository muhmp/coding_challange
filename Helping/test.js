/* 

function divisor(a,b){
    let result = 0; //store
    if(b==0){
        tanya === a;
    }else{
       tanya = tanya*(a+(b % 10),(b-b% 10)/10);
    }
        return tanya 
}

console.log(tanya(1,999999)); */

//create a divisor function that returns the number of times a number can be divided by another number
//divisor(4,2) should return 2
//divisor(9,3) should return 3
function divisor(a,b){
    let result = 0; //store
    if(b==0){
        result = a;
    }else{
       result = result*(a+(b % 10),(b-b% 10)/10);
    }
        return result 
}

console.log(divisor(1,999999));
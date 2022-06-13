// When you open the dialer of your phone and start typing a number, you will probably get search results from the save contacts for the number you entered. Your task is to implement a similar feature.
// Saved contacts are numbered from 0 to N-1. They are represented by two arrays A,B of N strings each. Name of K-th contact is A[K] and phone number is B[K].
//write a function def solution(A, B , P ) which A, B and a string P of length M representing a phone number.
// return contact name whose phone number contains P as a substring.
// for example , “436800143” contains as a substring “6800”, but not “3614”
// If there is more than one contact matching the search criteria, your function should return the alphabetically smallest contact name.
// If no match is found, your function should return “NO CONTACT”.

// example
// A = [“pim”, “pom”], B = [“999999999”, “777888999”] and P = “88999”, your function should return “pom”, because only pom’s phone number contains “88999”.
// A =[“sander”, “amy”, “ann”, “michael”], B = [“123456789”, “234567890”, “789123456”, ‘“123123123”’] and P = “1”, your function should return “ann”. Note that sander, ann and michael’s phone number contain “1” but “ann” is alphabetically smaller.

// code

function solution(A,B,P){
    var result = "NO CONTACT";
    var arr = [];
    for(var i = 0; i < A.length; i++){
        if(B[i].indexOf(P) > -1){
            arr.push(A[i]);
        }
    }
    if(arr.length > 0){
        arr.sort();
        result = arr[0];
    }
    return result;

}

// test
console.log(solution(["pim", "pom"], ["999999999", "777888999"], "88999")); // should return "pom"

// test 2
console.log(solution(["sander", "amy", "ann", "michael"], ["123456789", "234567890", "789123456", "123123123"], "1")); // should return "ann"
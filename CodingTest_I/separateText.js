/**
 * 
 * Separate text by
 */


/*1. practice*/

//define object inside array
const txt = ["BMW","Mercy","Lambo"];

console.log(txt);


/*2. using split to split text */

const x = "helloworld"
for (i=0; i<x.length; i++){
    console.log(x.charAt(i));
}



/** Main question **/

const counts = ["900, google.com", 
                "700, Amazon.com",
                "650, mail.yahoo.com"]

function solution(N) {
    for(i=0 ; i<counts.length; i++){
        N = counts;
    }
   
}
 console.log(N)


/**example 
var sampleString = "aaaaa12111";

var seperate = sampleString.split('').reduce(function(start , item){
  Number(item) ? start[0] += item : start[1] += item;
  return start
},['',''])

console.log(seperate) //["12111", "aaaaa"]*/
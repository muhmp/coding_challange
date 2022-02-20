/**
 * 
 * Separate text by
 */


/*1. practice

//define object inside array
function solution(total){
    const txt = ["BMW","Mercy","Lambo"];

    for(let i=total.length ; i<=txt.length ; i++){
        console.log(txt);
    }
}
console.log(total);
*/









/*2. using split to split text 

const x = "helloworld"
for (i=0; i<x.length; i++){
    console.log(x.charAt(i));
}

*/

/** Main question 

const counts = ["900, google.com", 
                "700, Amazon.com",
                "650, mail.yahoo.com"]

function solution(N) {
    for(i=0 ; i<counts.length; i++){
        N = counts;
    }
   
}
 console.log(N)
**/

/**example 
var sampleString = "aaaaa12111";

var seperate = sampleString.split('').reduce(function(start , item){
  Number(item) ? start[0] += item : start[1] += item;
  return start
},['',''])

console.log(seperate) //["12111", "aaaaa"]*/


/**example

function separate(N){
    const counts = ["900, google.com", "700, Amazon.com", "650, mail.yahoo.com"]

}
for (let i = 0 ; i<counts.length ; i++){
    console.log(counts[i]);
}
 */



var str = ".1abc2.5efg3mno";
regexStr= str.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);
console.log(regexStr);


const a = ["900, google.com", 
            "700, Amazon.com",
            "650, mail.yahoo.com"];

function text(txt){
    for(i=txt;i<a.length;i++){
        console.log(a[i]);   
    }
}
console.log(text)
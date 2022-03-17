/**
 * Question
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 * Print the decimal value a new line with 6 places after the decimal.
 * 
 * ex:
 *  arr = [1,1,0,-1,-1]
 *  there are 5 n elements, two positive, two negative and one zero
 *  the ratio of positive is 2/5 = 0.4000000, negative is 2/5 = 0.4000000 and zero is 1/5 = 0.200000
 */
 function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = input.shift();
    input = input.shift().split(' ');
    var len = input.length;
    
    var neg = 0.0;
    var zero = 0.0;
    var pos = 0.0;
    
    input.forEach(function (num) {
        num = parseInt(num);
        if (num < 0) { neg++ }
        else if (num > 0) { pos++ }
        else { zero++ }
    });

    console.log((pos / len).toPrecision(3));
    console.log((neg / len).toPrecision(3));
    console.log((zero / len).toPrecision(3));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
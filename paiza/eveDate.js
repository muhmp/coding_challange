//programming a calendar
// I'm thinking of calculating and displaying the day before an anniversary such as Christmas Eve as Eve.
// Since the date is input, please output one day before that date
// input: 25
// output: 24
// input: 1
// output: 0


// code
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
}
);
reader.on('close', function () {
    var input = lines[0];
    var output = eveDate(input);
    console.log(output);
}
);

// function
function eveDate(input) {
    var output = parseInt(input) - 1;
    return output;
}

// test
//console.log(eveDate(25));
console.log(eveDate(2));

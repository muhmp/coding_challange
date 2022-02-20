let arr = [];
let n = 200;
function generateSeries() {
  for (let i = 0; i < n; i++) {  
    for (let j = 0; j < n; j++) {
      arr.push(Math.pow(2, i) * Math.pow(3, j))
    }
  }
  sort();
}

function sort() {
  arr.sort((a, b) => {
    if (a < b) {return -1;} if (a > b) {return 1;}
    return 0;
  });
}

function solution(N) {
  arr = [];
  if (N >= 0 && N <= 200 ) {
    generateSeries();
   //console.log("arr >>>>>", arr);
    //console.log("result >>>>>", arr[N]);
    return arr[N];
  }
}
console.log(solution(3))
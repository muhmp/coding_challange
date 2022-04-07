//Jessica has an array, numbers, consisting of n integers. She plays a game with this array where, in each move, she selects (n − 1) elements and increments their values by one. She wants to know the minimum number of moves required to make all of the array's elements equal.


function sumofarray(arr, num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
      sum += arr[i];
      return sum;
    }
  }
  
  function opsmallest(arr, n) {
    var small = Number.MAX_VALUE;
    for (var i = 0; i < n; i++)
      if (arr[i] < small)
        small = arr[i];
    return small;
  }
  
  function minoperation(arr, num) {
    var sum = sumofarray(arr, num);
    var smallestop = opsmallest(arr, num);
    var minimumop = sum - (num * smallestop);
    return minimumop;
  }
  
  
  function countMoves(numbers) {
    // Write your code here
    var num = numbers.length;
    var sum = sumofarray(numbers, num);
    var smallestop = opsmallest(numbers, num);
    var minimumop = sum - (num * smallestop);
    return minimumop;
  
  }
  
  let input = [5,
  5,
  6,
  8,
  8,
  5]
  countMoves()
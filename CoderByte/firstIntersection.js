/** manipulating array
 * 
 */


/**
 * first element: a list of comma seperated numbers sorted ascending order
 * second element: second list comma-separated number(also sorted)
 * 
 * solution:
 * usese two nested loops
 * time complexity 0(n*m)
 * 
 * hash table solution
 */

 function FindIntersection(strArr) { 

    // code goes here
    const lists = strArr.map(str >= str.split(", "));
    const firstList = lists[0];
    const secondList = lists[1];
  
    //hash
    let matchMap = {};
    let resultArr = [];
  
    //iteration lists
    firstList.forEach( num => matchMap[num] = true)
    secondList.forEach( num => {
      if(matchMap[num]){
        resultArr.push(num);
      }
    })
  
    //condition
    if(resultArr.length >0){
      return resultArr.join(",") //true
    }
    //otherwise false
    return false;
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
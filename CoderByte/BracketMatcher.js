/**
 * use push and pop
 * //stack push & pop
 */
 function BracketMatcher(str) { 

    //initialize
    const stack = [];
  
    //loop condition
    for(let i = 0; i<str.length ; i++){
      //condition 1
      if(str[i] === '('){
        stack.push('('); //push
      }
        //condition 2 
        else if (str[i] === ')'){
          //condition 3
            if(stack.length === 0) {
              return 0;
            } else {
              stack.pop();
            }
        }
    }
  
    // code goes here  
    //return 1; 
  
    //return using ternary operator (true or false) condition ? val1 : val2
    return stack.length === 0 ? 1:0 ;
  }
     
  // keep this function call here 
  console.log(BracketMatcher(readline()));
/**
 * 1. 4-25 characters
 * 2. start with letter
 * 3. letter, number, and underscore
 * 4. cannot end with underscore
 * 
 * if the username is valid then your program 
 * should return the string true, otherwise return 
 * the string false.
 */

/**try 1
 * 
 * 

function CodelandUsernameValidation(str) { 

    // code goes here 
  
    //4-25
    var maxChar=25;
    var start = 4;
    if(str.length > maxChar && str.length < start){
      str.value = str.value.substr(start,maxChar)
    }
  
    //start with letter
    str.startsWith();
  
    //letter, number , underscore
  
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));
   */


/**try 2  */
function CodelandUsernameValidation(str) { 
    //4 to 25 character
    var length = (str) => str.length >= 4 && str.length <= 25;
    //start with letter
    var regex = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  
    //result (combine)
    return regex.test(str) && length(str);
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation('mamet123'));

/**solution 3: shorter */

function CodelandUsernameValidation1(str) { 
    //regex
    var regex = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    return regex.test(str) && str.length >= 4&& str.length <=25;
}
console.log(CodelandUsernameValidation1('mamet123'))
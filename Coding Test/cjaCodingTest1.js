/** Task1  
 * 
 * complete an implementation of a function solution that should return a string describing of the given string digit
*/
/**function solution(s) {
    var c = s[0];
    if c {  // please fix condition
        return 'upper';
    } else if ___ {  // please fix condition
        return 'lower';
    } else if ___ {  // please fix condition
        return 'digit';
    } else {
        return "other";
    }
}
 */

// Task1
function solution(s){
    var c = s[0];
    //return uppercase
    if(c === c.toUpperCase()){
        return 'upper';
    }
    //return lowercase
    else if(c === c.toLowerCase()){
        return 'lower';
    }
    //return digit
    else if(c === c.toString()){
        return 'digit';
    }
    //return other
    else{
        return 'other';
    }
}

/** Greedy
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */


function longestDiverseString(A,B,C){
    let map = {A,B,C,}
    const sort = () => Object.keys(map).sort((key1, key2) => map[key2] - map[key1])
    let s = ''
    const addKey = (key) => {
      if (map[key] > 1) {
        map[key] -= 2
        s += key + key
      } else if (map[key] === 1) {
        map[key] -= 1
        s += key
      }
    }
    while (map.A > 0 || map.B > 0 || map.C > 0) {
      const [key1, key2] = sort()
      if (map[key2] === 0) {
        addKey(key1)
        return s
      }
      if (map[key1] / map[key2] >= 2) {
        map[key1] -= 2
        s += key1 + key1
        map[key2] -= 1
        s += key2
      } else {
        addKey(key1)
        addKey(key2)
      }
    }
    return s
  }

  console.log(longestDiverseString(6,1,1));



  //solution 1 

  // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(a, b, c) {
    // write your code in JavaScript (Node.js 8.9.4)
    let alphabet = {a,b,c};

    const sort =()=> Object.keys(alphabet).sort((char1,char2) => alphabet[char2] - alphabet[char1])

    let string = '';

    const addChar = (char) => {
        //if string more than
        if (alphabet[char] > 1){
            alphabet[char] -= 2;
            string += alphabet + alphabet;
        }
        //if string equal 
        else if (alphabet[char] === 1 ) {
            alphabet[char] -= 1
            string += alphabet
        }
    }

    //codition for three string compared
    while(alphabet.a >0 || alphabet.b >0 || alphabet.c > 0){
        const [char1,char2] = sort()
        //condition if zero
        if(alphabet[char2] === 0 ){
            addChar(char1);
            return string; //print the char1
        } 
        if(alphabet[char1] / alphabet[char2] >= 2){
            alphabet[char1] -= 2;
            string += char1 + char1;

            alphabet[char2] -=1
            string += char2
        }
            else{
                addChar(char1);
                addChar(char2); 
            }
        }
        return string;
    }

    console.log(solution(6,1,1));

/**
 * 
function minSteps(arr, N){
    //store path of the current folder
    st = [];

    //loop
    for(var i=0;i<N;i++){
        //move folder condition
        if (arr[i] == "../" && (st.length-1) !==0){
            //pop
            st.pop();
        }//remain in the same folder
        else if (arr[i] !="./") {
            //push
            st.push(arr[i]);
        }
        // move to the specific name folder
        else if (arr[i])
    }

    //return
    return st.length;

}
 */


/** sol 2 

function minOperations(logs){
    const ans = 0;
    //loop
    for(var i=0;i<logs.length;i++){
        // move to the parent folder
        if(logs[i] == "../"){
            continue;
        }
        // move to the specific folder
        else if (logs[i] == "./"){
            ans--;
        }
        else{
            ans++;
        }
        if (ans <0){
            ans=0;
        }
    }
    if (ans <0){
        return ans;
    }
}
*/


/** Solution 3 */

function minOperations(list){
    let count = 0;
    //for String s: list
    for(var i=0;i<list.length;i++){
        //if s == "../"
        if(list[i] == "../"){
            count--;
        }
        //if s == "./"
        else if(list[i] == "./"){
            continue;
        }
        else{
            count++;
        }       
    }
    return count;   
}
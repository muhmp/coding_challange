// Richest Customer Wealth
// given m xn integer where i customer and h bank, return weatlth of the richest customer has

// Example 1: [[7,1,3],[2,8,7],[1,9,5]] return 17
// [[1,5],[7,3],[3,5]] return 10
// [[2,8,7],[7,1,3],[1,9,5]] return 17
var maximumWealth = function(accounts){
    // define totalWealth
    let totalWealth = 0;

    // loop for customer
    //the algorithm starts with the customer with the highest wealth
    for (let i = 0 ; i< accounts.length ; i++){
        let wealth =0; // the row column of the matrix is the wealth of the customer
        for (let j = 0 ; j<accounts[i].length; j++){ // the column is the bank
            wealth = wealth + accounts[i][j]; // 
        }
        // maximum
        totalWealth = Math.max(totalWealth, wealth); //(value, max value)
    }
    return totalWealth;
}
//print
//console.log(maximumWealth([[7,1,3],[2,8,7],[1,9,5]])); //17
console.log(maximumWealth([[1,5],[7,3],[3,5]])); //10
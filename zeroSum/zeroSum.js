/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

function zeroSum(array) {
    let abs = {}; //Object to hold the values
    let res = false; //The final result
    //iterate over the array
    for (let i = 0; i < array.length; i++) {
        //check if the current number is negative
        if (array[i] < 0) {
            //check if it's absolute value exists in the obj return true else add it to the obj
            !!abs[Math.abs(array[i])] ? res = true : abs[array[i]] = array[i];
        } else {
            //check if the current value times -1 exists in the obj return true else add it to the obj
            !!abs[(array[i] * -1)] ? res = true : abs[array[i]] = array[i];
        }
    }
    return res;
}
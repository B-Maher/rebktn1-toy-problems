/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string, result, i, current, start, count) {
    result = result || [0, 0];
    i = i || 0; //to keep track of the current index
    current = current || ""; // to keep track of the current char
    start = start || 0;
    count = count || 0;

    //check if the current char is the same as the previous
    if (string[0] === current) {
        count += 1; // increment the count
    } else {
        //check if the current count is bigger than the last combination
        if ((result[1] - result[0]) < count) {
            result = [start, start + count]; //update the result
        }
        //change the current lettre and reset the count and the starting value
        current = string[0];
        start = i;
        count = 0;
    }
    if (string.length === 0) {
        return result
    }
    //redo the same things with recursion
    return longestRun(string.slice(1), result, i + 1, current, start, count)
}
=======



>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6

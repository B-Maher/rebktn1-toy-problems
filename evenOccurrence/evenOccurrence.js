/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence(array) {
    let ocurrances = new Map();
    for (let i = 0; i < array.length; i++) {
        let elm = JSON.stringify(array[i]);
        let value = ocurrances.get(elm);
        if (value) {
            ocurrances.set(elm, value + 1);
        } else {
            ocurrances.set(elm, 1);
        }
    }
    for (let [key, value] of ocurrances) {
        if (value % 2 === 0) {
            return JSON.parse(key);
        }
    }
    return null;
}
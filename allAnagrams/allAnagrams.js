/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  // Your code here.
  let result = {};
  let arr = string.split("");

  function innerFunction(array, temp = []) {
    if (array.length === 0) {
      result[temp.join("")] = temp.join("");
      return;
    }
    for (let i = 0; i < array.length; i++) {
      temp.push(array[i]);
      innerFunction(array.slice(0, i).concat(array.slice(i + 1)), temp);
      temp.pop();
    }
  }
  innerFunction(arr);
  return Object.keys(result);
};

//for the complexity i'am not sure about it it's either fatorial(n) or nlog(n)

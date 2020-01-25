/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords(digitString) {
  // your code here...
  let letters = [
    ["0", "0", "0"],
    ["1", "1", "1"],
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
    ["J", "K", "L"],
    ["M", "N", "O"],
    ["P", "Q", "R", "S"],
    ["T", "U", "V"],
    ["W", "X", "Y", "Z"]
  ];
  let result = [];
  function innerFunction(str, initialString) {
    str = str || [];
    if (str.length === digitString.length) {
      let combianation = str.join("");
      if (!result.includes(combianation)) result.push(combianation);
      return;
    }
    let index = parseInt(initialString[0]);
    for (var i = 0; i < letters[index].length; i++) {
      str.push(letters[index][i]);
      innerFunction(str, initialString.slice(1));
      str.pop();
    }
  }
  innerFunction("", digitString);
  return result;
}

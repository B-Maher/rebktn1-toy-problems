/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
  let rightRegex = new RegExp(/[)]/g);
  let leftRegex = new RegExp(/[(]/g);
  let count = 0;
  if (!str.length) return true;
  if (str[0].match(rightRegex) || str[str.length - 1].match(leftRegex)) return false;
  for (let i = 0; i < str.length; i++) {
    if (count < 0) return false;
    if (str[i].match(rightRegex)) count--;
    if (str[i].match(leftRegex)) count++;
  }
  return count === 0;
};

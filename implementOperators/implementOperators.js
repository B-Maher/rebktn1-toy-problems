/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  if (x < y) [x, y] = [y, x];
  let result = x;
  for (let i = 1; y < 0 ? i < -y : i < y; i++) {
    result += x;
  }
  if (y < 0) return -result;
  return result;
};

var divide = function(x, y) {
  if (y === 0) return null;
};

var modulo = function(x, y) {
  // your code here...
};

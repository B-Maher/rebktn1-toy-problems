// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
//

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

const arrayception = array => {
  let result = 0;
  for (element of array) {
    if (Array.isArray(element)) {
      const temp = helper(array);
      if (temp > result) result = helper;
    }
  }
  return result;
};

const helper = (array, count = 0) => {
  if (!array.length) return 0;
};

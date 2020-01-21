/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};

var numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};

function numberToEnglish(number) {
  if (number < 10) return numbersToWords[number];
  if (number < 100) {
    if (numbersToWords[number]) return numbersToWords[number];
    digits = number % 10;
    tens = number - digits;
    return `${numbersToWords[tens]} ${numbersToWords[digits]}`;
  }

  // let nbr = number.toString();
  // result = "";

  // for (let i = 0; i < nbr.length - 1; i++) {
  //   let base = replaceWithZero(nbr[i], nbr.length - i);
  //   if (base.length > 2) {
  //     if (numbersToPlace[base]) {
  //     }
  //   } else {
  //     console.log(numbersToWords[base]);
  //   }
  // }
}

// function replaceWithZero(nbr, length) {
//   let i = 0;
//   let result = 1;
//   while (i < length - 1) {
//     result += "0";
//     i++;
//   }
//   return result;
// }

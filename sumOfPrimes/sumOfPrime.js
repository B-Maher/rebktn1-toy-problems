/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (checkForPrimes(i)) sum += i;
  }
  return sum;
}

function checkForPrimes(n) {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (i !== n && n % i === 0) return false;
  }
  return true;
}

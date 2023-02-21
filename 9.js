/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var digits = x.toString().split("");
  var realDigits = digits.map(Number);
  var inverted = realDigits.reverse();
  var invertedNum = inverted.reduce(function (accum, digit) {
    return accum * 10 + digit;
  }, 0);

  if (x == invertedNum) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(313))
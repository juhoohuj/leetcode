/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var result = 0;

  if (s.includes("IV") == true) {
    result = result + 4;
    s = s.replace("IV", "")
  }
  if (s.includes("IX") == true) {
    result = result + 9;
    s = s.replace("IX", "")
  }
  if (s.includes("XL") == true) {
    result = result + 40;
    s = s.replace("XL", "")
  }
  if (s.includes("XC") == true) {
    result = result + 90;
    s = s.replace("XC", "")
  }
  if (s.includes("CD") == true) {
    result = result + 400;
    s = s.replace("CD", "")
  }
  if (s.includes("CM") == true) {
    result = result + 900;
    s = s.replace("CM", "")
  }


  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result = result + 1;
    }
    if (s[i] === "V") {
      result = result + 5;
    }
    if (s[i] === "X") {
        result = result + 10;
      }
    if (s[i] === "L") {
      result = result + 50;
    }
    if (s[i] === "C") {
      result = result + 100;
    }
    if (s[i] === "D") {
      result = result + 500;
    }
    if (s[i] === "M") {
      result = result + 1000;
    }
  }

  return result;
};

console.log(romanToInt("MMMCMXCIX"));



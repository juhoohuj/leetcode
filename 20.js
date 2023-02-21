/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let b = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  }
  let h = [];
  for (let char of s) {
    if(b[char]) {
      h.push(b[char])
    }else {
      if(h.pop() !== char) return false;

    }
  }
  return (!h.length)
};


console.log(isValid("()"));

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ")
    let newArr = arr.filter(w => w.length > 0)
    return newArr[newArr.length - 1].length
};


s = "   fly me   to   the moon  "


console.log(lengthOfLastWord(s))
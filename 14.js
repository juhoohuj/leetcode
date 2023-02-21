/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    for (let i = 0; i < 200; i++) {
        
        let letters = strs.map((letter) => letter[i])
        let unique = new Set(letters)
        if (unique.size === 1) {
           
            prefix += Array.from(unique).join("");
        }
        else {
            break
        }     
    }  
    return prefix;
};

let s = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(s));

const reverseString = function(string) {
  let res = ""
  for (let i = string.length - 1; i >= 0; i--) {
    res += string[i]
  }
  return res
};

const palindromes = function (string) {
  let strippedString = string.toLowerCase().replace(/[.,\s!]/g, '');
  return reverseString(strippedString) === strippedString;
};

// Do not edit below this line
module.exports = palindromes;

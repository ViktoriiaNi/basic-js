const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  for (let i in str2) {
    str1 = str1.replace(str2[i], 1)
  }
  return str1.replace(/[^1]/g, '').length
}

module.exports = {
  getCommonCharacterCount
};

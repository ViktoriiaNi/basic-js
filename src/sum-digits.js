const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let strn = n.toString()
  let sum = 0;
  for (let i = 0; i < strn.length; i++){
    sum += +strn[i]
  } let result = sum.toString()
  return (result.length == 1)? sum : +result[0] + +result[1]
}

module.exports = {
  getSumOfDigits
};

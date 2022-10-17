const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  let sortedArr = arr.filter(num => num > 0).sort((a, b) => a - b)
  let i = 0;
  let result = arr.map(function(num) {
    if (num == -1) return -1;
    num = sortedArr[i];
    i++
    return num
  })
  return result
}

module.exports = {
  sortByHeight
};

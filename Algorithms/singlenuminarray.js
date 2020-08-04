/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var x = 0;
  for (i of nums) {
    x ^= i;
  }
  return x;
};

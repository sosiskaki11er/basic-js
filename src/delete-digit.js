const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr=n.toString();
  let temp=[];
  for(let i=0;i<nStr.length;i++){
    temp[i]=Number(nStr.replace(nStr[i],''))
  } 
  return Math.max(...temp)
}
module.exports = {
  deleteDigit
};

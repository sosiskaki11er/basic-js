const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  return (str+`${(options.addition+options.additionSeparator).repeat(options.additionRepeatTimes).slice(0,(options.additionSeparator.length*(-1)))}`+options.separator).repeat(options.repeatTimes).slice(0,(options.separator.length*(-1)))
}

module.exports = {
  repeater
};

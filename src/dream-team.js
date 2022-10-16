const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = [];
  for (let name of members){
    if ((typeof name) === 'string') {
      name = name.trim();
      name = name.slice(0, 1).toUpperCase();
      result.push(name);
    }
  }
  return result.sort().join('');

}

module.exports = {
  createDreamTeam
};

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
  let result='';
  for(let i=0;i<members.length;i++){
    if(typeof members[i]=='string'){
    result+=members[i][0];
    }
  }
  if(result.length==0){
  return false
  }
  result=result.split('').sort();
  let teamName='';
  for(let j=0;j<result.length;j++){
    teamName+=result[j]
  }
  return teamName
}

module.exports = {
  createDreamTeam
};

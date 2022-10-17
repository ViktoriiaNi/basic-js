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
function createDreamTeam(arr) {
  // let arrNames = []
  // for (let i = 0; i < arr.length; i++){
  //   (typeof arr[i] == 'string')? arrNames.push(((arr[i]).toUpperCase().replace(/\s/g,''))[0]): false
  // } return (arrNames.sort()).join('') 
}

module.exports = {
  createDreamTeam
};

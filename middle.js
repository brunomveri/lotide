// ACTUAL FUNCTION
const middle = function(array) {
  let length = array.length;
  if (length <= 2) {
    return [];
  }
  if (length % 2 !== 0) {
    //return array.slice(length/2,(length/2) + 1);
    return array.slice(length/2,-length/2);
  }
  if (length % 2 === 0) {
    return array.slice(length - (array[length-1]/2) - 1, length - (array[length-1]/2) + 1)
  }

};



module.exports = middle;
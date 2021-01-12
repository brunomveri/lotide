const findKeyByValue = function(object,value) {
  let keysArr = Object.keys(object);
  for (let key of keysArr) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
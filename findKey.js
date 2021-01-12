const findKey = (object,callback) => {
  for (let item in object) {
    if(callback(object[item])) {
      return item;
    }
  }
};

module.exports = findKey;
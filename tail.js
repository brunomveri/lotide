const tail = function(actualArr) {
  return actualArr.filter(elem => actualArr.indexOf(elem) !== 0);
};

module.exports = tail;
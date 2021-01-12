const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(item);
    if (callback(item)) {
      results.pop();
      break;
    }
  }
  return results;
};

module.exports = takeUntil;
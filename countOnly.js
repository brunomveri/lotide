const countOnly = function(allItems, itemsToCount) {
  const objAns = {};
  for (let item in itemsToCount) {
    let count = 0;
    for (let i = 0; i < allItems.length; i++) {
      if (item === allItems[i] && itemsToCount[item] === true) {
        count += 1;
        objAns[item] = count;
      }
    }
  }
  return objAns;
};

module.exports = countOnly;
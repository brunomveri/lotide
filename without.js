const without = function (arr1, arr2) {
  let newArr = [];
  outer: for (let i = 0; i < arr1.length; i++) {
    inner: for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        j = 0;
        continue outer;
      }
    }
    newArr.push(arr1[i]);
  }
  return newArr;
};

module.exports = without;
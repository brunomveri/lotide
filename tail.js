const tail = function(actualArr) {
  return actualArr.filter(elem => actualArr.indexOf(elem) !== 0);
};

console.log(tail["Bruno", "Veri"]);
console.log([""])

/**THIS IS MY OLD CODE, BEFORE I LEARNED .filter()**/
// const tail = function(actualArr) {
//   const returnArr = [];
//   if (actualArr.length <= 1) {
//     return returnArr;
//   } else {
//     for (let i = 1; i < actualArr.length; i++) {
//       returnArr[i - 1] = actualArr[i];
//     }
//   }
//   return returnArr;
// };

module.exports = tail;

const assertEqual = function(resultArr, expectedArr) {
  let isMatching = true;
  for (let i = 0; i < expectedArr.length; i++) {
    if (resultArr[i] !== expectedArr[i]) {
      isMatching = false;
      return isMatching;
    }
  }
  return isMatching;
};
const tail = function(actualArr) {
  const returnArr = [];
  if (actualArr.length <= 1) {
    return returnArr;
  } else {
    for (let i = 1; i < actualArr.length; i++) {
      returnArr[i - 1] = actualArr[i];
    }
  }
  return returnArr;
};

const tail1 = tail(["Hello", "Lighthouse", "Labs"]);
const tail2 = tail(["Lighthouse"]);
const tail3 = tail([]);
console.log(assertEqual(tail1,["Lighthouse", "Labs"]));
console.log(assertEqual(tail1,["Lighthouse", "Ladbs"]));
console.log(assertEqual(tail2,["Lighthouse", "Labs"]));
console.log(assertEqual(tail3,["Lighthouse", "Labs"]));
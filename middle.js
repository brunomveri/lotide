const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
     if (array1[i] !== array2[i]) {
       return false;
     }
   }
   return true;
};

const assertArraysEqual = function(array1,array2) {
  const returnBoolean = eqArrays(array1,array2);
  if (returnBoolean) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

// TEST CODE
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8,9,10])); // => [3, 4])
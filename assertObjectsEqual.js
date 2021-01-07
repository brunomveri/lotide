const eqObjects = function(object1, object2) {
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      } 
    } else if (typeof object1[key] === "object") {
      if (!eqObjects(object1[key],object2[key])) {
        return false;
      }
    }
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  const returnBoolean = eqObjects(actual,expected);
  if (returnBoolean) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

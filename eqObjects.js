const eqArrays = require("./eqArrays");

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


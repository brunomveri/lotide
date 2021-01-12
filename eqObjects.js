const eqArrays = require("./eqArrays");

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

  module.exports = eqObjects;


const countLetters = function(string) {
  let arrOfLetters = string.split('');
  function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
  }
  let arrOfLettersFiltered = removeDuplicates(arrOfLetters);
  let obj = {};
  for (let i = 0; i < arrOfLettersFiltered.length; i++) {
    let count = 0;
    for (let letter of string) {
      if (letter === arrOfLettersFiltered[i]) {
        count += 1;
        obj[letter] = count;
      }
    }
  }
  delete obj[" "];
  return obj;
};

module.exports = countLetters;

const letterPositions = function(string) {
  let arrOfLetters = string.split('');
  function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
  }
  let arrOfLettersFiltered = removeDuplicates(arrOfLetters);
  const results = {};
  for (let i = 0; i < arrOfLettersFiltered.length; i++) {
    let count = [];
    for (let j = 0; j < string.length; j++) {
      if (string[j] === arrOfLettersFiltered[i]) {
        count.push(j);
        results[string[j]] = count;
      }
    }
  }
  delete results[" "];
  return results;
};

module.exports = letterPositions;



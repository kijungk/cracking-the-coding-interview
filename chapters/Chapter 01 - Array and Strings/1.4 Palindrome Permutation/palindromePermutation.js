module.exports = (function () {
  function palindromePermutation(string) {
    string = string.toLowerCase().replace(/ /g, '');

    const characterCountMap = {};

    for (let i = 0; i < string.length; i++) {
      if (!characterCountMap[string[i]]) {
        characterCountMap[string[i]] = 0;
      }

      characterCountMap[string[i]] = ++characterCountMap[string[i]];
    }

    let oddCounts = 0;

    Object.values(characterCountMap).forEach((count) => {
      if (count % 2 === 1) {
        oddCounts = ++oddCounts;
      }
    });

    if (string.length % 2 !== 0) { // if string length is odd number
      if (oddCounts !== 1) {
        return false;
      }
    } else { // if string length is even number
      if (oddCounts !== 0) {
        return false;
      }
    }

    return true;
  }

  return {
    palindromePermutation
  };
})();
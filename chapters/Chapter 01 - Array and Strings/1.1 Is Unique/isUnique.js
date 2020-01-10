module.exports = (function () {
  function isUnique(string) {
    const map = {};

    for (let i = 0; i < string.length; i++) {
      if (map[string[i]]) {
        return false;
      }

      map[string[i]] = true;
    }

    return true;
  }

  function isUniqueNoAdditionalDataStructures(string) {
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false;
        }
      }
    }

    return true;
  }

  return {
    isUnique,
    isUniqueNoAdditionalDataStructures
  };
})();
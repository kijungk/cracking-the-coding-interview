module.exports = (function () {
  function stringRotation(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }

    const doubleString1 = string1 + string1;

    if (!isSubstring(doubleString1, string2)) {
      return false;
    }

    return true;
  }

  function isSubstring(string1, string2) {
    return string1.includes(string2);
  }

  return {
    stringRotation
  };
})();
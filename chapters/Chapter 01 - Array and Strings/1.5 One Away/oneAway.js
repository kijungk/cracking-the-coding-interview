module.exports = (function () {
  function oneAway(string1, string2) {
    // character edit can be grouped into edit and insert/delete

    if (string1.length === string2.length) {
      // edit
      return isOneEditAway(string1, string2);
    } else if (Math.abs(string1.length - string2.length) === 1) {
      // insert/delete
      if (string1.length > string2.length) {
        return isOneInsertAway(string2, string1);
      }

      return isOneInsertAway(string1, string2);
    }

    return false;
  }

  function isOneEditAway(string1, string2) {
    let difference = 0;

    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) {
        difference = ++difference;
      }
    }

    return difference <= 1;
  }

  function isOneInsertAway(shorter, longer) {
    let
      shorterIndex = 0,
      longerIndex = 0;

    while (shorterIndex < shorter.length && longerIndex < longer.length) {
      if (shorter[shorterIndex] !== longer[longerIndex]) {
        if (shorterIndex !== longerIndex) {
          return false;
        }

        longerIndex = ++longerIndex;
      } else {
        shorterIndex = ++shorterIndex;
        longerIndex = ++longerIndex;
      }
    }

    return true;
  }

  return {
    oneAway
  };
})();
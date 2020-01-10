module.exports = (function () {
  function stringCompression(string) {
    let
      compressedString = '',
      consecutiveCount = 0;


    for (let i = 0; i < string.length; i++) {
      consecutiveCount = ++consecutiveCount;

      if (i >= string.length || string[i] !== string[i + 1]) {
        compressedString += string[i] + consecutiveCount;
        consecutiveCount = 0;
      }
    }

    return compressedString.length < string.length ? compressedString : string;
  }

  return {
    stringCompression
  };
})();
module.exports = (function () {
  function urlify(string, length) {
    string = string.slice(0, length);

    return string.replace(/ /g, '%20');
  }

  return {
    urlify
  };
})();
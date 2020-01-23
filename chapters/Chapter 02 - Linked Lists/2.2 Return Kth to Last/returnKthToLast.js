module.exports = (function () {
  function returnKthToLast(head, k) {
    let
      current = head,
      runner = current;

    while (current.next) {
      for (let i = 1; i < k; i++) {
        runner = runner.next;
      }

      if (runner.next === null) {
        return current;
      }

      current = current.next;
      runner = current;
    }
  }

  return {
    returnKthToLast
  };
})();
module.exports = (function () {
  function stringifyLinkedList(head) {
    let
      current = head,
      string = '';

    while (current.next) {
      string += current.value + ' | ';
      current = current.next;
    }

    string += current.value;

    return string;
  }

  function removeDups(head) {
    const map = {};

    let
      current = head,
      previous = null;

    while (current.next) {
      if (!map[current.value]) {
        map[current.value] = true;
        previous = current;
      } else {
        previous.next = current.next;
      }

      current = current.next;
    }
  }

  function removeDupsNoMap(head) {
    let current = head;

    while (current.next) {
      let runner = current;

      while (runner.next) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }

      current = current.next;
    }
  }

  return {
    stringifyLinkedList,
    removeDups,
    removeDupsNoMap
  };
})();
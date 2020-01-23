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

  function sumLists(head1, head2, isReverse) {

  }

  return {
    sumLists,
    stringifyLinkedList
  };
})();
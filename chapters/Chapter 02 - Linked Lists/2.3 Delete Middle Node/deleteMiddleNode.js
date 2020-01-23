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

  function deleteMiddleNode(node) {
    let current = node;

    if (current.next) {
      current.value = current.next.value;
      current.next = current.next.next;
    }

    return;
  }

  return {
    deleteMiddleNode,
    stringifyLinkedList
  };
})();
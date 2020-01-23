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

  function partition(node, value) {
    let
      head = node,
      tail = node;

    while (node) {
      const next = node.next;

      if (node.value < value) {
        node.next = head;
        head = node;
      } else {
        tail.next = node;
        tail = node;
      }

      node = next;
    }

    tail.next = null;

    return head;
  }

  return {
    partition,
    stringifyLinkedList
  };
})();
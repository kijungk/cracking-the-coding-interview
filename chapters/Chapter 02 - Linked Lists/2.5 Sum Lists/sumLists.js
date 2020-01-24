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

  function linkedListNode(value) {
    return {
      next: null,
      value: value
    };
  }

  function sumLists(list1, list2, carry = 0) {
    if (!list1 && !list2 && !carry) {
      return null;
    }

    let value = carry;

    if (list1) {
      value += list1.value;
    }

    if (list2) {
      value += list2.value;
    }

    const node = new linkedListNode(value % 10);

    node.next = sumLists(
      list1 ? list1.next : null,
      list2 ? list2.next : null,
      value >= 10 ? 1 : 0
    );

    return node;
  }

  function sumListsForwards(list1, list2) {

  }

  return {
    sumLists,
    sumListsForwards,
    stringifyLinkedList
  };
})();
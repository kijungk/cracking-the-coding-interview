module.exports = (function () {
  function isPalindrome(list) {
    const reversedList = reverseList(list);

    return compareLists(list, reversedList);
  }

  function reverseList(head) {
    let newHead = null;

    while (head) {
      const reversedList = linkedListNode(head.value);
      reversedList.next = newHead;
      newHead = reversedList;
      head = head.next;
    }

    return newHead;
  }

  function compareLists(list1, list2) {
    while (list1 && list2) {
      if (list1.value !== list2.value) {
        return false;
      }

      list1 = list1.next;
      list2 = list2.next;
    }

    return !list1 && !list2;
  }

  function linkedListNode(value) {
    return {
      next: null,
      value: value
    };
  }

  return {
    isPalindrome
  };
})();
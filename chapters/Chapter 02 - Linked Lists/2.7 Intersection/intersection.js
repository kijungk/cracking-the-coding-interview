module.exports = (function () {
  function intersection(list1, list2) {
    const
      list1Length = findLength(list1),
      list2Length = findLength(list2),
      difference = Math.abs(list1Length - list2Length);

    if (list1Length > list2Length) {
      list1 = trimStart(list1, difference);
    } else if (list2Length > list1Length) {
      list2 = trimStart(list2, difference);
    }

    while (list1 !== list2) {
      list1 = list1.next;
      list2 = list2.next;
    }

    return list1;
  }

  function trimStart(list, length) {
    for (let i = length; i > 0; i--) {
      list = list.next;
    }

    return list;
  }

  function findLength(head) {
    let counter = 0;

    while (head) {
      counter = ++counter;
      head = head.next;
    }

    return counter;
  }

  return {
    intersection
  };
})();
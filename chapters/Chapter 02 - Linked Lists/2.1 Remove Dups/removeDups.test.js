const { stringifyLinkedList, removeDups, removeDupsNoMap } = require('./removeDups');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, d, e, A, B, C;


beforeEach(() => {
  a = linkedListNode('p');
  b = linkedListNode('a');
  c = linkedListNode('p');
  d = linkedListNode('a');
  e = linkedListNode('s');
  A = linkedListNode('p');
  B = linkedListNode('a');
  C = linkedListNode('s');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  A.next = B;
  B.next = C;
});

describe('2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list. How would you solve this problem if a temporary buffer is not allowed?', () => {
  test('method should be of a function type', () => {
    expect(typeof removeDups).toEqual('function');
  });

  test('should return linked list with duplicates removed', () => {
    removeDups(a);
    expect(stringifyLinkedList(a)).toEqual(stringifyLinkedList(A));
  });

  test('should return linked list with duplicates removed', () => {
    removeDupsNoMap(a);
    expect(stringifyLinkedList(a)).toEqual(stringifyLinkedList(A));
  });
});
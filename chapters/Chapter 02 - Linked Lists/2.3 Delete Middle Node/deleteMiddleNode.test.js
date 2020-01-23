const { deleteMiddleNode, stringifyLinkedList } = require('./deleteMiddleNode');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, d, e;


beforeEach(() => {
  a = linkedListNode('p');
  b = linkedListNode('a');
  c = linkedListNode('p');
  d = linkedListNode('a');
  e = linkedListNode('s');
  A = linkedListNode('p');
  B = linkedListNode('a');
  C = linkedListNode('a');
  D = linkedListNode('s');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  A.next = B;
  B.next = C;
  C.next = D;

});

describe('2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.', () => {
  test('method should be of a function type', () => {
    expect(typeof deleteMiddleNode).toEqual('function');
  });

  test('should return kth to last element', () => {
    deleteMiddleNode(c);
    expect(stringifyLinkedList(a)).toEqual(stringifyLinkedList(A));
  });
});
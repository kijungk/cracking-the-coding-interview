const { returnKthToLast } = require('./returnKthToLast');

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

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
});

describe('2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.', () => {
  test('method should be of a function type', () => {
    expect(typeof returnKthToLast).toEqual('function');
  });

  test('should return kth to last element', () => {
    expect(returnKthToLast(a, 3)).toEqual(c);
  });
});
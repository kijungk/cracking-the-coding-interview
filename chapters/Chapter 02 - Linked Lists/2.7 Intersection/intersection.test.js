const { intersection } = require('./intersection');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, d, A, B;


beforeEach(() => {
  a = linkedListNode();
  b = linkedListNode();
  c = linkedListNode();
  d = linkedListNode();

  A = linkedListNode();
  B = linkedListNode();
  C = linkedListNode();

  a.next = b;
  b.next = c;
  c.next = d;

  A.next = B;
  B.next = d;
});

describe('2.7 Intersection: Given two linked lists, determine if the two lists intersect. Return the intersecting node.', () => {
  test('method should be of a function type', () => {
    expect(typeof intersection).toEqual('function');
  });

  test('should return intersecting node if there is an intersect', () => {
    expect(intersection(a, A)).toEqual(d);
  });
});
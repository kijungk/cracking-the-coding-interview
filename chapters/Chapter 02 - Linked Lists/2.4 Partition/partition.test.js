const { partition, stringifyLinkedList } = require('./partition');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, d, e;


beforeEach(() => {
  a = linkedListNode(4);
  b = linkedListNode(5);
  c = linkedListNode(3);
  d = linkedListNode(7);
  e = linkedListNode(8);
  f = linkedListNode(4);
  g = linkedListNode(2);
  h = linkedListNode(1);
  i = linkedListNode(9);

  A = linkedListNode(1);
  B = linkedListNode(2);
  C = linkedListNode(4);
  D = linkedListNode(3);
  E = linkedListNode(4);
  F = linkedListNode(5);
  G = linkedListNode(7);
  H = linkedListNode(8);
  I = linkedListNode(9);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  g.next = h;
  h.next = i;

  A.next = B;
  B.next = C;
  C.next = D;
  D.next = E;
  E.next = F;
  F.next = G;
  G.next = H;
  H.next = I;

});

describe('2.4 Partition: Write code to partition a linked list round a value x, such that all nodes less than x come before all nodes greater than or equal to x.', () => {
  test('method should be of a function type', () => {
    expect(typeof partition).toEqual('function');
  });

  test('should return rearranged linked list based on input partition value', () => {
    const head = partition(a, 5);
    expect(stringifyLinkedList(head)).toEqual(stringifyLinkedList(A));
  });
});
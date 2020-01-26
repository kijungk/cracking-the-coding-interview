const { loopDetection } = require('./loopDetection');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, d, e, f, g, h, i, j, k;


beforeEach(() => {
  a = linkedListNode();
  b = linkedListNode();
  c = linkedListNode();
  d = linkedListNode();
  e = linkedListNode();
  f = linkedListNode();
  g = linkedListNode();
  h = linkedListNode();
  i = linkedListNode();
  j = linkedListNode();
  k = linkedListNode();

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  g.next = h;
  h.next = i;
  i.next = j;
  j.next = k;
  k.next = d;
});

describe('2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.', () => {
  test('method should be of a function type', () => {
    expect(typeof loopDetection).toEqual('function');
  });

  test('should return node at the beginning of the loop', () => {
    expect(loopDetection(a)).toEqual(d);
  });
});
const { sumLists, stringifyLinkedList } = require('./sumLists');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, A, B, C, x, y, z;


beforeEach(() => {
  a = linkedListNode(4);
  b = linkedListNode(5);
  c = linkedListNode(3);

  A = linkedListNode(1);
  B = linkedListNode(3);
  C = linkedListNode(4);

  x = linkedListNode(5);
  y = linkedListNode(8);
  z = linkedListNode(7);

  a.next = b;
  b.next = c;

  A.next = B;
  B.next = C;

});

describe('2.5 Sum Lists: Write a function that adds the two numbers represented by linked lists and return the sum as a linked list. How can this be done for both reverse and regular order of the lists?', () => {
  test('method should be of a function type', () => {
    expect(typeof sumLists).toEqual('function');
  });

  test('should return sum of the two lists in reverse order', () => {
    x.next = y;
    y.next = z;

    const head = sumLists(a, A, true);
    expect(stringifyLinkedList(head)).toEqual(stringifyLinkedList(x));
  });

  test('should return sum of the two lists in forward order', () => {
    z.next = y;
    y.next = x;
    x.next = null;

    const head = sumLists(a, A, false);
    expect(stringifyLinkedList(head)).toEqual(stringifyLinkedList(z));
  });
});
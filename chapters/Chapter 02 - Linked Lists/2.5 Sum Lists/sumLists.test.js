const { sumLists, sumListsForwards, stringifyLinkedList } = require('./sumLists');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, A, B, C, x, y, z;


beforeEach(() => {
  a = linkedListNode(7);
  b = linkedListNode(1);
  c = linkedListNode(6);

  A = linkedListNode(5);
  B = linkedListNode(9);
  C = linkedListNode(2);

  x = linkedListNode(2);
  y = linkedListNode(1);
  z = linkedListNode(9);

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

    const head = sumLists(a, A);
    expect(stringifyLinkedList(head)).toEqual(stringifyLinkedList(x));
  });
});
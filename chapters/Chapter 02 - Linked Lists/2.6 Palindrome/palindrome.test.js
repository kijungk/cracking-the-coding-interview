const { isPalindrome } = require('./palindrome');

function linkedListNode(value) {
  return {
    next: null,
    value: value
  };
}

let a, b, c, d, e, f, g, A, B, C, D;


beforeEach(() => {
  a = linkedListNode('t');
  b = linkedListNode('a');
  c = linkedListNode('c');
  d = linkedListNode('o');
  e = linkedListNode('c');
  f = linkedListNode('a');
  g = linkedListNode('t');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;

  A = linkedListNode('d');
  B = linkedListNode('e');
  C = linkedListNode('c');
  D = linkedListNode('k');

  A.next = B;
  B.next = C;
  C.next = D;
});

describe('2.6 Palindrome: Implement a function to check if a linked list is a palindrome.', () => {
  test('method should be of a function type', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  test('should return true if linked list is a palindrome', () => {
    expect(isPalindrome(a)).toEqual(true);
  });

  test('should return false if linked list is not a palindrome', () => {
    expect(isPalindrome(A)).toEqual(false);
  });
});
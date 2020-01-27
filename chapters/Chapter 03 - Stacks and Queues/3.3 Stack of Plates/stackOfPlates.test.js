const StackOfPlates = require('./stackOfPlates');

let stackOfPlates;

beforeEach(() => {
  stackOfPlates = new StackOfPlates();

  stackOfPlates.push(3);
  stackOfPlates.push(2);
  stackOfPlates.push(1);
});

describe('3.3 Stack of Plates: Implement a data structure that is composed of several stacks and should create a new stack once the previous oe exceeds capacity. Implement popAt(int index) which performs a pop operation on a specific sub-stack.', () => {
  test('stackOfPlates should be of type StackOfPlates', () => {
    expect(stackOfPlates instanceof StackOfPlates).toEqual(true);
  });

  test('min should return the minimum element in the stack', () => {

  });
});
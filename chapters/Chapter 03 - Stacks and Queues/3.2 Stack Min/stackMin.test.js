const StackMin = require('./stackMin');

let stackMin;

beforeEach(() => {
  stackMin = new StackMin();

  stackMin.push(3);
  stackMin.push(2);
  stackMin.push(1);
});

describe('3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time.', () => {
  test('stackMin should be of type StackMin', () => {
    expect(stackMin instanceof StackMin).toEqual(true);
  });

  test('min should return the minimum element in the stack', () => {
    expect(stackMin.min()).toEqual(1);
  });

  test('min should return the next highest value if the current minimum value is popped out of the stack', () => {
    stackMin.pop();

    expect(stackMin.min()).toEqual(2);
  });
});
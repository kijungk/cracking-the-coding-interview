const ThreeInOne = require('./threeInOne');

let threeInOne;

beforeEach(() => {
  threeInOne = new ThreeInOne();

  threeInOne.onePush('a1');
  threeInOne.onePush('a2');
  threeInOne.onePush('a3');

  threeInOne.twoPush('b1');
  threeInOne.twoPush('b2');
  threeInOne.twoPush('b3');

  threeInOne.threePush('c1');
  threeInOne.threePush('c2');
  threeInOne.threePush('c3');
});

describe('3.1 Three in One: Describe how you could use a single array to implement three stacks.', () => {
  test('ThreeInOne should be of type ThreeInOne', () => {
    expect(threeInOne instanceof ThreeInOne).toEqual(true);
  });

  test('Pushing into first stack should insert item at the end of the first stack', () => {
    threeInOne.onePush('a4')

    expect(threeInOne.onePeek()).toEqual('a4');
  });

  test('Pushing into second stack should insert item at the end of the second stack', () => {
    threeInOne.twoPush('b4')

    expect(threeInOne.twoPeek()).toEqual('b4');
  });

  test('Pushing into third stack should insert item at the end of the third stack', () => {
    threeInOne.threePush('c4')

    expect(threeInOne.threePeek()).toEqual('c4');
  });

  test('Popping from the first stack should remove item at the end of the first stack', () => {
    threeInOne.onePop()

    expect(threeInOne.onePeek()).toEqual('a2');
  });

  test('Popping from the second stack should remove item at the end of the second stack', () => {
    threeInOne.twoPop()

    expect(threeInOne.twoPeek()).toEqual('b2');
  });

  test('Popping from the third stack should remove item at the end of the third stack', () => {
    threeInOne.threePop()

    expect(threeInOne.threePeek()).toEqual('c2');
  });
});
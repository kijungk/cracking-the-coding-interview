const { stringRotation } = require('./stringRotation');

const
  passingInputs = [
    ['waterbottle', 'erbottlewat'],
    ['tacocat', 'cattaco'],
    ['moonlanding', 'landingmoon']
  ],
  failingInputs = [
    ['abcd', 'efgh'],
    ['hello', 'world'],
    ['holy', 'moly']
  ];

describe('1.9 String Rotation: Given two strings, write code to check if s2 is a rotation of s1 using only one call to isSubstring.', () => {
  test('method should be of a function type', () => {
    expect(typeof stringRotation).toEqual('function');
  });

  test('should return true if input s2 is a rotation of s1', () => {
    passingInputs.forEach((input) => {
      expect(stringRotation(input[0], input[1])).toEqual(true);
    });
  });

  test('should return false if input s2 is not a rotation of s1', () => {
    failingInputs.forEach((input) => {
      expect(stringRotation(input[0], input[1])).toEqual(false);
    });
  });
});
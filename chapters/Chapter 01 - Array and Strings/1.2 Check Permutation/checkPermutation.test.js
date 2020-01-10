const { checkPermutation } = require('./checkPermutation');

const
  passingInputs = [
    ['taco cat', 'cat taco'],
    ['racecar', 'carrace'],
    ['App Store', 'Store App']
  ],
  failingInputs = [
    ['abcd', 'efgh'],
    ['Racecar', 'racecar'],
    [' ', '     ']
  ];

describe('1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.', () => {
  test('method should be of a function type', () => {
    expect(typeof checkPermutation).toEqual('function');
  });

  test('should return true if input strings are permutations of one another', () => {
    passingInputs.forEach((input) => {
      expect(checkPermutation(input[0], input[1])).toEqual(true);
    });
  });

  test('should return false if input strings are not permutations of one another', () => {
    failingInputs.forEach((input) => {
      expect(checkPermutation(input[0], input[1])).toEqual(false);
    });
  });
});
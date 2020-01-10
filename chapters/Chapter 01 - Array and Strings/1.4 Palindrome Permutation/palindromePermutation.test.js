const { palindromePermutation } = require('./palindromePermutation');

const
  passingInputs = [
    'Tact Coa',
    'SaSa',
    '1  21'
  ],
  failingInputs = [
    'abcdefg',
    'shake n bake',
    '1231'
  ];

describe('1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.', () => {
  test('method should be of a function type', () => {
    expect(typeof palindromePermutation).toEqual('function');
  });

  test('should return true if input strings are permutations of one another', () => {
    passingInputs.forEach((input) => {
      expect(palindromePermutation(input)).toEqual(true);
    });
  });

  test('should return false if input strings are not permutations of one another', () => {
    failingInputs.forEach((input) => {
      expect(palindromePermutation(input)).toEqual(false);
    });
  });
});
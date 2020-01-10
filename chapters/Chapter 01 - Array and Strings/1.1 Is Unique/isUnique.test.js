const
  { isUnique, isUniqueNoAdditionalDataStructures } = require('./isUnique');

// test inputs
const
  passingInputs = [
    'abcdefghijklmnop',
    'sky land',
    'AaBbCcDdEe'
  ],
  failingInputs = [
    'abbcde',
    'monkey pod',
    '  abc'
  ];

describe('1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?', () => {
  test('methods should be of a function type', () => {
    expect(typeof isUnique).toEqual('function');
    expect(typeof isUniqueNoAdditionalDataStructures).toEqual('function');
  });

  test('should return true if all characters in a string is unique (case sensitive)', () => {
    passingInputs.forEach((input) => {
      expect(isUnique(input)).toEqual(true);
      expect(isUniqueNoAdditionalDataStructures(input)).toEqual(true);
    });
  });

  test('should return false if duplicate character exists in a string (accounts for whitespaces)', () => {
    failingInputs.forEach((input) => {
      expect(isUnique(input)).toEqual(false);
      expect(isUniqueNoAdditionalDataStructures(input)).toEqual(false);
    });
  });
});
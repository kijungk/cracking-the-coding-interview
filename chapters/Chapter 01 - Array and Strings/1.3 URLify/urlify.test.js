const { urlify } = require('./urlify');

const
  inputAndExpectedValues = [
    {
      input: ['Mr John Smith', 13],
      expected: 'Mr%20John%20Smith'
    },
    {
      input: ['hello world ', 12],
      expected: 'hello%20world%20'
    }
  ];

describe('1.3 URLify: Write a method to replace all spaces in a string with \'%20\'. You are given the "true" length of the string.', () => {
  test('method should be of a function type', () => {
    expect(typeof urlify).toEqual('function');
  });

  test('should return expected value if given a string and "true" length', () => {
    inputAndExpectedValues.forEach((inputAndExpectedValue) => {
      expect(urlify(inputAndExpectedValue.input[0], inputAndExpectedValue.input[1])).toEqual(inputAndExpectedValue.expected);
    });
  });
});
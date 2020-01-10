const { stringCompression } = require('./stringCompression');

const
  inputAndExpectedValues = [
    {
      input: 'aabccccaaa',
      expected: 'a2b1c4a3'
    },
    {
      input: 'abcd',
      expected: 'abcd'
    },
    {
      input: '     ',
      expected: ' 5'
    }
  ];

describe('1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters. If the "compressed" string would not become smaller than the original string, return the original string.', () => {
  test('method should be of a function type', () => {
    expect(typeof stringCompression).toEqual('function');
  });

  test('should return "compressed" string or original string based on which string is smaller', () => {
    inputAndExpectedValues.forEach((inputAndExpectedValue) => {
      expect(stringCompression(inputAndExpectedValue.input)).toEqual(inputAndExpectedValue.expected);
    });
  });
});
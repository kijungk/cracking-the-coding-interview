const { zeroMatrix } = require('./zeroMatrix');

const
  inputAndExpectedValues = [
    {
      input: [
        [1, 2, 3, 4],
        [5, 6, 0, 8],
        [9, 1, 1, 2],
        [3, 0, 5, 6],
        [1, 5, 7, 3]
      ],
      expected: [
        [1, 0, 0, 4],
        [0, 0, 0, 0],
        [9, 0, 0, 2],
        [0, 0, 0, 0],
        [1, 0, 0, 3]
      ],
    },
    {
      input: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 1],
        [1, 0, 1, 1, 1],
        [6, 7, 0, 9, 2],
        [2, 2, 3, 2, 2],
        [6, 1, 0, 9, 3]
      ],
      expected: [
        [1, 0, 0, 4, 5],
        [6, 0, 0, 9, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [2, 0, 0, 2, 2],
        [0, 0, 0, 0, 0]
      ],
    }
  ];

describe('1.8 Zero Matrix: Write an algorithm such that if an element in a MxN matrix is 0, its entire row and column are set to 0', () => {
  test('method should be of a function type', () => {
    expect(typeof zeroMatrix).toEqual('function');
  });

  test('should return matrix with rows and columns that contained a 0 element switched to 0 values', () => {
    inputAndExpectedValues.forEach((inputAndExpectedValue) => {
      expect(zeroMatrix(inputAndExpectedValue.input)).toEqual(inputAndExpectedValue.expected);
    });
  });
});
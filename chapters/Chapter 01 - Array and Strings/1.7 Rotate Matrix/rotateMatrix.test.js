const { rotateMatrix } = require('./rotateMatrix');

const
  inputAndExpectedValues = [
    {
      input: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ],
      expected: [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4]
      ],
    },
    {
      input: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
      ],
      expected: [
        [21, 16, 11, 6, 1],
        [22, 17, 12, 7, 2],
        [23, 18, 13, 8, 3],
        [24, 19, 14, 9, 4],
        [25, 20, 15, 10, 5]
      ],
    }
  ];

describe('1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?', () => {
  test('method should be of a function type', () => {
    expect(typeof rotateMatrix).toEqual('function');
  });

  test('should return matrix rotated 90 degrees', () => {
    inputAndExpectedValues.forEach((inputAndExpectedValue) => {
      expect(rotateMatrix(inputAndExpectedValue.input)).toEqual(inputAndExpectedValue.expected);
    });
  });
});
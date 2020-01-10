const { oneAway } = require('./oneAway');

const
  passingInputs = [
    ['pale', 'ple'],
    ['pales', 'pale'],
    ['pale', 'bale']
  ],
  failingInputs = [
    ['pass', 'class'],
    ['tense', 'dance'],
    ['crack', 'back']
  ];

describe('1.5 One Away: Given two strings, write a function to check if they are one character edit (or zero character edits) away.', () => {
  test('method should be of a function type', () => {
    expect(typeof oneAway).toEqual('function');
  });

  test('should return true if input strings are one character edit away from one other', () => {
    passingInputs.forEach((input) => {
      expect(oneAway(input[0], input[1])).toEqual(true);
    });
  });

  test('should return false if input strings are not one character edit away from one another', () => {
    failingInputs.forEach((input) => {
      expect(oneAway(input[0], input[1])).toEqual(false);
    });
  });
});
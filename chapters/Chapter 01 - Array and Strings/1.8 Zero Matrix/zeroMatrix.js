module.exports = (function () {
  function zeroMatrix(matrix) {
    const columnsToZero = {};
    const rowsToZero = {};

    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        if (matrix[row][column] === 0) {
          columnsToZero[column] = true;
          rowsToZero[row] = true;
        }
      }
    }

    for (let column in columnsToZero) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][column] = 0;
      }
    }

    for (let row in rowsToZero) {
      for (let i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = 0;
      }
    }

    return matrix;
  }



  return {
    zeroMatrix
  };
})();
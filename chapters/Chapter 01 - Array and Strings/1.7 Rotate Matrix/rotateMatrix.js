module.exports = (function () {
  function rotateMatrix(matrix) {
    if (matrix.length <= 1 || matrix.length !== matrix[0].length) {
      return false;
    }

    const side = matrix.length;

    for (let layer = 0; layer < side / 2; layer++) {
      const
        first = layer,
        last = side - 1 - layer;
      for (let i = first; i < last; i++) {
        const
          offset = i - first,
          top = matrix[first][i]; // save top

        matrix[first][i] = matrix[last - offset][first]; // left to top
        matrix[last - offset][first] = matrix[last][last - offset]; // bottom to left
        matrix[last][last - offset] = matrix[i][last]; // right to bottom
        matrix[i][last] = top; // top to right
      }
    }

    return matrix;
  }

  return {
    rotateMatrix
  };
})();
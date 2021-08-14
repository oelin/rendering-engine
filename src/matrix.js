class Matrix {
  constructor(rows, columns) {
    this.data = Array(rows).fill(0).map(_ => Array(columns).fill(0))
    this.shape = (rows, columns)
  }
}


Matrix.fromArray = function(array) {
  let matrix = new Matrix(0, 0)

  matrix.data = array
  matrix.shape = (array.length, array[0].length)

  return matrix
}


export default Matrix

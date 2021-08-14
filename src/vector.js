class Vector {
  constructor(x=0, y=0, z=0) {
    this.x = x
    this.y = y
    this.z = z
  }

  scale(value) {
    this.x *= value
    this.y *= value
    this.z *= value
  }

  increase(value) {
    this.x += value
    this.y += value
    this.z += value
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z
  }

  // apply 3D transformation

  transform(matrix) {
    let data = matrix.data

    let x = this.x
    let y = this.y
    let z = this.z

    this.x = data[0][0]*x + data[1][0]*y + data[2][0]*z
    this.y = data[0][1]*x + data[1][1]*y + data[2][1]*z
    this.z = data[0][2]*x + data[1][2]*y + data[2][2]*z
  }

  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }
}


export default Vector

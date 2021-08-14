class Mesh {
  constructor(triangles=[]) {
    this.triangles = triangles
  }

  add(vector) {
    this.triangles.forEach(triangle => {
      triangle.a.add(vector)
      triangle.b.add(vector)
      triangle.c.add(vector)
    })
  }

  transform(matrix) {
    this.triangles.forEach(triangle => {
      triangle.a.transform(matrix)
      triangle.b.transform(matrix)
      triangle.c.transform(matrix)
    })
  }
}


export default Mesh

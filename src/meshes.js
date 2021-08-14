import Mesh from './mesh.js'
import Triangle from './triangle.js'
import Vector from './vector.js'


  class Cube extends Mesh {

    constructor() {
      super()

      this.triangles = [
        // south face
        
        new Triangle(new Vector(0, 0, 0), new Vector(0, 1, 0), new Vector(1, 1, 0)),
        new Triangle(new Vector(0, 0, 0), new Vector(1, 1, 0), new Vector(1, 0, 0)),

        // east face

        new Triangle(new Vector(1, 0, 0), new Vector(1, 1, 0), new Vector(1, 1, 1)),
        new Triangle(new Vector(1, 0, 0), new Vector(1, 1, 1), new Vector(1, 0, 1)),

        // north face

        new Triangle(new Vector(1, 0, 1), new Vector(1, 1, 1), new Vector(0, 1, 1)),
        new Triangle(new Vector(1, 0, 1), new Vector(0, 1, 1), new Vector(0, 0, 1)),

        // west face

        new Triangle(new Vector(0, 0, 1), new Vector(0, 1, 1), new Vector(0, 1, 0)),
        new Triangle(new Vector(0, 0, 1), new Vector(0, 1, 0), new Vector(0, 0, 0)),

        // top face

        new Triangle(new Vector(0, 1, 0), new Vector(0, 1, 1), new Vector(1, 1, 1)),
        new Triangle(new Vector(0, 1, 0), new Vector(1, 1, 1), new Vector(1, 1, 0)),

        // buttom face

        new Triangle(new Vector(1, 0, 1), new Vector(0, 0, 1), new Vector(0, 0, 0)),
        new Triangle(new Vector(1, 0, 1), new Vector(0, 0, 0), new Vector(1, 0, 0))
      ]
    }
  }


export { Cube }

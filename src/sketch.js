import World from './world.js'
import Vector from './vector.js'
import Matrix from './matrix.js'
import { Cube } from './meshes.js'


window.onload = function() {

  const canvas = document.querySelector('canvas')
  const world = new World(canvas)

  let matRotx, matRoty
  let theta = new Vector()

  world.draw = function() {
    this.clear()

    let cube = new Cube()
    //theta.x -= 0.01
    theta.y -= 0.01

    matRotx = Matrix.fromArray([
      [1.0, 0.0, 0.0],
      [0.0, Math.cos(theta.x), Math.sin(theta.x)],
      [0.0, -Math.sin(theta.x), Math.cos(theta.x)]
    ])

    matRoty = Matrix.fromArray([
      [Math.cos(theta.y), 0.0, -Math.sin(theta.y)],
      [0.0, 1.0, 0.0],
      [Math.sin(theta.y), 0.0, Math.cos(theta.y)]
    ])

    cube.transform(matRotx)
    cube.transform(matRoty)
    cube.add(new Vector(0, 0, 2))

    this.paint(cube)
  }

  world.start()
}

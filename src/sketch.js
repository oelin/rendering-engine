import World from './world.js'
import Vector from './vector.js'
import Matrix from './matrix.js'
import { Cube } from './meshes.js'


window.onload = function() {

  const canvas = document.querySelector('canvas')
  const world = new World(canvas)

  let matRotx, matRoty
  let theta = new Vector()
  let theta_velocity = new Vector()
  let velocity = new Vector()
  let position = new Vector(0, 0, 2)

  window.onkeydown = function({ key }) {
        if (key === 'ArrowLeft') {
                theta_velocity.y = 0.1
        }

        else if (key == 'ArrowRight') {
                theta_velocity.y = -0.1
        }

        else if (key == 'ArrowUp') {
                theta_velocity.x = 0.1
        }

        else if (key == 'ArrowDown') {
                theta_velocity.x = -0.1
        }

        else if (key == 'a') {
                velocity.x = -0.1
        }

        else if (key == 'd') {
                velocity.x = 0.1
        }

        else if (key == 'w') {
                velocity.y = -0.1
        }

        else if (key == 's') {
                velocity.y = 0.1
        }

        else if (key == 'e') {
                velocity.z = 0.1
        }

        else if (key == 'q') {
                velocity.z = -0.1
        }
  }

  world.draw = function() {
    let cube = new Cube()
    this.clear()

    velocity.scale(1 / 1.1)
    theta_velocity.scale(1 / 1.1)
    theta.add(theta_velocity)
    position.add(velocity)

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
    cube.add(position)

    this.paint(cube)
  }

  world.start()
}

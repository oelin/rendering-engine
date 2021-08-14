import Vector from './vector.js'
import Matrix from './matrix.js'


class World {

  constructor(el) {
    this.el = el
    this.ctx = this.el.getContext('2d')
    this.width = el.width
    this.height = el.height
    this.fps = 60
    this.camera = new Vector()

    // projection matrix

    this.zFar = 1000.0
    this.zNear = 0.1 
    this.fov = 90 
    this.aspect = this.height / this.width 
    this.fovRad = 1.0 / Math.tan(this.fov * 0.5 / 180 * 3.14159)
    this.projection = new Matrix(4, 4)
    
    this.projection.data[0][0] = this.aspect * this.fovRad
    this.projection.data[1][1] = this.fovRad
    this.projection.data[2][2] = this.zFar / (this.zFar - this.zNear)
    this.projection.data[3][2] = (-this.zFar * this.zNear) / (this.zFar - this.zNear)
    this.projection.data[2][3] = 1.0
    this.projection.data[3][3] = 0.0
  }


  project({ x, y, z }) {

    let vector = new Vector()
    let data = this.projection.data
    let w

    // vector.add(this.camera)

    vector.x = x*data[0][0] + y*data[1][0] + z*data[2][0] + data[3][0]
    vector.y = x*data[0][1] + y*data[1][1] + z*data[2][1] + data[3][1]
    vector.z = x*data[0][2] + y*data[1][2] + z*data[2][2] + data[3][2]
    w = x*data[0][3] + y*data[1][3] + z*data[2][3] + data[3][3]

    if (w != 0) vector.scale(1 / w)

    // scale to viewport

    vector.x += 1
    vector.y += 1

    vector.x *= 0.5 * this.el.width
    vector.y *= 0.5 * this.el.height

    vector.x /= vector.z
    vector.y /= vector.z

    return vector
  }


  clear() {
    this.ctx.clearRect(0, 0, this.el.width, this.el.height)
  }


  paint(mesh) {
    mesh.triangles.forEach(triangle => this.paintTriangle(triangle))
  }


  paintTriangle({ a, b, c }) {
    let pa = this.project(a)
    let pb = this.project(b)
    let pc = this.project(c)
    let shade = Math.floor((a.length() / 5) * 255)

    this.ctx.beginPath()
    this.ctx.moveTo(pb.x, pb.y)
    this.ctx.lineTo(pa.x, pa.y)
    this.ctx.lineTo(pc.x, pc.y)
    this.ctx.closePath()

    // this.ctx.lineWidth = 1
    this.ctx.strokeStyle = 'black'
    this.ctx.fillStyle = `rgb(${shade},${shade},${shade})`
    // this.ctx.stroke()
    this.ctx.fill()
  }


  start() {
    this.interval = setInterval(this.draw.bind(this), 1000 / this.fps)
  }


  stop() {
    clearInterval(this.interval)
  }
}


export default World

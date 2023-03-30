// TODO: Import the classes form shapes.js.
const {Shape, Circle, Triangle, Ellipse, Square} = require('../shapes.js');
let colors =['red', 'blue', 'yellow']
let circles = [
  {shapeColor:'red', xloc: 0, yloc: 0, radius: 50},
  {shapeColor:'blue', xloc: 10, yloc: 15, radius: 75},
  {shapeColor:'yellow', xloc: 100, yloc: 125, radius: 100}
]

let triangles = [
  {shapeColor: 'red', xpoint1:10, ypoint1:12, xpoint2:40, ypoint2:36, xpoint3:6, ypoint3:80},
  {shapeColor: 'blue', xpoint1: 20, ypoint1:32, xpoint2:50, ypoint2:66, xpoint3:16, ypoint3:90},
  {shapeColor: 'yellow', xpoint1:104, ypoint1:142, xpoint2:410, ypoint2:360, xpoint3:23, ypoint3:120}
]

let squares = [
  {shapeColor: 'red', xloc:0, yloc:18, width:300, height:300},
  {shapeColor: 'blue', xloc:20, yloc:21, width:150, height:208},
  {shapeColor: 'yellow', xloc:44, yloc:32, width:280, height:360}
]

let ellipses = [
  {shapeColor:'red', xloc: 0, yloc: 0, xradius: 50, yradius: 30},
  {shapeColor:'blue', xloc: 10, yloc: 15, xradius: 75, yradius: 89},
  {shapeColor:'yellow', xloc: 100, yloc: 125, xradius: 100, yradius: 47}
]

//Describe a testing suite for checking the functionality of the shape class.
describe('Shape', () => {
  //test the shape fillColor function for each color in colors
  colors.forEach(element => {
    it(`should return fill="${element}"`, () => {
      let shape = new Shape(element)
      expect(shape.fillColor()).toEqual(`fill="${element}"`)
      })
  })

  describe('Circle', () => {
    circles.forEach(element => {
      it(`should return: <circle cx="${element.xloc}" cy="${element.yloc}" r="${element.radius}" fill="${element.shapeColor}" />`, () => {
        let circle = new Circle(element.shapeColor, element.xloc, element.yloc, element.radius)
        expect(circle.createSVGShape()).toEqual(`<circle cx="${circle.xloc}" cy="${circle.yloc}" r="${circle.radius}" ${circle.fillColor()} />`)
        })
    })
  })

  describe('Triangle', () => {
    triangles.forEach(element => {
      it(`should return: <polygon points="${element.xpoint1},${element.ypoint1} ${element.xpoint2},${element.ypoint2} ${element.xpoint3},${element.ypoint3}" fill="${element.shapeColor}" />`, () => {
        let triangle = new Triangle(element.shapeColor, element.xpoint1, element.ypoint1, element.xpoint2, element.ypoint2, element.xpoint3, element.ypoint3)
        expect(triangle.createSVGShape()).toEqual(`<polygon points="${triangle.xpoint1},${triangle.ypoint1} ${triangle.xpoint2},${triangle.ypoint2} ${triangle.xpoint3},${triangle.ypoint3}" ${triangle.fillColor()} />`)
        })
    })
  })

  describe('Square', () => {
    squares.forEach(element => {
      it(`should return: <rect x="${element.xloc}" y="${element.yloc}" width="${element.width}" height="${element.height}" fill="${element.shapeColor}" />`, () => {
        let square = new Square(element.shapeColor, element.xloc, element.yloc, element.width, element.height)
        expect(square.createSVGShape()).toEqual(`<rect x="${square.xloc}" y="${square.yloc}" width="${square.width}" height="${square.height}" ${square.fillColor()} />`)
        })
    })
  })

  describe('Ellipse', () => {
    ellipses.forEach(element => {
      it(`should return: <circle cx="${element.xloc}" cy="${element.yloc}" rx="${element.xradius}" ry="${element.yradius}" fill="${element.shapeColor}" />`, () => {
        let ellipse = new Ellipse(element.shapeColor, element.xloc, element.yloc, element.xradius, element.yradius)
        expect(ellipse.createSVGShape()).toEqual(`<ellipse cx="${ellipse.xloc}" cy="${ellipse.yloc}" rx="${ellipse.xradius}" ry="${ellipse.yradius}" ${ellipse.fillColor()} />`)
        })
    })
  })
})
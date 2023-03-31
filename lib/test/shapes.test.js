//Import the classes form shapes.js.
const {Shape, Circle, Triangle, Ellipse, Square} = require('../shapes.js');

//set test values for each test, the acutal shape test can have mulitple test values.
let colors =['red', 'blue', 'yellow']
let circles = [
  {shapeColor:'red', xloc: 0, yloc: 0, radius: 50, borderColor: 'blue'},
  {shapeColor:'blue', xloc: 10, yloc: 15, radius: 75, borderColor: 'blue'},
  {shapeColor:'yellow', xloc: 100, yloc: 125, radius: 100, borderColor: 'blue'}
]

let triangles = [
  {shapeColor: 'red', xpoint1:10, ypoint1:12, xpoint2:40, ypoint2:36, xpoint3:6, ypoint3:80, borderColor: 'blue'},
  {shapeColor: 'blue', xpoint1: 20, ypoint1:32, xpoint2:50, ypoint2:66, xpoint3:16, ypoint3:90, borderColor: 'blue'},
  {shapeColor: 'yellow', xpoint1:104, ypoint1:142, xpoint2:410, ypoint2:360, xpoint3:23, ypoint3:120, borderColor: 'blue'}
]

let squares = [
  {shapeColor: 'red', xloc:0, yloc:18, width:300, height:300, borderColor: 'blue'},
  {shapeColor: 'blue', xloc:20, yloc:21, width:150, height:208, borderColor: 'blue'},
  {shapeColor: 'yellow', xloc:44, yloc:32, width:280, height:360, borderColor: 'blue'}
]

let ellipses = [
  {shapeColor:'red', xloc: 0, yloc: 0, xradius: 50, yradius: 30, borderColor: 'blue'},
  {shapeColor:'blue', xloc: 10, yloc: 15, xradius: 75, yradius: 89, borderColor: 'blue'},
  {shapeColor:'yellow', xloc: 100, yloc: 125, xradius: 100, yradius: 47, borderColor: 'blue'}
]

describe('Shape', () => {
  //test the shape fillColor function for each color in colors
  colors.forEach(element => {
    it(`should return fill="${element}"`, () => {
      let shape = new Shape(element, element)
      expect(shape.fillColor()+shape.stroke()).toEqual(`fill="${element}"stroke="${element}"`)
      })
  })

  describe('Circle', () => {
    circles.forEach(element => {
      it(`should return: <circle cx="${element.xloc}" cy="${element.yloc}" r="${element.radius}" fill="${element.shapeColor}" stroke="blue" />`, () => {
        let circle = new Circle(element.shapeColor, element.xloc, element.yloc, element.radius, element.borderColor)
        expect(circle.createSVGShape()).toEqual(`<circle cx="${circle.xloc}" cy="${circle.yloc}" r="${circle.radius}" ${circle.fillColor()} stroke="blue" />`)
        })
    })
  })

  describe('Triangle', () => {
    triangles.forEach(element => {
      it(`should return: <polygon points="${element.xpoint1},${element.ypoint1} ${element.xpoint2},${element.ypoint2} ${element.xpoint3},${element.ypoint3}" fill="${element.shapeColor}" stroke="blue" />`, () => {
        let triangle = new Triangle(element.shapeColor, element.xpoint1, element.ypoint1, element.xpoint2, element.ypoint2, element.xpoint3, element.ypoint3, element.borderColor)
        expect(triangle.createSVGShape()).toEqual(`<polygon points="${triangle.xpoint1},${triangle.ypoint1} ${triangle.xpoint2},${triangle.ypoint2} ${triangle.xpoint3},${triangle.ypoint3}" ${triangle.fillColor()} stroke="blue" />`)
        })
    })
  })

  describe('Square', () => {
    squares.forEach(element => {
      it(`should return: <rect x="${element.xloc}" y="${element.yloc}" width="${element.width}" height="${element.height}" fill="${element.shapeColor}" stroke="blue" />`, () => {
        let square = new Square(element.shapeColor, element.xloc, element.yloc, element.width, element.height, element.borderColor)
        expect(square.createSVGShape()).toEqual(`<rect x="${square.xloc}" y="${square.yloc}" width="${square.width}" height="${square.height}" ${square.fillColor()} stroke="blue" />`)
        })
    })
  })

  describe('Ellipse', () => {
    ellipses.forEach(element => {
      it(`should return: <circle cx="${element.xloc}" cy="${element.yloc}" rx="${element.xradius}" ry="${element.yradius}" fill="${element.shapeColor}" stroke="blue" />`, () => {
        let ellipse = new Ellipse(element.shapeColor, element.xloc, element.yloc, element.xradius, element.yradius, element.borderColor)
        expect(ellipse.createSVGShape()).toEqual(`<ellipse cx="${ellipse.xloc}" cy="${ellipse.yloc}" rx="${ellipse.xradius}" ry="${ellipse.yradius}" ${ellipse.fillColor()} stroke="blue" />`)
        })
    })
  })
})
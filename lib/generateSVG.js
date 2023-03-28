const {Shape, Circle, Triangle, Ellipse, Square} = require('./shapes')

//header for svg file to be written
var svgContent = `<?xml version="1.0" standalone="no"?>
<svg width="300px" height="200px" version="1.1"
     xmlns="http://www.w3.org/2000/svg">
  <desc>Four separate rectangles</desc>
  `

//set default widthm, height, xloc, yloc if they are not set during runtime
let svgWidth = 300
let svgHeight = 200
let xloc = 0
let yloc = 0
let typos = 0

function generateSVG(data){
    let shapeColor = data.shapeColor
    let text = data.text
    let textColor = data.textColor
    let shape = data.shape
    //svgShape init
    let svgShape = ''
    switch (shape){
        case 'Square':
            svgShape = new Square(shapeColor, xloc, yloc, svgWidth, svgHeight)
            svgContent += svgShape.createSVGShape()
            break;
        case 'Triangle':
            let xpoint1 = svgWidth/2
            let ypoint1 = 0
            let xpoint2 = 0
            let ypoint2 = svgHeight
            let xpoint3 = svgWidth
            let ypoint3 = svgHeight
            svgShape = new Triangle(shapeColor, xpoint1, ypoint1, xpoint2, ypoint2, xpoint3, ypoint3)
            svgContent += svgShape.createSVGShape()
            break;
        case 'Circle':
            let radius = svgWidth > svgHeight ? svgHeight/2 : svgWidth/2
            svgShape = new Circle(shapeColor, svgWidth/2, svgHeight/2, radius)
            svgContent += svgShape.createSVGShape()
            break;
        case 'Ellipse':
            svgShape = new Ellipse(shapeColor, svgWidth/2, svgHeight/2, svgWidth/2, svgHeight/2)
            svgContent += svgShape.createSVGShape()
            break;
        default:
            typos ++
            break;
    }
    svgContent += `\n\t<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" style='font-size:48px'>${text}</text>`
    svgContent += `\n</svg>`
    return svgContent
}

module.exports = generateSVG
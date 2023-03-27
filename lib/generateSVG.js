//header for svg file to be written
var svgContent = `<?xml version="1.0" standalone="no"?>
<svg width="300px" height="200px" version="1.1"
     xmlns="http://www.w3.org/2000/svg">
  <desc>Four separate rectangles</desc>
  `

let typos = 0

function generateSVG(data){
    let shapeColor = data.shapeColor
    let text = data.text
    let textColor = data.textColor
    switch (data.shape){
        case 'Square':
            svgContent += `<rect x="1" y="1" width="300" height="200" fill="${shapeColor}" />`
            break;
        case 'Triangle':
            svgContent += `<polygon points="150,1 299,199 1,199" fill="${shapeColor}" />`
            break;
        case 'Circle':
            svgContent += `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />`
            break;
        case 'Ellipse':
            svgContent += `<ellipse cx="150" cy="100" rx="149" ry="99" fill="${shapeColor}" />`
            break;
        default:
            typos ++
            break;
    }
    svgContent += `\n<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" style='font-size:48px'>${text}</text>`
    svgContent += `\n</svg>`
    return svgContent
}

module.exports = generateSVG
class Shape {
    constructor(shapeColor,borderColor){
        this.shapeColor = shapeColor
        this.borderColor = borderColor
    }
    
    fillColor(){
        return `fill="${this.shapeColor}"`
    }

    stroke(){
       if (this.borderColor){
            return `stroke="${this.borderColor}"`
       }else{
            return ''
       }
    }
}

class Circle extends Shape{
    constructor(shapeColor, xloc, yloc, radius, borderColor){
        super(shapeColor, borderColor)
        this.xloc = xloc
        this.yloc = yloc
        this.radius = radius
    }

    createSVGShape(){
        return `<circle cx="${this.xloc}" cy="${this.yloc}" r="${this.radius}" ${this.fillColor()} ${this.stroke()} />`
    }
} 

class Triangle extends Shape{
    constructor(shapeColor, xpoint1, ypoint1, xpoint2, ypoint2, xpoint3, ypoint3, borderColor){
        super(shapeColor, borderColor)
        this.xpoint1 = xpoint1
        this.ypoint1 = ypoint1
        this.xpoint2 = xpoint2
        this.ypoint2 = ypoint2
        this.xpoint3 = xpoint3
        this.ypoint3 = ypoint3
    }

    createSVGShape(){
        return `<polygon points="${this.xpoint1},${this.ypoint1} ${this.xpoint2},${this.ypoint2} ${this.xpoint3},${this.ypoint3}" ${this.fillColor()} ${this.stroke()} />`
    }
}

class Ellipse extends Shape{
    constructor(shapeColor, xloc, yloc, xradius, yradius, borderColor){
        super(shapeColor, borderColor)
        this.xloc = xloc
        this.yloc = yloc
        this.xradius = xradius
        this.yradius = yradius
    }

    createSVGShape(){
        return `<ellipse cx="${this.xloc}" cy="${this.yloc}" rx="${this.xradius}" ry="${this.yradius}" ${this.fillColor()} ${this.stroke()} />`
    }
} 

class Square extends Shape{
    constructor(shapeColor, xloc, yloc, width, height, borderColor){
        super(shapeColor,borderColor)
        this.xloc = xloc
        this.yloc = yloc
        this.width = width
        this.height = height
    }

    createSVGShape(){
        return `<rect x="${this.xloc}" y="${this.yloc}" width="${this.width}" height="${this.height}" ${this.fillColor()} ${this.stroke()} />`
    }
} 

module.exports = {Shape, Circle, Triangle, Ellipse, Square}
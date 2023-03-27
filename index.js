const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const shapes = require('./lib/shapes')
const generateSVG = require('./lib/generateSVG')

//questions for user
questions = [
      {
        type: 'input',
        name: 'text',
        message: 'What three letters would you like displayed',
      },
      {
        type: 'input',
        name: 'textColor',
        message: "What color would you like your text to be? \n(Type in a color, or hexadecimal value)",
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like for your logo?',
        choices: ['Square', 'Triangle', 'Circle', 'Ellipse'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: "What color would you like your shape to be? \n(Type in a color, or hexadecimal value)",
      },
]

// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//initialize function
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating SVG...')
      writeToFile('logo.svg', generateSVG({ ...inquirerResponses }));
    });
  }

  init()
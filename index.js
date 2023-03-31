const fs = require('fs')
const path = require('path')
const program = require('commander');
const inquirer = require('inquirer')
const maxinput = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', maxinput)
const {randomizeLogo, colors} = require('./lib/randomLogo.js')
const generateSVG = require('./lib/generateSVG')
const shapes = ['circle', 'triangle', 'square', 'ellipse']

//set argument options
program
  .option('-R, --randomize', 'Randomize logo options, if used other switches will be ignored')
  .option('-s, --shape <shape>', 'Sets logo shape')
  .option('-sc, --shape-color <shapecolor>', 'Sets shape color for logo')
  .option('-t, --text <text>', 'Sets logo text, only allows 3 letters anything more will be truncated')
  .option('-tc, --text-color <textcolor>', 'Sets text color for logo')
  .option('-bc, --border-color <color>', 'Sets the border color, no border if left out')

program.parse(process.argv);
const options = program.opts();

//handle arguments
//if random is used skip everything and randomize logo
if (options.randomize){
   writeToFile(`./examples/randomlogo.svg`, generateSVG({ ...randomizeLogo() }));
}else{
  //questions for user if arguments were not provided.
 var questions = [
    {
      type: 'maxlength-input',
      name: 'text',
      message: 'What three letters would you like displayed',
      maxLength: 3
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

  //delete questions that had answers provided by switches
  if (options.shape) removeQuestion('shape')
  if (options.shapeColor) removeQuestion('shapeColor')
  if (options.text) removeQuestion('text')
  if (options.textColor) removeQuestion('textColor')
  
  //prompt user for values not provided by switches
  //insert switch values into responses and write file
  inquirer.prompt(questions).then((inquirerResponses) => {
    if (options.shape) inquirerResponses.shape = options.shape
    if (options.text) inquirerResponses.text = options.text.slice(0,3)
    if (options.shapeColor) inquirerResponses.shapeColor = options.shapeColor
    if (options.textColor) inquirerResponses.textColor = options.textColor
    if (options.borderColor) inquirerResponses.borderColor = options.borderColor
    console.log(inquirerResponses)
    writeToFile('logo.svg', generateSVG({ ...inquirerResponses }));
  });
}

// Function to write README file using the user input
function writeToFile(fileName, data) {
  console.log('Generating SVG...')
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function for removing questions
function removeQuestion(value){
  questions = questions.filter(obj => obj.name !== value)
}
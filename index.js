const fs = require('fs')
const path = require('path')
const program = require('commander');
const inquirer = require('inquirer')
const maxinput = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', maxinput)
const randomizeLogo = require('./lib/randomLogo.js')
const generateSVG = require('./lib/generateSVG')
const package = require('./package.json')
const shapes = require('./lib/shapes')

// Function to write README file using the user input
function writeToFile(fileName, data) {
  console.log('Generating SVG...')
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//set argument options
program
  .option('-r, --randomize', 'Randomize logo options')
  // .option('-d, --debug', 'output extra debugging')
  // .option('-s, --small <size>', 'small pizza size')
  // .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);
const options = program.opts();
// if (options.debug) console.log(options);
// if (options.small) console.log(options.small);
// if (options.pizzaType) console.log(options.pizzaType);

//handle arguments
if (options.randomize){
  writeToFile('randomlogo.svg', generateSVG({ ...randomizeLogo() }));
}else{
  //questions for user if arguments were not provided.
  questions = [
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

  //prompt user for input and write file
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('logo.svg', generateSVG({ ...inquirerResponses }));
  });
}
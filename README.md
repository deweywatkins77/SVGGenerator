# SVGGenerator
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

Javascript program that creates a svg logo file.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i inquirer@8.2.4 commander jest
```

## Usage

Start the program by running:
```
node index.js
```
For any of the shape, shapecolor, text, or text color switches not used, the user will be presented with questions asking for user input to generate a svg file named logo.svg. 

Using the -R/--randomize switch will randomize all the values and generate a svg file called randomlogo.svg. This switch will also ignore any other switches used.

The -bc/--border-color is not required, and the user will also not be presented with this option as a question if left out.

All files generated will be generated in the directory it was ran from. The program will overwrite existing files.

For a list of switch commands use:
```
node index.js --help
```
[How to video](https://watch.screencastify.com/v/ubujXrI62RiYSQFIX32v)

## License

This project is licensed under the MIT license.
  
## Contributing

For contributions, please contact me at deweywatkins77@gmail.com

## Tests

To run tests, run the following command:

```
npm run test
```

## Questions

If you have any questions about the repo, open an issue or contact me directly at deweywatkins77@gmail.com. You can find more of my work at [deweywatkins77](https://github.com/deweywatkins77/).


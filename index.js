const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes'); // Adjust the path if needed

async function generateLogo() {
  // Use inquirer to collect user input
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  const { text, textColor, shape, shapeColor } = userInput;

  // Create the selected shape and set its color
  let selectedShape;
  switch (shape.toLowerCase()) {
    case 'circle':
      selectedShape = new Circle();
      break;
    case 'triangle':
      selectedShape = new Triangle();
      break;
    case 'square':
      selectedShape = new Square();
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  selectedShape.setColor(shapeColor);

  // Generate the SVG file
  const svgContent = selectedShape.render(text, textColor);
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

generateLogo();

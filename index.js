const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes'); 

async function generateLogo() {
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

  if (!isValidColor(shapeColor)) {
    console.error('Invalid shape color');
    return;
  }

  selectedShape.setColor(shapeColor);

  // Generate the SVG file
  const svgContent = selectedShape.render(text, textColor);

  const examplesDirectory = path.join(__dirname, 'examples');

  fs.writeFileSync(path.join(examplesDirectory, 'logo.svg'), svgContent);
}

function isValidColor(color) {
  // Implement a function to validate color inputs (e.g., hex or valid keyword)
  // Return true if valid, false otherwise
  return true; //placeholder for validation logic
}

generateLogo();

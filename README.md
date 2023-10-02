# logo-maker

## Description

The code included in this repository is used to generate a logo automatically without the help of a graphic designer. The bullets below outline the functionality of the command-line application when the user enters "node index.js"
* When the user is prompted for text, they can enter up to three characters
* When the user is prompted for the text color, they can enter a color keyword OR a hexadecimal number
* When the user is prompted for a shape, they are presented with a list of shapes to choose from: circle, triangle, and square
* When the user is prompted for the shape's color, they can enter a color keyword (OR a hexadecimal number)
* When the user has entered the input for all the prompts, THEN an SVG file is created named `logo.svg`, and the output text "Generated logo.svg" is printed in the command line
* When the user opens the `logo.svg` file in a browser, they are shown a 300x200 pixel image that matches the criteria entered

The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

Example Test: 
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

## Usage

The Github repository can be found here: https://github.com/dscornaienchi/logo-maker

A walkthrough video can be found here: 

## Credits

Tutorials and instruction provided by the University of Texas at Austin Full Stack Web Developement Program and it's affiliated professors and TA's. 
const { Triangle, Circle, Square } = require('./shapes');

// Test Triangle class
describe('Triangle', () => {
  it('should render a triangle with the given color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

// Test Circle class
describe('Circle', () => {
  it('should render a circle with the given color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

// Test Square class
describe('Square', () => {
  it('should render a square with the given color', () => {
    const square = new Square();
    square.setColor('green');
    const svg = square.render();
    expect(svg).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
  });
});

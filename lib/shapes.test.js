const { Triangle, Circle, Square } = require('./shapes'); // Adjust the path if needed

describe('Triangle', () => {
  test('Triangle rendering', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render('ABC', 'red')).toEqual(
      // Define the expected SVG string for a triangle here
    );
  });
});

describe('Circle', () => {
  test('Circle rendering', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render('A', 'yellow')).toEqual(
      // Define the expected SVG string for a circle here
    );
  });
});

describe('Square', () => {
  test('Square rendering', () => {
    const square = new Square();
    square.setColor('purple');
    expect(square.render('AB', 'orange')).toEqual(
      // Define the expected SVG string for a square here
    );
  });
});


class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    // Implement this method in child classes
    return ''; // Placeholder for SVG rendering
  }
}

class Circle extends Shape {
  render(text, textColor) {
    // Generate SVG for a circle with the specified color
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render(text, textColor) {
    // Generate SVG for a triangle with the specified color
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render(text, textColor) {
    // Generate SVG for a square with the specified color
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };

  
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
      // Implement this method in child classes
      return ''; //placeholder for SVG rendering
    }
  }
  
  class Circle extends Shape {
    render(text, textColor) {
      // Implement rendering for a circle
      const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
      </svg>`;
    return svg;
    }
  }
  
  class Triangle extends Shape {
    render(text, textColor) {
      // Implement rendering for a triangle
      const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <!-- Replace this with your triangle SVG path -->
        <polygon points="150,10 250,190 50,190" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
      </svg>`;
      return svg;
    }
  }
  
  class Square extends Shape {
    render(text, textColor) {
      // Implement rendering for a square
      const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
      </svg>`;
      return svg;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  
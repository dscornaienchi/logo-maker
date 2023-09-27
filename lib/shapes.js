class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
      // Implement this method in child classes
    }
  }
  
  class Circle extends Shape {
    render(text, textColor) {
      // Implement rendering for a circle
    }
  }
  
  class Triangle extends Shape {
    render(text, textColor) {
      // Implement rendering for a triangle
    }
  }
  
  class Square extends Shape {
    render(text, textColor) {
      // Implement rendering for a square
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  
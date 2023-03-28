// TODO: Import the classes form shapes.js.
const {Shape, Circle, Triangle, Ellipse, Square} = require('../shapes.js');

//Describe a testing suite for checking the functionality of the shape class.
describe('Shape', () => {
  //test the shape fillColor function
  const shape = new Shape('blue')
  expect(shape.fillColor()).toEqual('fill="blue"')
})


//   describe('invalid', () => {
//     it('should return false for empty password', () => {
//       const str = '';

//       const result = new Validate().isPassword(str);

//       expect(result).toEqual(false);
//     });
//   });
// });




// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
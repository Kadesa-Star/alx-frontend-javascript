import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Add the new attribute for EVCar
  }

  static get [Symbol.species]() {
    return Car; // Specify that the species for cloning should return Car
  }

  cloneCar() {
    // Use the Symbol.species to create a new instance of Car
    return new (this.constructor[Symbol.species])(this._brand, this._motor, this._color);
  }
}

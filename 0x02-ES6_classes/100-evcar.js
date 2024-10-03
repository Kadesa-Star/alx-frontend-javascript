import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Add the new attribute for EVCar
  }

  cloneCar() {
    // Return an instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}

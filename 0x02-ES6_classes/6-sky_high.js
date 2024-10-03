import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent constructor with sqft
    this._floors = floors; // Store floors in a protected attribute
  }

  get floors() {
    return this._floors; // Getter for floors
  }

  set floors(floors) {
    if (typeof floors !== 'number') { // Ensure floors is a number
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors; // Set the number of floors
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Custom evacuation message
  }
}

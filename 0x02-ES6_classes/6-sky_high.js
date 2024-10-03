import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent constructor with sqft
    this._floors = floors; // Store floors in a protected attribute
  }

  get floors() {
    return this._floors; // Getter for floors
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Custom evacuation message
  }
}

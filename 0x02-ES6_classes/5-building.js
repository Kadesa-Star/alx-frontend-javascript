export default class Building {
  constructor(sqft) {
    // Check if the class is being instantiated directly or if it's a subclass
    if (this.constructor !== Building) {
      const props = Object.getOwnPropertyNames(this.constructor.prototype);
      // Ensure the subclass has an `evacuationWarningMessage` method
      if (!props.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft; // Store sqft in a protected attribute
  }

  get sqft() {
    return this._sqft; // Getter for sqft
  }

  set sqft(sqft) {
    // Validate that sqft is a number
    if (typeof sqft !== 'number' && !(sqft instanceof Number)) {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft; // Set the protected attribute
  }
}

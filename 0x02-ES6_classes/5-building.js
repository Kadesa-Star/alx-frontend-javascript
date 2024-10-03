class Building {
  constructor(sqft) {
    this.sqft = sqft; // Calls the setter
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;

// Ensure a newline at the end of this file

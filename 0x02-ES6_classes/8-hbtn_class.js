export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to cast the class instance into a Number
  toString() {
    return this._location;
  }

  // Method to cast the class instance into a String
  valueOf() {
    return this._size;
  }
}

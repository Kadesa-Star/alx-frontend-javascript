export default class Airport {
  constructor(name, code) {
    this._name = name; // Store name in a protected attribute
    this._code = code; // Store code in a protected attribute
  }

  toString() {
    return `[object ${this._code}]`; // Return the string representation of the airport
  }
}

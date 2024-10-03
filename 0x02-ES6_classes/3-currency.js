class Currency {
  constructor(code, name) {
    this.code = code; // Call the setter for validation
    this.name = name; // Call the setter for validation
  }

  /**
   * @param {String} code
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * Returns the full currency representation
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;

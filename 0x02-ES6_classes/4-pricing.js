import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount; // Call the setter for validation
    this.currency = currency; // Call the setter for validation
  }

  /**
   * @param {Number} amount
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {Currency} currency
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  /**
   * Returns the full price representation
   * @returns {String}
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts the price using the provided conversion rate
   * @param {Number} amount
   * @param {Number} conversionRate
   * @returns {Number}
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;

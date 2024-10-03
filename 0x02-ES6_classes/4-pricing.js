import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount; // Calls the setter for validation
    this.currency = currency; // Calls the setter for validation
  }

  /**
   * @param {Number} amount
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount; // Store the value in the underscore variable
  }

  get amount() {
    return this._amount; // Return the stored value
  }

  /**
   * @param {Currency} currency
   */
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency; // Store the value in the underscore variable
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  get currency() {
    return this._currency; // Return the stored value
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`; // Display amount and currency format
  }

  /**
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate; // Return the converted price
  }
}

export default Pricing;

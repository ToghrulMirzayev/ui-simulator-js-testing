import { CHECK_AND_VALIDATE_PAGE } from '../config.js';
import { expect } from '@playwright/test';

export default class CheckAndValidatePage {
  constructor(page) {
    this.page = page;
    this.INPUT_FIELD = '#dataInput';
    this.VALIDATION_SQUARE_MSG = '#validationSquare'
  }

  async enterValue(value) {
    await this.page.locator(this.INPUT_FIELD).fill(value)
  }

  async isMessageCorrect(message) {
    await expect(this.page.locator(this.VALIDATION_SQUARE_MSG)).toHaveText(message)
  }

  async validateValue(value, message) {
    await this.page.goto(CHECK_AND_VALIDATE_PAGE);
    await this.enterValue(value);
    await this.isMessageCorrect(message);
  }
}

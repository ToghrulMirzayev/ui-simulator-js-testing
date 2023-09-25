import { HOVER_AND_SELECT_PAGE } from '../config.js';
import { expect } from '@playwright/test';

export default class IndexPage {
  constructor(page) {
    this.page = page;
    this.USERNAME_FIELD = '#username';
    this.PASSWORD_FIELD = '#password';
    this.LOGIN_BTN = '.login-button';
    this.ERROR_MSG = '#message';
  }

  async enterUsername(username) {
    await this.page.locator(this.USERNAME_FIELD).fill(username);
  }

  async enterPassword(password) {
    await this.page.locator(this.PASSWORD_FIELD).fill(password);
  }

  async clickLoginButton() {
    await this.page.locator(this.LOGIN_BTN).click();
  }

  async isLoginSuccess() {
    await expect(this.page).toHaveURL(HOVER_AND_SELECT_PAGE);
  }

  async isErrorMessageCorrect(message) {
    const locator = this.page.locator(this.ERROR_MSG);
    await expect(locator).toHaveText(message);
  }

  async successfullogin(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.isLoginSuccess();
  }

  async unsuccessfulLogin(username, password, message) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.isErrorMessageCorrect(message);
  }
}

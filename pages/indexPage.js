import { INDEX_PAGE, HOVER_AND_SELECT_PAGE } from '../config.js';
import { expect } from '@playwright/test';

export default class IndexPage {
  constructor(page) {
    this.page = page;
  }

  async enterUsername(username) {
    await this.page.locator('#username').fill(username);
  }

  async enterPassword(password) {
    await this.page.locator('#password').fill(password);
  }

  async clickLoginButton() {
    await this.page.locator('.login-button').click();
  }

  async isLoginSuccess() {
    await expect(this.page).toHaveURL(HOVER_AND_SELECT_PAGE);
  }

  async isErrorMessageCorrect(message) {
    const locator = this.page.locator('#message');
    await expect(locator).toHaveText(message);
  }

  async successfullogin(username, password) {
    await this.page.goto(INDEX_PAGE);
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.isLoginSuccess();
  }

  async unsuccessfulLogin(username, password, message) {
    await this.page.goto(INDEX_PAGE);
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.isErrorMessageCorrect(message);
  }
}

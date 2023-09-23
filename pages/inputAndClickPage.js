import { INPUT_AND_CLICK_PAGE } from '../config.js';
import { expect } from '@playwright/test';

export default class InputAndClickPage {
  constructor(page) {
    this.page = page;
    this.TEXT_FIELD = '#inputText';
    this.ADD_BTN = '#addBtn';
    this.DELETE_BTN = '#deleteBtn';
    this.TEXT_BOX = '#items .item';
  }

  async enterText(text) {
    await this.page.locator(this.TEXT_FIELD).fill(text)
  }

  async clickAddButton() {
    await this.page.locator(this.ADD_BTN).click()
  }

  async clickDeleteButton() {
    await this.page.locator(this.DELETE_BTN).click()
  }

  async isItemAdded(text) {
    await expect(this.page.locator(this.TEXT_BOX).first()).toHaveText(text)
  }

  async isItemDeleted() {
    await expect(this.page.locator(this.TEXT_BOX)).toHaveCount(0)
  }

  async addNewItem(text) {
    await this.page.goto(INPUT_AND_CLICK_PAGE);
    await this.enterText(text);
    await this.clickAddButton();
    await this.isItemAdded(text);
  }

  async deleteItem(text) {
    await this.page.goto(INPUT_AND_CLICK_PAGE);
    await this.enterText(text);
    await this.clickDeleteButton();
    await this.isItemDeleted();
  }
}

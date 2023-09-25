import { expect } from '@playwright/test';

export default class HoverAndSelectPage {
  constructor(page) {
    this.page = page;
    this.SELECT_DROPDOWN = '.select-text';
    this.PAGE_LIST = '.dropdown-content li'
  }

  async hoverOnSelectBtn() {
    await this.page.locator(this.SELECT_DROPDOWN).hover()
  }

  async selectFromDropdown(element) {
    await this.page.locator(this.PAGE_LIST).nth(element).click()
  }

  async isPageNavigable(url) {
    await expect(this.page).toHaveURL(url)
  }

  async navigatePages(element, url) {
    await this.hoverOnSelectBtn()
    await this.selectFromDropdown(element)
    await this.isPageNavigable(url)
  }
}

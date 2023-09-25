import { test } from '@playwright/test';
import InputAndClickPage from '../pages/inputAndClickPage'; 
import { INPUT_AND_CLICK_PAGE } from '../config.js';

let inputAndClickPage;

test.beforeEach(async ({ page }) => {
  inputAndClickPage = new InputAndClickPage(page);
  await inputAndClickPage.page.goto(INPUT_AND_CLICK_PAGE);
});

test('enter new item', async ({ page }) => {
  await inputAndClickPage.addNewItem('new item');
});

test('delete item', async ({ page }) => {
    await inputAndClickPage.deleteItem('new item');
  });

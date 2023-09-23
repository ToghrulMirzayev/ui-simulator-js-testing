import { test } from '@playwright/test';
import InputAndClickPage from '../pages/inputAndClickPage'; 

test('enter new item', async ({ page }) => {
  const inputAndClickPage = new InputAndClickPage(page);
  await inputAndClickPage.addNewItem('new item');
});

test('delete item', async ({ page }) => {
    const inputAndClickPage = new InputAndClickPage(page);
    await inputAndClickPage.deleteItem('new item');
  });
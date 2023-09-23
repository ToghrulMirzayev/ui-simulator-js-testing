import { test } from '@playwright/test';
import CheckAndValidatePage from '../pages/checkAndValidatePage'; 

const testData = [
  { value: '11', message: 'Valid'},
  { value: '1', message: 'Not in range'},
  { value: 'hello', message: 'Not a number'},
  { value: '11.5', message: 'Not an integer'},
  { value: '-1', message: 'Negative integer'},
  { value: '-1.5', message: 'Negative number'},
];

for (const data of testData) {
  test(`validate data - ${data.message}`, async ({ page }) => {
    const checkAndValidatePage = new CheckAndValidatePage(page);
    const { value, message } = data;
    await checkAndValidatePage.validateValue(value, message);
  });
}

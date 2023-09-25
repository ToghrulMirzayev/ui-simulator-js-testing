import { test } from '@playwright/test';
import IndexPage from '../pages/indexPage'; 
import { USERNAME, PASSWORD } from '../config.js';
import { INDEX_PAGE } from '../config.js';

let indexPage;

test.beforeEach(async ({ page }) => {
  indexPage = new IndexPage(page);
  await indexPage.page.goto(INDEX_PAGE);
});

test('successful login', async () => {
  await indexPage.successfullogin(USERNAME, PASSWORD);
});

const testData = [
  { testName: 'incorrectCreds', username: 'incorrect_username', password: PASSWORD, message: 'Password or username is incorrect' },
  { testName: 'emptyCreds', username: USERNAME, password: '', message: 'Password field cannot be empty' },
];

for (const data of testData) {
  test(`unsuccessful login - ${data.testName}`, async () => {
    const { username, password, message } = data;
    await indexPage.unsuccessfulLogin(username, password, message);
  });
}

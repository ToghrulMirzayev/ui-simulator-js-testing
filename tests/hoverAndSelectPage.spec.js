import { test } from '@playwright/test';
import HoverAndSelectPage from '../pages/hoverAndSelectPage';
import {
    DRAG_AND_DROP_PAGE, 
    INPUT_AND_CLICK_PAGE, 
    CHECKBOX_AND_SCROLL_PAGE, 
    CHECK_AND_VALIDATE_PAGE,
    SORTING_PAGE,
    HOVER_AND_SELECT_PAGE,
} from '../config.js';

let hoverAndSelectPage;

test.beforeEach(async ({ page }) => {
  hoverAndSelectPage = new HoverAndSelectPage(page);
  await hoverAndSelectPage.page.goto(HOVER_AND_SELECT_PAGE);
});

const testData = [
  { testName: 'Drag & Drop Page', element: '0', url: DRAG_AND_DROP_PAGE},
  { testName: 'Input & Click Page', element: '1', url: INPUT_AND_CLICK_PAGE},
  { testName: 'Checkbox & Scroll Page', element: '2', url: CHECKBOX_AND_SCROLL_PAGE},
  { testName: 'Check & Validate Page', element: '3', url: CHECK_AND_VALIDATE_PAGE},
  { testName: 'Sorting Page', element: '4', url: SORTING_PAGE},
];

for (const data of testData) {
  test(`navigate page - ${data.testName}`, async ({ page }) => {
    const { element, url } = data;
    await hoverAndSelectPage.navigatePages(element, url);
  });
}

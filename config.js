require('dotenv').config();

const INDEX_PAGE = process.env.BASE_URL;
const HOVER_AND_SELECT_PAGE = `${INDEX_PAGE}/hover_and_select.html`
const DRAG_AND_DROP_PAGE = `${INDEX_PAGE}/drag-and-drop.html`
const INPUT_AND_CLICK_PAGE = `${INDEX_PAGE}/input-and-click.html`
const CHECKBOX_AND_SCROLL_PAGE = `${INDEX_PAGE}/checkbox-and-scroll.html`
const CHECK_AND_VALIDATE_PAGE = `${INDEX_PAGE}/check_and_validate.html`
const SORTING_PAGE = `${INDEX_PAGE}/sorting.html`

const USERNAME = process.env.APP_USERNAME
const PASSWORD = process.env.APP_PASSWORD

module.exports = {
    INDEX_PAGE,
    HOVER_AND_SELECT_PAGE,
    DRAG_AND_DROP_PAGE,
    INPUT_AND_CLICK_PAGE,
    CHECKBOX_AND_SCROLL_PAGE,
    CHECK_AND_VALIDATE_PAGE,
    SORTING_PAGE,
    USERNAME,
    PASSWORD
  };

import { browser, by, element } from 'protractor';

export class KeywordPage {
  navigateTo() {
    return browser.get('#/by-keywords/4565/1');
  }
  movieCardElements() {
    return element.all(by.css('mf-by-keywords mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }
}

import { browser, by, element } from 'protractor';

export class SearchPage {
  navigateTo() {
    return browser.get('#/search');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  searchFieldText() {
    return element(by.css('mf-root mf-search-by-phrase input')).getText();
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

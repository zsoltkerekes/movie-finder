import { browser, by, element } from 'protractor';

export class KeywordPage {
  navigateTo() {
    return browser.get('#/by-keywords/4565/1');
  }

  titleText() {
    return element.all(by.css('mf-root h1')).first().getText();
  }

  movieCardElements() {
    return element.all(by.css('mf-by-keywords mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

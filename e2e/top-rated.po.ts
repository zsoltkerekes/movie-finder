import { browser, by, element } from 'protractor';

export class TopRatedPage {
  navigateTo() {
    return browser.get('#/top-rated/1/1/1');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

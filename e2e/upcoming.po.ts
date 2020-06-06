import { browser, by, element } from 'protractor';

export class UpcomingPage {
  navigateTo() {
    return browser.get('#/upcoming/1');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

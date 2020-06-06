import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  titleText() {
    return element(by.css('mf-root mf-header h1')).getText();
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

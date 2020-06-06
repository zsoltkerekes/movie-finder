import { browser, by, element } from 'protractor';

export class NowPlayingPage {
  navigateTo() {
    return browser.get('#/now-playing/1');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

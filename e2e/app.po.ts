import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  titleText() {
    return element(by.css('mf-root mf-header h1')).getText();
  }

  movieButtonElements() {
    return element.all(by.css('mf-recommended button'));
  }

  tvButtonElements() {
    return element.all(by.css('mf-tv-recommended button'));
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

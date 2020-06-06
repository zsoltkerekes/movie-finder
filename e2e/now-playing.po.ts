import { browser, by, element } from 'protractor';

export class NowPlayingPage {
  navigateTo() {
    return browser.get('#/now-playing/1');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  movieCardElements() {
    return element.all(by.css('mf-now-playing mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

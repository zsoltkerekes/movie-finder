import { browser, by, element } from 'protractor';

export class NowPlayingPage {
  navigateTo() {
    return browser.get('#/now-playing/1');
  }

  movieCardElements() {
    return element.all(by.css('mf-now-playing mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }
}

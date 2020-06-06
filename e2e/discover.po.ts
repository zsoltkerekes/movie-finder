import { browser, by, element } from 'protractor';

export class DiscoverPage {
  navigateTo() {
    return browser.get('#/discover/1/1/1');
  }

  movieCardElements() {
    return element.all(by.css('mf-popular-movies mf-list-item'));
  }

  tvCardElements() {
    return element.all(by.css('mf-popular-tv-shows mf-list-item'));
  }

  personCardElements() {
    return element.all(by.css('mf-popular-persons mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

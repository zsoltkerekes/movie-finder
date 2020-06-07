import { browser, by, element } from 'protractor';

export class TopRatedPage {
  navigateTo() {
    return browser.get('#/top-rated/1/1/1');
  }

  movieCardElements() {
    return element.all(by.css('mf-top-rated-movies mf-list-item'));
  }

  tvCardElements() {
    return element.all(by.css('mf-top-rated-tv-shows mf-list-item'));
  }

  personCardElements() {
    return element.all(by.css('mf-top-rated-persons mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }
}

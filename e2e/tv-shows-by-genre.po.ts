import { browser, by, element } from 'protractor';

export class TvShoWByGenres {
  navigateTo() {
    return browser.get('#/tv-genres/10759/1');
  }

  tvShowCardElements() {
    return element.all(by.css('mf-tv-shows-by-genre mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }
}

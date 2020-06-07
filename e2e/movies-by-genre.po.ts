import { browser, by, element } from 'protractor';

export class MoviesByGenrePage {
  navigateTo() {
    return browser.get('#/genres/28/1');
  }

  movieCardElements() {
    return element.all(by.css('mf-genres mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }
}

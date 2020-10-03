import { browser, by, element, ElementArrayFinder } from 'protractor';

export class TrendingPage {
  navigateTo(): unknown {
    return browser.get('#/trending/1');
  }

  movieCardElements(): ElementArrayFinder {
    return element.all(by.css('mf-trending-movies mf-list-item'));
  }

  paginationElements(): ElementArrayFinder {
    return element.all(by.css('mf-pagination'));
  }
}

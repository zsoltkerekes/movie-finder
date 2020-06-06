import { browser, by, element } from 'protractor';

export class SearchPage {
  navigateTo() {
    return browser.get('#/search');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  searchFieldText() {
    return element(by.css('mf-root mf-search-by-phrase input')).getAttribute(
      'value'
    );
  }

  searchResultElement() {
    return element.all(by.css('mf-search-results'));
  }

  searchResultKeywordElements() {
    return element.all(by.css('mf-search-results .keywordslist mat-chip'));
  }

  searchResultMovieCardsElements() {
    return element.all(by.css('mf-search-results .movie mf-list-item'));
  }

  searchResultTvCardsElements() {
    return element.all(by.css('mf-search-results .tv mf-list-item'));
  }

  searchResultPersonCardsElements() {
    return element.all(by.css('mf-search-results .person mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }

  setInputToSearchFieldText(searchPhrase) {
    return browser.wait(
      element(by.css('mf-root mf-search-by-phrase input')).sendKeys(
        searchPhrase
      ),
      600
    );
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

import { browser, by, element, Key } from 'protractor';

export class DiscoverPage {
  private _timeout = 300;

  navigateTo() {
    return browser.get('#/discover/1/1/1');
  }

  movieCardElements() {
    return element.all(by.css('mf-popular-movies mf-list-item mat-card-title'));
  }

  movieActionCheckboxElementClick() {
    return browser.wait(
      element(by.css('mf-discover-options #mat-checkbox-19 label')).click(),
      this._timeout
    );
  }

  movieDocumentaryCheckboxElementClick() {
    return browser.wait(
      element(by.css('mf-discover-options #mat-checkbox-14 label')).click(),
      this._timeout
    );
  }

  movieDramaCheckboxElementClick() {
    return browser.wait(
      element(by.css('mf-discover-options #mat-checkbox-13 label')).click(),
      this._timeout
    );
  }

  setInputToMovieYear(year) {
    element(by.css('mf-discover-options #mat-input-0')).sendKeys(
      Key.chord(Key.CONTROL, 'a')
    );
    return browser.wait(
      element(by.css('mf-discover-options #mat-input-0')).sendKeys(year),
      this._timeout
    );
  }

  tvCardElements() {
    return element.all(by.css('mf-popular-tv-shows mf-list-item'));
  }

  tvActionCheckboxElementClick() {
    return browser.wait(
      element(by.css('mf-discover-tv-options #mat-checkbox-45 label')).click(),
      this._timeout
    );
  }

  tvDocumentaryCheckboxElementClick() {
    return browser.wait(
      element(by.css('mf-discover-tv-options #mat-checkbox-40 label')).click(),
      this._timeout
    );
  }

  setInputToTvYear(year) {
    element(by.css('mf-discover-tv-options #mat-input-1')).sendKeys(
      Key.chord(Key.CONTROL, 'a')
    );
    return browser.wait(
      element(by.css('mf-discover-tv-options #mat-input-1')).sendKeys(year),
      this._timeout
    );
  }

  personCardElements() {
    return element.all(by.css('mf-popular-persons mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }
}

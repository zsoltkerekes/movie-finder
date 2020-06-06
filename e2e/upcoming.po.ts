import { browser, by, element } from 'protractor';

export class UpcomingPage {
  navigateTo() {
    return browser.get('#/upcoming/1');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  movieCardElements() {
    return element.all(by.css('mf-upcoming mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

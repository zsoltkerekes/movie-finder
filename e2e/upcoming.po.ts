import { browser, by, element } from 'protractor';

export class UpcomingPage {
  navigateTo() {
    return browser.get('#/upcoming/1');
  }

  movieCardElements() {
    return element.all(by.css('mf-upcoming mf-list-item'));
  }

  paginationElements() {
    return element.all(by.css('mf-pagination'));
  }
}

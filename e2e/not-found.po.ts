import { browser, by, element } from 'protractor';

export class NotFoundPage {
  navigateTo() {
    return browser.get('#/jhioogkjbkjblkvlkvn');
  }

  notFound() {
    return element.all(by.css('mf-page-not-found'));
  }
}

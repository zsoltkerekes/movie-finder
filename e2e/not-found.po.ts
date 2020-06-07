import { browser, by, element } from 'protractor';

export class NotFoundPage {
  navigateTo() {
    return browser.get('#/jhioogkjbkjblkvlkvn');
  }

  titleText() {
    return element.all(by.css('mf-root h1')).first().getText();
  }

  notFound() {
    return element.all(by.css('mf-page-not-found'));
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

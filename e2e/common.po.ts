import { by, element } from 'protractor';

export class Common {
  titleText() {
    return element.all(by.css('mf-root h1')).first().getText();
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

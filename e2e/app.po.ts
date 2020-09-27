import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.driver.manage().window().maximize();
    return browser.get('/');
  }

  movieButtonElements() {
    return element.all(by.css('mf-recommended button'));
  }

  tvButtonElements() {
    return element.all(by.css('mf-tv-recommended button'));
  }
}

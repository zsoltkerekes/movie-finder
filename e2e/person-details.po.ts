import { browser, by, element } from 'protractor';
import { first } from 'rxjs/operators';

export class PersonDetailsPage {
  navigateTo() {
    return browser.get('#/person-details/16483');
  }

  titleText() {
    return element.all(by.css('mf-root h1')).first().getText();
  }

  personPoster() {
    return element.all(by.css('mat-card.poster img'));
  }

  personDetails() {
    return element.all(by.css('mat-card.details'));
  }

  personName() {
    return element.all(by.css('mat-card.details h2.title'));
  }

  personOverview() {
    return element.all(by.css('mat-card.details p.overview'));
  }

  personQueries() {
    return element.all(by.css('mat-card.details .query'));
  }

  personImages() {
    return element.all(by.css('mf-person-images img'));
  }

  personTaggedImages() {
    return element.all(by.css('mf-person-tagged-images img'));
  }

  personMovieCredits() {
    return element.all(by.css('mf-person-movie-credits'));
  }

  personMovieCreditsCast() {
    return element.all(by.css('mf-person-movie-credits .cast a'));
  }

  setInputToPersonMovieSearchCrewFieldText(searchPhrase: string) {
    element(by.css('mf-person-movie-credits #searchCrew')).sendKeys(
      searchPhrase
    );
  }

  personMovieCreditsCrew() {
    return element.all(by.css('mf-person-movie-credits .crew a'));
  }

  setInputToPersonMovieSearchCastFieldText(searchPhrase: string) {
    element(by.css('mf-person-movie-credits #searchCast')).sendKeys(
      searchPhrase
    );
  }

  personTvCredits() {
    return element.all(by.css('mf-person-tv-credits'));
  }

  personTvCreditsCast() {
    return element.all(by.css('mf-person-tv-credits .cast a'));
  }

  setInputToPersonTvSearchCrewFieldText(searchPhrase: string) {
    element(by.css('mf-person-tv-credits #searchCrew')).sendKeys(searchPhrase);
  }

  personTvCreditsCrew() {
    return element.all(by.css('mf-person-tv-credits .crew a'));
  }

  setInputToPersonTvSearchCastFieldText(searchPhrase: string) {
    element(by.css('mf-person-tv-credits #searchCast')).sendKeys(searchPhrase);
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

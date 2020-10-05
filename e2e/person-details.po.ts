import { browser, by, element, ElementArrayFinder } from 'protractor';

export class PersonDetailsPage {
  navigateTo(): unknown {
    return browser.get('#/person-details/16483');
  }

  personPoster(): ElementArrayFinder {
    return element.all(by.css('mat-card.poster img'));
  }

  personDetails(): ElementArrayFinder {
    return element.all(by.css('mat-card.details'));
  }

  personName(): ElementArrayFinder {
    return element.all(by.css('mat-card.details h2.title'));
  }

  personOverview(): ElementArrayFinder {
    return element.all(by.css('mat-card.details p.overview'));
  }

  personQueries(): ElementArrayFinder {
    return element.all(by.css('mat-card.details .query'));
  }

  personImages(): ElementArrayFinder {
    return element.all(by.css('mf-person-images img'));
  }

  personTaggedImages(): ElementArrayFinder {
    return element.all(by.css('mf-person-tagged-images img'));
  }

  personMovieCredits(): ElementArrayFinder {
    return element.all(by.css('mf-person-movie-credits'));
  }

  personMovieCreditsCast(): ElementArrayFinder {
    return element.all(by.css('mf-person-movie-credits .cast a'));
  }

  personCombinedCredits(): ElementArrayFinder {
    return element.all(by.css('mf-person-combined-credits a'));
  }

  setInputToPersonMovieSearchCrewFieldText(searchPhrase: string): void {
    element(by.css('mf-person-movie-credits #searchCrew')).sendKeys(
      searchPhrase
    );
  }

  personMovieCreditsCrew(): ElementArrayFinder {
    return element.all(by.css('mf-person-movie-credits .crew a'));
  }

  setInputToPersonMovieSearchCastFieldText(searchPhrase: string): void {
    element(by.css('mf-person-movie-credits #searchCast')).sendKeys(
      searchPhrase
    );
  }

  personTvCredits(): ElementArrayFinder {
    return element.all(by.css('mf-person-tv-credits'));
  }

  personTvCreditsCast(): ElementArrayFinder {
    return element.all(by.css('mf-person-tv-credits .cast a'));
  }

  setInputToPersonTvSearchCrewFieldText(searchPhrase: string): void {
    element(by.css('mf-person-tv-credits #searchCrew')).sendKeys(searchPhrase);
  }

  personTvCreditsCrew(): ElementArrayFinder {
    return element.all(by.css('mf-person-tv-credits .crew a'));
  }

  setInputToPersonTvSearchCastFieldText(searchPhrase: string): void {
    element(by.css('mf-person-tv-credits #searchCast')).sendKeys(searchPhrase);
  }
}

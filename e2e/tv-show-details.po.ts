import { browser, by, element } from 'protractor';

export class TvShowDetailsPage {
  navigateTo() {
    return browser.get('#/tv-details/433');
  }

  tvShowPoster() {
    return element.all(by.css('mat-card.poster img'));
  }

  tvShowScore() {
    return element.all(by.css('mat-card.poster mat-progress-spinner'));
  }

  tvShowDetails() {
    return element.all(by.css('mat-card.details'));
  }

  tvShowTitle() {
    return element.all(by.css('mat-card.details h2.title'));
  }

  tvShowOverview() {
    return element.all(by.css('mat-card.details p.overview'));
  }

  tvShowKeywords() {
    return element.all(by.css('mat-card.details mf-tv-keywords mat-chip'));
  }

  tvShowGenres() {
    return element.all(by.css('mat-card.details .genres'));
  }

  tvShowQueries() {
    return element.all(by.css('mat-card.details .query'));
  }

  tvShowImages() {
    return element.all(by.css('mf-tv-images img'));
  }

  tvShowVideos() {
    return element.all(by.css('mf-tv-show-videos iframe'));
  }

  tvShowReviews() {
    return element.all(by.css('mf-tv-show-reviews mat-card'));
  }

  tvShowCredits() {
    return element.all(by.css('mf-tv-show-credits'));
  }

  tvShowCreditsCast() {
    return element.all(by.css('mf-tv-show-credits .cast a'));
  }

  setInputToSearchCrewFieldText(searchPhrase: string) {
    element(by.css('mf-tv-show-credits #searchCrew')).sendKeys(searchPhrase);
  }

  tvShowRecommendations() {
    return element.all(by.css('mf-recommended-tv-shows mat-card'));
  }

  tvShowSimilar() {
    return element.all(by.css('mf-similar-tv-shows mat-card'));
  }

  tvShowCreditsCrew() {
    return element.all(by.css('mf-tv-show-credits .crew a'));
  }

  setInputToSearchCastFieldText(searchPhrase: string) {
    element(by.css('mf-tv-show-credits #searchCast')).sendKeys(searchPhrase);
  }
}

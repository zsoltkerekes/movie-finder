import { browser, by, element } from 'protractor';

export class MovieDetailsPage {
  navigateTo() {
    return browser.get('#/details/218');
  }

  titleText() {
    return element(by.css('mf-root h1')).getText();
  }

  moviePoster() {
    return element.all(by.css('mat-card.poster img'));
  }

  movieScore() {
    return element.all(by.css('mat-card.poster mat-progress-spinner'));
  }

  movieDetails() {
    return element.all(by.css('mat-card.details'));
  }

  movieTitle() {
    return element.all(by.css('mat-card.details h2.title'));
  }

  movieTagline() {
    return element.all(by.css('mat-card.details h4.tagline'));
  }

  movieOverview() {
    return element.all(by.css('mat-card.details p.overview'));
  }

  movieKeywords() {
    return element.all(by.css('mat-card.details mf-movie-keywords mat-chip'));
  }

  movieCollectionOverview() {
    return element.all(
      by.css('mat-card.details mf-movie-collection p.collection-overview')
    );
  }

  movieCollectionItems() {
    return element.all(by.css('mat-card.details mf-movie-collection mat-chip'));
  }

  movieGenres() {
    return element.all(by.css('mat-card.details .genres'));
  }

  movieQueries() {
    return element.all(by.css('mat-card.details .query'));
  }

  movieImages() {
    return element.all(by.css('mf-movie-images img'));
  }

  movieVideos() {
    return element.all(by.css('mf-movie-videos iframe'));
  }

  movieReviews() {
    return element.all(by.css('mf-movie-reviews mat-card'));
  }

  movieCredits() {
    return element.all(by.css('mf-movie-credits'));
  }

  movieCreditsCast() {
    return element.all(by.css('mf-movie-credits .cast a'));
  }

  movieRecommendations() {
    return element.all(by.css('mf-recommended-movies mat-card'));
  }

  movieSimilar() {
    return element.all(by.css('mf-similar-movies mat-card'));
  }

  movieCreditsCrew() {
    return element.all(by.css('mf-movie-credits .crew a'));
  }

  buttonToTop() {
    return element.all(by.css('button.toTop'));
  }

  footerText() {
    return element(by.css('mf-root mf-footer p')).getText();
  }
}

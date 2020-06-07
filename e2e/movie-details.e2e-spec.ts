import { MovieDetailsPage } from './movie-details.po';

describe('movie-finder movie details page', () => {
  let page: MovieDetailsPage;
  page = new MovieDetailsPage();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should display movie poster', () => {
    expect(page.moviePoster().count()).toEqual(1);
  });

  it('should display movie score', () => {
    expect(page.movieScore().count()).toEqual(1);
  });

  it('should display movie details', () => {
    expect(page.movieDetails().count()).toEqual(1);
  });

  it('should display movie title', () => {
    expect(page.movieTitle().count()).toEqual(1);
  });

  it('should display movie tagline', () => {
    expect(page.movieTagline().count()).toEqual(1);
  });

  it('should display movie overview', () => {
    expect(page.movieOverview().count()).toEqual(1);
  });

  it('should display movie keywords', () => {
    expect(page.movieKeywords().count()).toBeGreaterThan(1);
  });

  it('should display movie collection overview', () => {
    expect(page.movieCollectionOverview().count()).toEqual(1);
  });

  it('should display movie collection items', () => {
    expect(page.movieCollectionItems().count()).toBeGreaterThan(1);
  });

  it('should display movie genres', () => {
    expect(page.movieGenres().count()).toEqual(1);
  });

  it('should display search queries', () => {
    expect(page.movieQueries().count()).toEqual(6);
  });

  it('should display movie images', () => {
    expect(page.movieImages().count()).toEqual(1);
  });

  it('should display movie videos', () => {
    expect(page.movieVideos().count()).toEqual(1);
  });

  it('should display movie reviews', () => {
    expect(page.movieReviews().count()).toBeGreaterThanOrEqual(1);
  });

  it('should display movie credits', () => {
    expect(page.movieCredits().count()).toEqual(1);
  });

  it('should display movie credits cast', () => {
    expect(page.movieCreditsCast().count()).toBeGreaterThanOrEqual(1);
  });

  it('should have a working movie credits cast filtering', () => {
    page.setInputToSearchCastFieldText('arnold');
    expect(page.movieCreditsCast().count()).toEqual(1);
  });

  it('should display movie credits crew', () => {
    expect(page.movieCreditsCrew().count()).toBeGreaterThanOrEqual(1);
  });

  it('should have a working movie credits crew filtering', () => {
    page.setInputToSearchCrewFieldText('polly');
    expect(page.movieCreditsCast().count()).toEqual(1);
  });

  it('should display movie recommendations', () => {
    expect(page.movieRecommendations().count()).toBeGreaterThan(1);
  });

  it('should display movie similar', () => {
    expect(page.movieSimilar().count()).toBeGreaterThan(1);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    const amount = await page.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

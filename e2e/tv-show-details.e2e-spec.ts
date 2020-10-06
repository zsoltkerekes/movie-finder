import { TvShowDetailsPage } from './tv-show-details.po';
import { Common } from './common.po';

describe('movie-finder tv show details page', () => {
  let page: TvShowDetailsPage;
  page = new TvShowDetailsPage();

  const common = new Common();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(common.titleText()).toEqual('Movie Finder');
  });

  it('should display tv show poster', () => {
    expect(page.tvShowPoster().count()).toEqual(1);
  });

  it('should display tv show score', () => {
    expect(page.tvShowScore().count()).toEqual(1);
  });

  it('should display tv show details', () => {
    expect(page.tvShowDetails().count()).toEqual(1);
  });

  it('should display tv show title', () => {
    expect(page.tvShowTitle().count()).toEqual(1);
  });

  it('should display tv show overview', () => {
    expect(page.tvShowOverview().count()).toEqual(1);
  });

  it('should display tv show keywords', () => {
    expect(page.tvShowKeywords().count()).toBeGreaterThan(1);
  });

  it('should display tv show genres', () => {
    expect(page.tvShowGenres().count()).toEqual(1);
  });

  it('should display search queries', () => {
    expect(page.tvShowQueries().count()).toEqual(4);
  });

  it('should display tv show images', () => {
    expect(page.tvShowImages().count()).toEqual(1);
  });

  it('should display tv show videos', () => {
    expect(page.tvShowVideos().count()).toEqual(1);
  });

  it('should display tv show seasons', () => {
    expect(page.tvShowSeasons().count()).toEqual(1);
  });

  it('should display tv show season poster', () => {
    expect(page.tvShowSeasonsPoster().count()).toEqual(1);
  });

  it('should display tv show reviews', () => {
    expect(page.tvShowReviews().count()).toBeGreaterThanOrEqual(1);
  });

  it('should display tv show credits', () => {
    expect(page.tvShowCredits().count()).toEqual(1);
  });

  it('should display tv show credits cast', () => {
    expect(page.tvShowCreditsCast().count()).toBeGreaterThanOrEqual(1);
  });

  it('should have a working tv show credits cast filtering', () => {
    page.setInputToSearchCastFieldText('richard');
    expect(page.tvShowCreditsCast().count()).toEqual(2);
  });

  it('should display tv show credits crew', () => {
    expect(page.tvShowCreditsCrew().count()).toBeGreaterThanOrEqual(2);
  });

  it('should have a working tv show credits crew filtering', () => {
    page.setInputToSearchCrewFieldText('amanda');
    expect(page.tvShowCreditsCrew().count()).toEqual(1);
  });

  it('should display tv show recommendations', () => {
    expect(page.tvShowRecommendations().count()).toBeGreaterThan(1);
  });

  it('should display tv show similar', () => {
    expect(page.tvShowSimilar().count()).toBeGreaterThan(1);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(common.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    const amount = await common.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

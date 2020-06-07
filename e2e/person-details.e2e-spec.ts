import { PersonDetailsPage } from './person-details.po';

describe('movie-finder person details page', () => {
  let page: PersonDetailsPage;
  page = new PersonDetailsPage();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should display person poster', () => {
    expect(page.personPoster().count()).toEqual(1);
  });

  it('should display person details', () => {
    expect(page.personDetails().count()).toEqual(1);
  });

  it('should display person name', () => {
    expect(page.personName().count()).toEqual(1);
  });

  it('should display person overview', () => {
    expect(page.personOverview().count()).toEqual(1);
  });

  it('should display search queries', () => {
    expect(page.personQueries().count()).toEqual(6);
  });

  it('should display person images', () => {
    expect(page.personImages().count()).toEqual(1);
  });

  it('should display person tagged images', () => {
    expect(page.personTaggedImages().count()).toEqual(1);
  });

  it('should display person movie credits', () => {
    expect(page.personMovieCredits().count()).toEqual(1);
  });

  it('should display person movie credits cast', () => {
    expect(page.personMovieCreditsCast().count()).toBeGreaterThanOrEqual(1);
  });

  it('should have a working person movie credits cast filtering', () => {
    page.setInputToPersonMovieSearchCastFieldText('syl');
    expect(page.personMovieCreditsCast().count()).toEqual(2);
  });

  it('should display person movie credits crew', () => {
    expect(page.personMovieCreditsCrew().count()).toBeGreaterThanOrEqual(1);
  });

  it('should have a working person movie credits crew filtering', () => {
    page.setInputToPersonMovieSearchCrewFieldText('story');
    expect(page.personMovieCreditsCrew().count()).toEqual(3);
  });

  it('should display person tv show crew', () => {
    expect(page.personTvCreditsCrew().count()).toBeGreaterThanOrEqual(1);
  });

  it('should have a working person tv show credits crew filtering', () => {
    page.setInputToPersonTvSearchCrewFieldText('contender');
    expect(page.personTvCreditsCrew().count()).toEqual(1);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });

  it('should display person tv show credits', () => {
    expect(page.personTvCredits().count()).toEqual(1);
  });

  it('should display person tv show credits cast', () => {
    expect(page.personTvCreditsCast().count()).toBeGreaterThanOrEqual(1);
  });

  it('should have a working person tv show credits cast filtering', () => {
    page.setInputToPersonTvSearchCastFieldText('pet');
    expect(page.personTvCreditsCast().count()).toEqual(2);
  });

  it('should display button to top', async () => {
    const amount = await page.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

import { MoviesByGenrePage } from './movies-by-genre.po';

describe('movie-finder upcoming page', () => {
  let page: MoviesByGenrePage;

  beforeAll(async () => {
    page = new MoviesByGenrePage();
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should have movie cards listed', async () => {
    const amount = await page.movieCardElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have the pagination element', async () => {
    const amount = await page.paginationElements().count();
    expect(amount).toEqual(1);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    const amount = await page.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

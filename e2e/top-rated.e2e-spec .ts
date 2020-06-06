import { TopRatedPage } from './top-rated.po';

describe('movie-finder top-rated page', () => {
  let page: TopRatedPage;
  page = new TopRatedPage();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });
});

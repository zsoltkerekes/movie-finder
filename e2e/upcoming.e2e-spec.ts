import { UpcomingPage } from './upcoming.po';

describe('movie-finder upcoming page', () => {
  let page: UpcomingPage;

  beforeAll(async () => {
    page = new UpcomingPage();
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });
});

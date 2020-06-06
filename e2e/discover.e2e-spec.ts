import { DiscoverPage } from './discover.po';

describe('movie-finder discover page', () => {
  let page: DiscoverPage;
  page = new DiscoverPage();

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

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

  it('should have movie cards listed', async () => {
    const amount = await page.movieCardElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have tv cards listed', async () => {
    const amount = await page.tvCardElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have movie cards listed', async () => {
    const amount = await page.personCardElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have all three pagination element', async () => {
    const amount = await page.paginationElements().count();
    expect(amount).toEqual(3);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    const amount = await page.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

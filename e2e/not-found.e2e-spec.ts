import { NotFoundPage } from './not-found.po';

describe('movie-finder upcoming page', () => {
  let page: NotFoundPage;

  beforeAll(async () => {
    page = new NotFoundPage();
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should display page not found information', async () => {
    const amount = await page.notFound().count();
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

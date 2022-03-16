import { NotFoundPage } from './not-found.po';
import { Common } from './common.po';

describe('movie-finder upcoming page', () => {
  const page: NotFoundPage = new NotFoundPage();

  const common = new Common();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(common.titleText()).toEqual('Movie Finder');
  });

  it('should display page not found information', async () => {
    const amount = await page.notFound().count();
    expect(amount).toEqual(1);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(common.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    const amount = await common.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

import { KeywordPage } from './keyword.po';
import { Common } from './common.po';
import { browser } from 'protractor';

describe('movie-finder keyword page', () => {
  const page: KeywordPage = new KeywordPage();

  const common = new Common();

  beforeAll(async () => {
    await page.navigateTo();
    browser.ignoreSynchronization = true;
  });

  afterAll(async () => {
    browser.ignoreSynchronization = false;
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(common.titleText()).toEqual('Movie Finder');
  });

  it('should have movie cards listed', async () => {
    await browser.sleep(1000);
    const amount = await page.movieCardElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have the pagination element', async () => {
    const amount = await page.paginationElements().count();
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

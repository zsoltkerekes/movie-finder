import { browser } from 'protractor';
import { AppPage } from './app.po';
import { Common } from './common.po';

describe('movie-finder main page', () => {
  const page: AppPage = new AppPage();

  const common = new Common();

  beforeAll(async () => {
    await page.navigateTo();
    browser.driver.manage().window().maximize();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(common.titleText()).toEqual('Movie Finder');
  });

  it('should have movie categories listed', async () => {
    const amount = await page.movieButtonElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have tv categories listed', async () => {
    const amount = await page.tvButtonElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should display button to top', async () => {
    const amount = await common.buttonToTop().count();
    expect(amount).toEqual(1);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(common.footerText()).toContain('Movie Finder');
  });
});

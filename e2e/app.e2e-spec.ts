import { AppPage } from './app.po';
import { async } from '@angular/core/testing';

describe('movie-finder main page', () => {
  let page: AppPage;
  page = new AppPage();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
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
    const amount = await page.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

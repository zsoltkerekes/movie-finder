import { SearchPage } from './search.po';
import { async } from '@angular/core/testing';

describe('movie-finder search page', () => {
  let page: SearchPage;
  page = new SearchPage();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should have a search field that is empty by default', () => {
    expect(page.searchFieldText()).toEqual('');
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });
});

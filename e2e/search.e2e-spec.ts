import { SearchPage } from './search.po';
import { Common } from './common.po';

describe('movie-finder search page', () => {
  let amount: number;
  const page: SearchPage = new SearchPage();

  const common = new Common();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(common.titleText()).toEqual('Movie Finder');
  });

  it('should have a search field that is empty by default', () => {
    expect(page.searchFieldText()).toEqual('');
  });

  it('should have a working input field mechanism', async () => {
    const searchPhrase = 'termi';
    await page.setInputToSearchFieldText(searchPhrase);
    expect(page.searchFieldText()).toEqual(searchPhrase);
  });

  it('should have searchResultElement', async () => {
    amount = await page.searchResultElement().count();
    expect(amount).toEqual(1);
  });

  it('should have paginationElements', async () => {
    amount = await page.paginationElements().count();
    expect(amount).toEqual(3);
  });

  it('should have searchResultKeywordElements', async () => {
    amount = await page.searchResultKeywordElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have searchResultMovieCardsElements', async () => {
    amount = await page.searchResultMovieCardsElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have searchResultTvCardsElements', async () => {
    amount = await page.searchResultTvCardsElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should have searchResultPersonCardsElements', async () => {
    amount = await page.searchResultPersonCardsElements().count();
    expect(amount).toBeGreaterThan(1);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(common.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    amount = await common.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

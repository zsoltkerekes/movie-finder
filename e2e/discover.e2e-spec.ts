import { DiscoverPage } from './discover.po';
import { Common } from './common.po';

describe('movie-finder discover page', () => {
  let page: DiscoverPage;
  page = new DiscoverPage();

  const common = new Common();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(common.titleText()).toEqual('Movie Finder');
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

  it('should have working movie genre filter', async () => {
    const originalCards = await page.movieCardElements().count();
    await page.movieActionCheckboxElementClick();
    await page.movieDocumentaryCheckboxElementClick();
    const updatedCards = await page.movieCardElements().count();
    expect(updatedCards).not.toEqual(originalCards);
  });

  it('should have a working movie year input filter', async () => {
    const originalCards = await page.movieCardElements();
    page.setInputToMovieYear(new Date().getFullYear() - 1);
    const updatedCards = await page.movieCardElements();
    expect(updatedCards).not.toEqual(originalCards);
  });

  it('should have working tv genre filter', async () => {
    const originalCards = await page.tvCardElements().count();
    await page.tvActionCheckboxElementClick();
    await page.tvDocumentaryCheckboxElementClick();
    const updatedCards = await page.tvCardElements().count();
    expect(updatedCards).not.toEqual(originalCards);
  });

  it('should have a working tv year input filter', async () => {
    const originalCards = await page.tvCardElements().count();
    page.setInputToTvYear(new Date().getFullYear() - 1);
    const updatedCards = await page.tvCardElements().count();
    expect(updatedCards).not.toEqual(originalCards);
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(common.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    const amount = await common.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

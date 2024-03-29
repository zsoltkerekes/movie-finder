import { DiscoverPage } from './discover.po';
import { Common } from './common.po';
import { browser } from 'protractor';

describe('movie-finder discover page', () => {
  const page: DiscoverPage = new DiscoverPage();

  const common = new Common();

  const waitTime = 3000;

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
    await page.movieDramaCheckboxElementClick();
    const updatedCards = await page.movieCardElements().count();
    await page.movieActionCheckboxElementClick();
    await page.movieDocumentaryCheckboxElementClick();
    await page.movieDramaCheckboxElementClick();
    expect(updatedCards).not.toEqual(originalCards);
  });

  it('should have a working movie year input filter', async () => {
    await browser.sleep(waitTime);
    const originalCards = await page.movieCardElements().count();
    await page.setInputToMovieYear(1800);
    await browser.sleep(waitTime);
    const updatedCards = await page.movieCardElements().count();
    expect(updatedCards).not.toEqual(originalCards);
  });

  it('should have working tv genre filter', async () => {
    const originalCards = await page.tvCardElements().count();
    await browser.sleep(waitTime);
    await page.tvActionCheckboxElementClick();
    await page.tvDocumentaryCheckboxElementClick();
    await browser.sleep(waitTime);
    const updatedCards = await page.tvCardElements().count();
    expect(updatedCards).not.toEqual(originalCards);
  });

  it('should have a working tv year input filter', async () => {
    await browser.sleep(waitTime);
    const originalCards = await page.tvCardElements().count();
    await page.setInputToTvYear(1800);
    await browser.sleep(waitTime);
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

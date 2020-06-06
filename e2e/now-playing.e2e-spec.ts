import { NowPlayingPage } from './now-playing.po';

describe('movie-finder now playing page', () => {
  let page: NowPlayingPage;
  page = new NowPlayingPage();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(page.titleText()).toEqual('Movie Finder');
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(page.footerText()).toContain('Movie Finder');
  });
});

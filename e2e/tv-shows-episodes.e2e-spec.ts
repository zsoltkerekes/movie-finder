import { TvShowEpisodes } from './tv-shows-episodes.po';
import { Common } from './common.po';

describe('movie-finder upcoming page', () => {
  let page: TvShowEpisodes;
  page = new TvShowEpisodes();

  const common = new Common();

  beforeAll(async () => {
    await page.navigateTo();
  });

  it('should display "Movie Finder" title in the header', () => {
    expect(common.titleText()).toEqual('Movie Finder');
  });

  it('should have the tv show episodes details element', async () => {
    const amount = await page.tvShowEpisodesDetailsElements().count();
    expect(amount).toEqual(1);
  });

  it('should have the tv show episodes details title element', async () => {
    const amount = await page.tvShowEpisodesDetailsTitleElements().count();
    expect(amount).toEqual(2);
  });

  it('should have the tv show episodes details season overview element', async () => {
    const amount = await page.tvShowEpisodesDetailsOverviewElements().count();
    expect(amount).toEqual(1);
  });

  it('should have the tv show episodes details season change button element', async () => {
    const amount = await page
      .tvShowEpisodesDetailsSeasonChangeButtonElements()
      .count();
    expect(amount).toEqual(6);
  });

  it('should have the tv show episodes details season videos element', async () => {
    const amount = await page
      .tvShowEpisodesDetailsSeasonvideosElements()
      .count();
    expect(amount).toEqual(1);
  });

  it('should have the tv show episodes details season videos change button element', async () => {
    const amount = await page
      .tvShowEpisodesDetailsSeasonvideosButtonElements()
      .count();
    expect(amount).toEqual(6);
  });

  it('should have the tv show episodes details season videos video player element', async () => {
    const amount = await page
      .tvShowEpisodesDetailsSeasonvideosVideoPlayerElements()
      .count();
    expect(amount).toEqual(1);
  });

  it('should have the tv show episodes details season episodes element', async () => {
    const amount = await page
      .tvShowEpisodesDetailsSeasonEpisodesElements()
      .count();
    expect(amount).toEqual(1);
  });

  it('should have the tv show episodes details season episodes details element', async () => {
    const amount = await page
      .tvShowEpisodesDetailsSeasonEpisodesDetailsElements()
      .count();
    expect(amount).toBeGreaterThanOrEqual(1);
  });

  it('should have the tv show episodes details season episodes details element with only the first one open', async () => {
    const elements = await page.tvShowEpisodesDetailsSeasonEpisodesDetailsElements();
    expect(elements[0].getAttribute('ng-reflect-expanded')).toEqual('true');
    expect(elements[1].getAttribute('ng-reflect-expanded')).not.toEqual('true');
  });

  it('should display "Movie Finder" title in the footer', () => {
    expect(common.footerText()).toContain('Movie Finder');
  });

  it('should display button to top', async () => {
    const amount = await common.buttonToTop().count();
    expect(amount).toEqual(1);
  });
});

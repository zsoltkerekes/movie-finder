import { browser, by, element } from 'protractor';

export class TvShowEpisodes {
  navigateTo() {
    return browser.get('#/tv-show-episodes/1396/5');
  }

  tvShowEpisodesDetailsElements() {
    return element.all(by.css('mf-tv-show-episodes-details'));
  }

  tvShowEpisodesDetailsTitleElements() {
    return element.all(by.css('mf-tv-show-episodes-details h2'));
  }

  tvShowEpisodesDetailsOverviewElements() {
    return element.all(by.css('mf-tv-show-episodes-details .season-overview'));
  }

  tvShowEpisodesDetailsSeasonChangeButtonElements() {
    return element.all(by.css('mf-tv-show-episodes-details .seasons button'));
  }

  tvShowEpisodesDetailsSeasonvideosElements() {
    return element.all(
      by.css('mf-tv-show-episodes-details mf-tv-show-season-videos')
    );
  }

  tvShowEpisodesDetailsSeasonvideosButtonElements() {
    return element.all(
      by.css('mf-tv-show-episodes-details mf-tv-show-season-videos mat-chip')
    );
  }

  tvShowEpisodesDetailsSeasonvideosVideoPlayerElements() {
    return element.all(
      by.css('mf-tv-show-episodes-details mf-tv-show-season-videos iframe')
    );
  }

  tvShowEpisodesDetailsSeasonEpisodesElements() {
    return element.all(by.css('mf-tv-show-episodes-details mat-accordion'));
  }

  tvShowEpisodesDetailsSeasonEpisodesDetailsElements() {
    return element.all(
      by.css('mf-tv-show-episodes-details mat-accordion mat-expansion-panel')
    );
  }
}

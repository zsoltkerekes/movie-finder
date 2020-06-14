import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-tv-show-seasons',
  templateUrl: './tv-show-seasons.component.html',
  styleUrls: ['./tv-show-seasons.component.scss'],
})
export class TvShowSeasonsComponent implements OnInit, OnChanges {
  @Input() tvShow;
  innerWidth: number;

  seasonName: string;
  seasonAirDate: string;
  seasonEpisodeCount: string;
  seasonOverview: string;
  episodesOverview: string;

  constructor(private api: ApiService, public language: LanguageService) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.seasonName = this.language.getText(
      'Season Name',
      this.api.getGlobal()
    );
    this.seasonAirDate = this.language.getText(
      'Season Air Date',
      this.api.getGlobal()
    );
    this.seasonEpisodeCount = this.language.getText(
      'Season episode count',
      this.api.getGlobal()
    );
    this.seasonOverview = this.language.getText(
      'Season overview',
      this.api.getGlobal()
    );
    this.episodesOverview = this.language.getText(
      'Episodes overview',
      this.api.getGlobal()
    );
  }

  ngOnChanges() {
    if (this.tvShow && this.tvShow.seasons && this.tvShow.seasons.length > 1) {
      if (
        this.tvShow.seasons[0].name === 'Specials' ||
        this.tvShow.seasons[0].name === 'Speciális epizódok'
      ) {
        const specials = this.tvShow.seasons.shift();
        this.tvShow.seasons.push(specials);
      }
    }
  }
}

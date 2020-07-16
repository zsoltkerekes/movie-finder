import {
  TvShowEpisodes,
  tvShowEpisodesData,
} from '../../../interfaces/tv-show-episodes.interface';
import {
  MovieDetails,
  movieDetailsData,
} from '../../../interfaces/MovieDetails.interface';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-tv-show-episodes-details',
  templateUrl: './tv-show-episodes-details.component.html',
  styleUrls: ['./tv-show-episodes-details.component.scss'],
})
export class TvShowEpisodesDetailsComponent implements OnInit {
  id: string;
  season: string;
  episodeNumber: number;
  innerWidth: number;

  tvShow: MovieDetails;
  tvShowEpisodes: TvShowEpisodes;

  episodeText: string;
  episodesText: string;
  previousText: string;
  nextText: string;
  backToDetails: string;
  seasonText: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    public language: LanguageService
  ) {
    this.innerWidth = window.innerWidth;
  }

  setEpisode = (index: number): number => (this.episodeNumber = index);

  ngOnInit() {
    this.tvShow = movieDetailsData;
    this.tvShowEpisodes = tvShowEpisodesData;

    this.episodeText = this.language.getText('episode', this.api.getGlobal());
    this.episodesText = this.language.getText('Episodes', this.api.getGlobal());
    this.previousText = this.language.getText('Previous', this.api.getGlobal());
    this.nextText = this.language.getText('Next', this.api.getGlobal());
    this.backToDetails = this.language.getText(
      'Back to tv show details',
      this.api.getGlobal()
    );
    this.seasonText = this.language.getText('season', this.api.getGlobal());

    this.episodeNumber = 0;

    this.activatedRoute.params.subscribe(() => {
      document.documentElement.scrollTop = 0;
      this.episodeNumber = 0;

      this.id = this.activatedRoute.snapshot.params['id'];
      this.season = this.activatedRoute.snapshot.params['season'];

      this.api.getTvShowById(this.id).subscribe((result) => {
        let output = result.json();
        output = { ...this.tvShow, ...output };
        this.tvShow = output;
        this.title.setTitle(
          `${this.season}. ${this.seasonText} ::: ${this.tvShow.name} ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
        );
      });

      this.api.getTvShowEpisodes(this.id, this.season).subscribe((response) => {
        const output = response.json();
        output.episodes = output.episodes.map((row) => row || {});
        this.tvShowEpisodes = output;
      });
    });
  }
}

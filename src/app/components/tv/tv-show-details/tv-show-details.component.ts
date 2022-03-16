import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  MovieDetails,
  movieDetailsData,
} from '../../../interfaces/MovieDetails.interface';
import { ApiService } from '../../../services/api.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { Query } from '../../../interfaces/query.interface';

@Component({
  selector: 'mf-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss'],
})
export class TvShowDetailsComponent implements OnChanges, OnInit {
  @Input() tvShow: MovieDetails;
  height: string;
  getGlobal = this.api.getGlobal;
  innerWidth: number;
  createdBy: string;
  queries: Array<Query>;

  genres: string;
  originalLanguage: string;
  runtime: string;
  minutes: string;
  status: string;
  releaseDate: string;
  budget: string;
  revenue: string;
  vote: string;
  popularity: string;
  homepage: string;
  search: string;
  byTitle: string;
  byOriginalTitle: string;
  seasonsEpisodes: string;
  lastAirDate: string;
  nextAirDate: string;
  createdByText: string;

  backgroundImage = (): string | undefined => {
    if (this.tvShow.backdrop_path) {
      return `url(${this.api.getBackgroundUrl()}${this.tvShow.backdrop_path})`;
    }
  };

  listGenres = (array: { name: string }[]): string => {
    const output = [];
    if (array) {
      array.forEach((row) => {
        output.push(row.name);
      });
      return ` ${output.join(', ')}`;
    } else {
      return '';
    }
  };

  constructor(
    private api: ApiService,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.tvShow = movieDetailsData;
    this.genres = this.language.getText('Genres', this.api.getGlobal());
    this.originalLanguage = this.language.getText(
      'Original language',
      this.api.getGlobal()
    );
    this.runtime = this.language.getText('Runtime', this.api.getGlobal());
    this.minutes = this.language.getText('minutes', this.api.getGlobal());
    this.status = this.language.getText('Status', this.api.getGlobal());
    this.releaseDate = this.language.getText(
      'Release date',
      this.api.getGlobal()
    );
    this.budget = this.language.getText('Budget', this.api.getGlobal());
    this.revenue = this.language.getText('Revenue', this.api.getGlobal());
    this.vote = this.language.getText('Vote', this.api.getGlobal());
    this.popularity = this.language.getText('Popularity', this.api.getGlobal());
    this.homepage = this.language.getText('Homepage', this.api.getGlobal());
    this.search = this.language.getText('Search', this.api.getGlobal());
    this.byTitle = this.language.getText('by title', this.api.getGlobal());
    this.byOriginalTitle = this.language.getText(
      'by original title',
      this.api.getGlobal()
    );
    this.seasonsEpisodes = this.language.getText(
      'Seasons/episodes',
      this.api.getGlobal()
    );
    this.lastAirDate = this.language.getText(
      'Last air date',
      this.api.getGlobal()
    );
    this.nextAirDate = this.language.getText(
      'Next air date',
      this.api.getGlobal()
    );
    this.createdByText = this.language.getText(
      'Created by',
      this.api.getGlobal()
    );

    this.queries = [
      { name: 'Youtube', url: 'https://www.youtube.com/results?search_query=' },
      {
        name: 'Sorozat Barát',
        url: 'https://www.sorozatbarat.online/video/search?s=',
      },
      { name: 'Google', url: 'https://www.google.hu/search?q=' },
      { name: 'Netflix', url: 'https://www.netflix.com/search?q=' },
    ];
  }

  ngOnChanges(): void {
    this.title.setTitle(
      `${this.tvShow.name} ${this.listGenres(this.tvShow.genres)} ::: ${
        this.activatedRoute.snapshot.data['pageTitle']
      }`
    );
    if (this.tvShow.created_by) {
      this.createdBy = this.tvShow.created_by.map((row) => row.name).join(', ');
    }
  }

  open(): void {
    window.open(
      `http://bithumen.be/browse.php?search=${window.escape(
        this.tvShow.name.toString()
      )}`,
      '_blank'
    );
    window.open(
      `https://ncore.pro/torrents.php?mire=${window.escape(
        this.tvShow.name.toString()
      )}`,
      '_blank'
    );
  }
}

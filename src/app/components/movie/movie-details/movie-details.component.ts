import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  MovieDetails,
  movieDetailsData,
} from '../../../models/MovieDetails.model';
import { ApiService } from '../../../services/api.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

declare function escape(s: string): string;

@Component({
  selector: 'mf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() id: number;
  movie: MovieDetails;
  height: string;
  getGlobal = this.api.getGlobal;
  innerWidth: number;

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

  constructor(
    private api: ApiService,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
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
  }

  ngOnChanges() {
    this.loadMovie();
  }

  loadMovie = () => {
    document.documentElement.scrollTop = 0;
    this.movie = movieDetailsData;
    this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
    this.api.getMovieById(this.id).subscribe(
      (result) => {
        let output = result.json();
        output = { ...this.movie, ...output };
        this.movie = output;
        this.title.setTitle(
          `${this.movie.title} (${this.listGenres(this.movie.genres)}) :: ${
            this.activatedRoute.snapshot.data['pageTitle']
          }`
        );
      },
      (error) => {
        if (error.status === 404) {
          this.router.navigate(['/404']);
        }
      }
    );
  };

  listGenres = (array) => {
    const output = [];
    if (array) {
      array.forEach((row) => {
        output.push(row.name);
      });
      return output.join(', ');
    } else {
      return array;
    }
  };

  backgroundImage = () => {
    if (this.movie.backdrop_path) {
      return `url(${this.api.getBackgroundUrl()}${this.movie.backdrop_path})`;
    }
  };

  open() {
    window.open(
      `http://bithumen.be/browse.php?search=${escape(
        this.movie.title.toString()
      )}`,
      '_blank'
    );
    window.open(
      `https://ncore.cc/torrents.php?mire=${escape(
        this.movie.title.toString()
      )}`,
      '_blank'
    );
  }
}

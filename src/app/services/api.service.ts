import { Router } from '@angular/router';
import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ApiService {

  genres = { name: String, id: Number };
  genresArray: Array<{ id: Number, name: String }>;

  tvGenres = { name: String, id: Number };
  tvGenresArray: Array<{ id: Number, name: String }>;


  constructor(
    private http: Http,
    private constants: ConstantsService,
    private router: Router,
  ) {
    this.getAllPossibleGenres();
    this.getAllPossibleTvGenres();
  }

  getContent = url => this.http.get(url);

  changeGlobal() {
    this.constants.changeGlobal();
  }

  getGlobal = () => this.constants.global;

  getBackgroundUrl = () => `${this.constants.imageUrl}${this.constants.backdropSize}`;

  // Movie Begins

  getAllPossibleGenres() {
    this.getContent(this.constants.apiGenres()).subscribe(response => {
      response.json().genres.forEach(row => { this.genres[row.id] = row.name; });
      this.genresArray = response.json().genres.sort((a, b) => {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        return 0;
      });
    });
  }

  getGenreList = (array: Array<Number>): String => {
    const output = [];
    array.forEach(row => {
      output.push(this.genres[row.toString()]);
    });
    return output.join(', ');
  }

  getPopularMovies = (page = 1) => this.getContent(this.constants.popularMovies(page));

  getMovieById = id => this.getContent(this.constants.movieById(id));

  getTopRatedMovies = (page = 1) => this.getContent(this.constants.topRatedMovies(page));

  getMovieByGenre = (genre, page = 1) => this.getContent(this.constants.movieByGenre(genre, page));

  getMovieSearch = (phrase, page = 1) => this.getContent(this.constants.movieSearch(phrase, page));

  getRecommendedMovies = id => this.getContent(this.constants.recommendedMovies(id));

  getNowPlaying = (page = 1) => this.getContent(this.constants.nowPlaying(page));

  getUpcoming = (page = 1) => this.getContent(this.constants.upcoming(page));

  // Movie Ends

  // TV Show Begins

  getAllPossibleTvGenres() {
    this.getContent(this.constants.apiTvGenres()).subscribe(response => {
      response.json().genres.forEach(row => { this.tvGenres[row.id] = row.name; });
      this.tvGenresArray = response.json().genres.sort((a, b) => {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        return 0;
      });
    });
  }

  getTvGenreList = (array: Array<Number>): String => {
    const output = [];
    array.forEach(row => {
      output.push(this.tvGenres[row.toString()]);
    });
    return output.join(', ');
  }

  getTvShowSearch = (phrase, page = 1) => this.getContent(this.constants.tvShowSearch(phrase, page));

  getTvShowById = id => this.getContent(this.constants.tvShowById(id));

  getRecommendedTvShows = id => this.getContent(this.constants.recommendedTvShows(id));

  getPopularTvShows = (page = 1) => this.getContent(this.constants.popularTvShows(page));

  getTopRatedTvSows = (page = 1) => this.getContent(this.constants.topRatedTvShows(page));

  getTvShowByGenre = (genre, page = 1) => this.getContent(this.constants.tvShowByGenre(genre, page));

  // TV Show Ends

}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ConstantsService {

  global: boolean;

  constructor(
    private cookieService: CookieService
  ) {
    this.global = this.cookieService.get('Movie-Finder') === 'Global' ? true : false;
  }

  apiKey = 'api_key=8ada93d9b0cb48be3d73ac8e3ae93c13';
  apiBaseUrl = 'https://api.themoviedb.org/3/';
  imageUrl = 'https://image.tmdb.org/t/p/';
  backdropSize = 'w1280';
  sortBy = '&sort_by=popularity.desc';
  adult = '&include_adult=false';

  language = () =>
    this.global ? '' : '&language=hu'

  page(pageNumber) { return `&page=${pageNumber}`; }

  region = () =>
    this.global ? '' : '&region=hu'

  options = () =>
    `${this.apiKey}${this.sortBy}${this.language()}${this.adult}`

  // Movie Begins

  apiGenres = () =>
    `${this.apiBaseUrl}genre/movie/list?${this.options()}`

  popularMovies = page =>
    `${this.apiBaseUrl}discover/movie?${this.options()}${this.page(page)}`

  movieById = id =>
    `${this.apiBaseUrl}movie/${id}?${this.options()}`

  topRatedMovies = page =>
    `${this.apiBaseUrl}movie/top_rated?${this.options()}${this.page(page)}`

  movieByGenre = (genre, page) =>
    `${this.apiBaseUrl}genre/${genre}/movies?${this.options()}${this.page(page)}`

  movieSearch = (phrase, page) =>
    `${this.apiBaseUrl}search/movie?${this.options()}&query=${phrase}${this.page(page)}`

  recommendedMovies = id =>
    `${this.apiBaseUrl}movie/${id}/recommendations?${this.options()}`

  nowPlaying = page =>
    `${this.apiBaseUrl}movie/now_playing?${this.options()}${this.page(page)}${this.region()}`

  upcoming = page =>
    `${this.apiBaseUrl}movie/upcoming?${this.options()}${this.page(page)}${this.region()}`

  // Movie Ends

  // TV Show Begins

  apiTvGenres = () =>
  `${this.apiBaseUrl}genre/tv/list?${this.options()}`

  tvShowSearch = (phrase, page) =>
    `${this.apiBaseUrl}search/tv?${this.options()}&query=${phrase}${this.page(page)}`

  tvShowById = id =>
  `${this.apiBaseUrl}tv/${id}?${this.options()}`

  recommendedTvShows = id =>
  `${this.apiBaseUrl}tv/${id}/recommendations?${this.options()}`

  popularTvShows = page =>
  `${this.apiBaseUrl}tv/popular?${this.options()}${this.page(page)}`

  topRatedTvShows = page =>
  `${this.apiBaseUrl}tv/top_rated?${this.options()}${this.page(page)}`

  tvShowByGenre = (genre, page) =>
    `${this.apiBaseUrl}discover/tv?&with_genres=${genre}&${this.options()}${this.page(page)}`

  // TV Show Ends

  changeGlobal = () => {
    this.global = !this.global;
    const date = new Date();
    date.setDate(date.getDate() + 3);
    this.cookieService.set('Movie-Finder', this.global ? 'Global' : 'Local', date);
    window.location.reload();
  }

}

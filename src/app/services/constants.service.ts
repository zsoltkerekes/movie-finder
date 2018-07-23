import { TvShowSeasonsComponent } from './../components/tv-show-seasons/tv-show-seasons.component';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class ConstantsService {

  globalOption: boolean;
  adultOption: boolean;

  sortMovieByOption: string;
  sortTvShowByOption: string;

  movieYearOption: number;
  tvShowYearOption: number;

  withGenresOption: number[] = [];
  tvWithGenresOption: number[] = [];

  constructor(
    private cookieService: CookieService
  ) {

    this.globalOption = (this.cookieService.check('Movie-Finder-globalOption') === false ||
    this.cookieService.get('Movie-Finder-globalOption') === 'Global') ?  true : false;

    this.adultOption = this.cookieService.get('Movie-Finder-adultOption') === 'true' ? true : false;

    this.sortMovieByOption = this.cookieService.get('Movie-Finder-sortMovieByOption') || 'popularity.desc';
    this.sortTvShowByOption = this.cookieService.get('Movie-Finder-sortTvShowByOption') || 'popularity.desc';

    this.movieYearOption = +this.cookieService.get('Movie-Finder-movieYearOption') || undefined;
    this.tvShowYearOption = +this.cookieService.get('Movie-Finder-tvShowYearOption') || undefined;

    this.withGenresOption = this.cookieService.get('Movie-Finder-withGenresOption').split('-').map(row => +row);
    this.tvWithGenresOption = this.cookieService.get('Movie-Finder-tvWithGenresOption').split('-').map(row => +row);
  }

  apiKey = 'api_key=8ada93d9b0cb48be3d73ac8e3ae93c13';
  apiBaseUrl = 'https://api.themoviedb.org/3/';
  imageUrl = 'https://image.tmdb.org/t/p/';
  backdropSize = 'w1280';

  adult = (value = false) => `&include_adult=${value}`;

  changeGlobal = () => {
    this.globalOption = !this.globalOption;
    this.cookieService.set('Movie-Finder-globalOption', this.globalOption ? 'Global' : 'Local');
    window.location.reload();
  }

  sortBy = (option = 'popularity.desc') => `&sort_by=${option}`;

  getSortByOptions = () => {
    if (this.globalOption === false) {
      return [
        { name: 'Népszerűség alapján csökkenő', value: 'popularity.desc' },
        { name: 'Népszerűség alapján növekvő', value: 'popularity.asc' },
        { name: 'Premier dátuma alapján csökkenő', value: 'release_date.desc' },
        { name: 'Premier dátuma alapján növekvő', value: 'release_date.asc' },
        { name: 'Eredeti cím alapján csökkenő', value: 'original_title.desc' },
        { name: 'Eredeti cím alapján növekvő', value: 'original_title.asc' },
        { name: 'Szavazatok alapján csökkenő', value: 'vote_average.desc' },
        { name: 'Szavazatok alapján növekvő', value: 'vote_average.asc' }
      ];
    } else {
      return [
        { name: 'Popularity (desc)', value: 'popularity.desc' },
        { name: 'Popularity (asc)', value: 'popularity.asc' },
        { name: 'Release Date (desc)', value: 'release_date.desc' },
        { name: 'Release Date (asc)', value: 'release_date.asc' },
        { name: 'Original_title (desc)', value: 'original_title.desc' },
        { name: 'Original_title (asc)', value: 'original_title.asc' },
        { name: 'Vote Average(desc)', value: 'vote_average.desc' },
        { name: 'Vote Average(asc)', value: 'vote_average.asc' }
      ];
    }

  }

  getAdultOption = () => this.adultOption;
  setAdultOption = () => {
    this.adultOption = !this.adultOption;
    this.cookieService.set('Movie-Finder-adultOption', this.adultOption ? 'true' : 'false');
    window.location.reload();
  }

  getMovieSortByOption = () => this.sortMovieByOption;
  getTvShowSortByOption = () => this.sortTvShowByOption;

  setMovieSortByOption = value => {
    this.sortMovieByOption = value;
    this.cookieService.set('Movie-Finder-sortMovieByOption', value);
    window.location.reload();
  }
  setTvShowSortByOption = value => {
    this.sortTvShowByOption = value;
    this.cookieService.set('Movie-Finder-sortTvShowByOption', value);
    window.location.reload();
  }

  getMovieYearOption = () => this.movieYearOption;
  getTvShowYearOption = () => this.tvShowYearOption;

  setMovieYearOption = (year = undefined) => {
    this.movieYearOption = year;
    this.cookieService.set('Movie-Finder-movieYearOption', year);
    window.location.reload();
  }
  setTvShowYearOption = (year = undefined) => {
    this.tvShowYearOption = year;
    this.cookieService.set('Movie-Finder-tvShowYearOption', year);
    window.location.reload();
  }

  getWithGenresOption = () => this.withGenresOption;
  setWithGenresOption = genres => {
    this.cookieService.set('Movie-Finder-withGenresOption', this.withGenresOption.join('-'));
    window.location.reload();
  }

  getTvWithGenresOption = () => this.tvWithGenresOption;
  setTvWithGenresOption = genres => {
    this.cookieService.set('Movie-Finder-tvWithGenresOption', this.tvWithGenresOption.join('-'));
    window.location.reload();
  }

  language = () =>
    this.globalOption ? '' : '&language=hu'

  page = pageNumber =>
    `&page=${pageNumber}`

  region = () =>
    this.globalOption ? '' : '&region=hu'

  year = () =>
    this.movieYearOption ? `&year=${this.movieYearOption}` : ``

  tvYear = () =>
    this.tvShowYearOption ? `&first_air_date_year=${this.tvShowYearOption}` : ``

  withGenres = () => {
    if (this.withGenresOption.length === 1 && this.withGenresOption[0] === 0) {
      return '';
    } else {
      return `&with_genres=${this.withGenresOption.slice(1).join(',')}`;
    }
  }

  withTvGenres = () => {
    if (this.tvWithGenresOption.length === 1 && this.tvWithGenresOption[0] === 0) {
      return '';
    } else {
      return `&with_genres=${this.tvWithGenresOption.slice(1).join(',')}`;
    }
  }

  options = () =>
    `${this.apiKey}${this.language()}${this.adult()}`

  // Movie Begins

  apiGenres = () =>
    `${this.apiBaseUrl}genre/movie/list?${this.options()}`

  popularMovies = page =>
    `${this.apiBaseUrl}discover/movie?${this.options()}${
    this.page(page)}${this.year()}${this.sortBy(this.sortMovieByOption)}${this.withGenres()}`

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

  similarMovies = id =>
    `${this.apiBaseUrl}movie/${id}/similar?${this.options()}`

  nowPlaying = page =>
    `${this.apiBaseUrl}movie/now_playing?${this.options()}${this.page(page)}${this.region()}`

  upcoming = page =>
    `${this.apiBaseUrl}movie/upcoming?${this.options()}${this.page(page)}${this.region()}`

  movieImages = id =>
    `${this.apiBaseUrl}movie/${id}/images?${this.options()}&include_image_language=hu,eng,null`

  movieVideos = id =>
    `${this.apiBaseUrl}movie/${id}/videos?${this.options()}`

  movieCredits = id =>
    `${this.apiBaseUrl}movie/${id}/credits?${this.options()}`

  movieReviews = id =>
    `${this.apiBaseUrl}movie/${id}/reviews?${this.options()}`

  movieKeywords = id =>
    `${this.apiBaseUrl}movie/${id}/keywords?${this.options()}`

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

  similarTvShows = id =>
    `${this.apiBaseUrl}tv/${id}/similar?${this.options()}`

  popularTvShows = page =>
    `${this.apiBaseUrl}discover/tv?${this.options()}${
    this.page(page)}${this.tvYear()}${this.sortBy(this.sortTvShowByOption)}${this.withTvGenres()}`

  topRatedTvShows = page =>
    `${this.apiBaseUrl}tv/top_rated?${this.options()}${this.page(page)}`

  tvShowByGenre = (genre, page) =>
    `${this.apiBaseUrl}discover/tv?&with_genres=${genre}&${this.options()}${this.page(page)}`

  tvShowEpisodes = (id, season) =>
    `${this.apiBaseUrl}tv/${id}/season/${season}?${this.options()}`

  tvImages = id =>
    `${this.apiBaseUrl}tv/${id}/images?${this.options()}&include_image_language=hu,eng,null`

  tvShowVideos = id =>
    `${this.apiBaseUrl}tv/${id}/videos?${this.options()}`

  tvShowSeasonVideos = (id, season) =>
    `${this.apiBaseUrl}tv/${id}/season/${season}/videos?${this.options()}`

  tvShowCredits = id =>
    `${this.apiBaseUrl}tv/${id}/credits?${this.options()}`

  tvShowReviews = id =>
    `${this.apiBaseUrl}tv/${id}/reviews?${this.options()}`

  tvKeywords = id =>
    `${this.apiBaseUrl}tv/${id}/keywords?${this.options()}`

  // TV Show Ends

  // People Begins

  personById = id =>
    `${this.apiBaseUrl}person/${id}?${this.options()}`

  personMovieCredits = id =>
    `${this.apiBaseUrl}person/${id}/movie_credits?${this.options()}`

  personTvCredits = id =>
    `${this.apiBaseUrl}person/${id}/tv_credits?${this.options()}`

  personImages = id =>
    `${this.apiBaseUrl}person/${id}/images?${this.options()}&include_image_language=hu,eng,null`

  popularPersons = page =>
    `${this.apiBaseUrl}person/popular?${this.options()}${this.page(page)}`

  personSearch = (phrase, page) =>
    `${this.apiBaseUrl}search/person?${this.options()}&query=${phrase}${this.page(page)}`

  personTaggedImages = id =>
    `${this.apiBaseUrl}person/${id}/tagged_images?${this.options()}`

  // People Ends


  // Keywords Begins

  keywordDetails = id =>
  `${this.apiBaseUrl}keyword/${id}?${this.options()}`

  moviesByKeyword = (id, page) =>
  `${this.apiBaseUrl}keyword/${id}/movies?${this.options()}${this.page(page)}`

  keywordSearch = phrase  =>
    `${this.apiBaseUrl}search/keyword?${this.options()}&query=${phrase}`

  // Keywords Ends
}

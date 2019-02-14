import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ObservablesService} from './observables.service';

@Injectable()
export class ConstantsService {

  globalOption: boolean;
  adultOption: boolean;

  apiKey = 'api_key=8ada93d9b0cb48be3d73ac8e3ae93c13';
  apiBaseUrl = 'https://api.themoviedb.org/3/';
  imageUrl = 'https://image.tmdb.org/t/p/';
  backdropSize = 'w1280';

  constructor(
    private cookieService: CookieService,
    private observables: ObservablesService
  ) {
    this.globalOption = (this.cookieService.check('Movie-Finder-globalOption') === false ||
      this.cookieService.get('Movie-Finder-globalOption') === 'Global');

    this.adultOption = this.cookieService.check('Movie-Finder-adultOption');
  }

  adult = (value = false) => `&include_adult=${value}`;

  limit = () => 14

  changeGlobal = () => {
    this.globalOption = !this.globalOption;
    this.cookieService.set('Movie-Finder-globalOption', this.globalOption ? 'Global' : 'Local', this.limit());
    window.location.reload();
  };

  sortBy = (option = 'popularity.desc') => `&sort_by=${option}`;

  getSortByOptions = () => {
    if (this.globalOption === false) {
      return [
        {name: 'Népszerűség alapján csökkenő', value: 'popularity.desc'},
        {name: 'Népszerűség alapján növekvő', value: 'popularity.asc'},
        {name: 'Premier dátuma alapján csökkenő', value: 'release_date.desc'},
        {name: 'Premier dátuma alapján növekvő', value: 'release_date.asc'},
        {name: 'Eredeti cím alapján csökkenő', value: 'original_title.desc'},
        {name: 'Eredeti cím alapján növekvő', value: 'original_title.asc'},
        {name: 'Szavazatok alapján csökkenő', value: 'vote_average.desc'},
        {name: 'Szavazatok alapján növekvő', value: 'vote_average.asc'}
      ];
    } else {
      return [
        {name: 'Popularity (desc)', value: 'popularity.desc'},
        {name: 'Popularity (asc)', value: 'popularity.asc'},
        {name: 'Release Date (desc)', value: 'release_date.desc'},
        {name: 'Release Date (asc)', value: 'release_date.asc'},
        {name: 'Original_title (desc)', value: 'original_title.desc'},
        {name: 'Original_title (asc)', value: 'original_title.asc'},
        {name: 'Vote Average(desc)', value: 'vote_average.desc'},
        {name: 'Vote Average(asc)', value: 'vote_average.asc'}
      ];
    }

  };

  getAdultOption = () => this.adultOption;
  setAdultOption = () => {
    this.adultOption = !this.adultOption;
    if (this.adultOption) {
      this.cookieService.set('Movie-Finder-adultOption', 'Adult', this.limit());
    } else {
      this.cookieService.delete('Movie-Finder-adultOption');
    }
    window.location.reload();
  };

  language = () =>
    this.globalOption ? '' : '&language=hu';

  page = pageNumber =>
    `&page=${pageNumber}`;

  region = () =>
    this.globalOption ? '' : '&region=hu';

  year = () => `&year=${this.observables.movieYearOption.getValue()}`;

  tvYear = () => `&first_air_date_year=${this.observables.tvShowYearOption.getValue()}`;

  withGenres = () => {
    const withGenresOption = this.observables.withGenresOption.getValue();
    if (withGenresOption.length === 1 && withGenresOption[0] === 0) {
      return '';
    } else {
      return `&with_genres=${withGenresOption.slice(1).join(',')}`;
    }
  };

  withTvGenres = () => {
    const tvWithGenresOption = this.observables.tvWithGenresOption.getValue();
    if (tvWithGenresOption.length === 1 && tvWithGenresOption[0] === 0) {
      return '';
    } else {
      return `&with_genres=${tvWithGenresOption.slice(1).join(',')}`;
    }
  };

  options = () =>
    `${this.apiKey}${this.language()}${this.adult(this.getAdultOption())}`;

  // Movie Begins

  apiGenres = () =>
    `${this.apiBaseUrl}genre/movie/list?${this.options()}`;

  popularMovies = page =>
    `${this.apiBaseUrl}discover/movie?${this.options()}${
      this.page(page)}${this.year()}${this.sortBy(this.observables.sortMovieByOption.getValue())}${this.withGenres()}`;

  movieById = id =>
    `${this.apiBaseUrl}movie/${id}?${this.options()}`;

  topRatedMovies = page =>
    `${this.apiBaseUrl}movie/top_rated?${this.options()}${this.page(page)}`;

  movieByGenre = (genre, page) =>
    `${this.apiBaseUrl}genre/${genre}/movies?${this.options()}${this.page(page)}`;

  movieSearch = (phrase, page) =>
    `${this.apiBaseUrl}search/movie?${this.options()}&query=${phrase}${this.page(page)}`;

  recommendedMovies = id =>
    `${this.apiBaseUrl}movie/${id}/recommendations?${this.options()}`;

  similarMovies = id =>
    `${this.apiBaseUrl}movie/${id}/similar?${this.options()}`;

  nowPlaying = page =>
    `${this.apiBaseUrl}movie/now_playing?${this.options()}${this.page(page)}${this.region()}`;

  upcoming = page =>
    `${this.apiBaseUrl}movie/upcoming?${this.options()}${this.page(page)}${this.region()}`;

  movieImages = id =>
    `${this.apiBaseUrl}movie/${id}/images?${this.options()}&include_image_language=hu,eng,null`;

  movieVideos = id =>
    `${this.apiBaseUrl}movie/${id}/videos?${this.options()}`;

  movieCredits = id =>
    `${this.apiBaseUrl}movie/${id}/credits?${this.options()}`;

  movieReviews = id =>
    `${this.apiBaseUrl}movie/${id}/reviews?${this.options()}`;

  movieKeywords = id =>
    `${this.apiBaseUrl}movie/${id}/keywords?${this.options()}`;

  // Movie Ends

  // TV Show Begins

  apiTvGenres = () =>
    `${this.apiBaseUrl}genre/tv/list?${this.options()}`;

  tvShowSearch = (phrase, page) =>
    `${this.apiBaseUrl}search/tv?${this.options()}&query=${phrase}${this.page(page)}`;

  tvShowById = id =>
    `${this.apiBaseUrl}tv/${id}?${this.options()}`;

  recommendedTvShows = id =>
    `${this.apiBaseUrl}tv/${id}/recommendations?${this.options()}`;

  similarTvShows = id =>
    `${this.apiBaseUrl}tv/${id}/similar?${this.options()}`;

  popularTvShows = page =>
    `${this.apiBaseUrl}discover/tv?${this.options()}${
      this.page(page)}${this.tvYear()}${this.sortBy(this.observables.sortTvShowByOption.getValue())}${this.withTvGenres()}`;

  topRatedTvShows = page =>
    `${this.apiBaseUrl}tv/top_rated?${this.options()}${this.page(page)}`;

  tvShowByGenre = (genre, page) =>
    `${this.apiBaseUrl}discover/tv?&with_genres=${genre}&${this.options()}${this.page(page)}`;

  tvShowEpisodes = (id, season) =>
    `${this.apiBaseUrl}tv/${id}/season/${season}?${this.options()}`;

  tvImages = id =>
    `${this.apiBaseUrl}tv/${id}/images?${this.options()}&include_image_language=hu,eng,null`;

  tvShowVideos = id =>
    `${this.apiBaseUrl}tv/${id}/videos?${this.options()}`;

  tvShowSeasonVideos = (id, season) =>
    `${this.apiBaseUrl}tv/${id}/season/${season}/videos?${this.options()}`;

  tvShowCredits = id =>
    `${this.apiBaseUrl}tv/${id}/credits?${this.options()}`;

  tvShowReviews = id =>
    `${this.apiBaseUrl}tv/${id}/reviews?${this.options()}`;

  tvKeywords = id =>
    `${this.apiBaseUrl}tv/${id}/keywords?${this.options()}`;

  // TV Show Ends

  // People Begins

  personById = id =>
    `${this.apiBaseUrl}person/${id}?${this.options()}`;

  personMovieCredits = id =>
    `${this.apiBaseUrl}person/${id}/movie_credits?${this.options()}`;

  personTvCredits = id =>
    `${this.apiBaseUrl}person/${id}/tv_credits?${this.options()}`;

  personImages = id =>
    `${this.apiBaseUrl}person/${id}/images?${this.options()}&include_image_language=hu,eng,null`;

  popularPersons = page =>
    `${this.apiBaseUrl}person/popular?${this.options()}${this.page(page)}`;

  personSearch = (phrase, page) =>
    `${this.apiBaseUrl}search/person?${this.options()}&query=${phrase}${this.page(page)}`;

  personTaggedImages = id =>
    `${this.apiBaseUrl}person/${id}/tagged_images?${this.options()}`;

  // People Ends


  // Keywords Begins

  keywordDetails = id =>
    `${this.apiBaseUrl}keyword/${id}?${this.options()}`;

  moviesByKeyword = (id, page) =>
    `${this.apiBaseUrl}keyword/${id}/movies?${this.options()}${this.page(page)}`;

  keywordSearch = phrase =>
    `${this.apiBaseUrl}search/keyword?${this.options()}&query=${phrase}`;

  // Keywords Ends
}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ObservablesService } from './observables.service';

@Injectable()
export class ConstantsService {
  globalOption: boolean;
  adultOption: boolean;

  apiKey = 'api_key=8ada93d9b0cb48be3d73ac8e3ae93c13';
  apiBaseUrl = 'https://api.themoviedb.org/3/';
  imageUrl = 'https://image.tmdb.org/t/p/';
  backdropSize = 'w1280';
  popularity = 'popularity.';
  order = {
    desc: `${this.popularity}desc`,
  };
  globalOptionCookie = 'Movie-Finder-globalOption';
  adultOptionCookie = 'Movie-Finder-adultOption';

  constructor(
    private cookieService: CookieService,
    private observables: ObservablesService
  ) {
    this.globalOption =
      this.cookieService.check(this.globalOptionCookie) === false ||
      this.cookieService.get(this.globalOptionCookie) === 'Global';

    this.adultOption = this.cookieService.check(this.adultOptionCookie);
  }

  adult = (value = false): string => `&include_adult=${value}`;

  limit = (): number => 14;

  changeGlobal = (): void => {
    this.globalOption = !this.globalOption;
    this.cookieService.set(
      this.globalOptionCookie,
      this.globalOption ? 'Global' : 'Local',
      this.limit()
    );
    window.location.reload();
  };

  sortBy = (option = this.order.desc): string => `&sort_by=${option}`;

  getSortByOptions = (): { name: string; value: string }[] => {
    if (this.globalOption === false) {
      return [
        { name: 'Népszerűség alapján csökkenő', value: this.order.desc },
        { name: 'Népszerűség alapján növekvő', value: 'popularity.asc' },
        { name: 'Premier dátuma alapján csökkenő', value: 'release_date.desc' },
        { name: 'Premier dátuma alapján növekvő', value: 'release_date.asc' },
        { name: 'Eredeti cím alapján csökkenő', value: 'original_title.desc' },
        { name: 'Eredeti cím alapján növekvő', value: 'original_title.asc' },
        { name: 'Szavazatok alapján csökkenő', value: 'vote_average.desc' },
        { name: 'Szavazatok alapján növekvő', value: 'vote_average.asc' },
      ];
    } else {
      return [
        { name: 'Popularity (desc)', value: this.order.desc },
        { name: 'Popularity (asc)', value: 'popularity.asc' },
        { name: 'Release Date (desc)', value: 'release_date.desc' },
        { name: 'Release Date (asc)', value: 'release_date.asc' },
        { name: 'Original_title (desc)', value: 'original_title.desc' },
        { name: 'Original_title (asc)', value: 'original_title.asc' },
        { name: 'Vote Average(desc)', value: 'vote_average.desc' },
        { name: 'Vote Average(asc)', value: 'vote_average.asc' },
      ];
    }
  };

  getAdultOption = (): boolean => this.adultOption;
  setAdultOption = (): void => {
    this.adultOption = !this.adultOption;
    if (this.adultOption) {
      this.cookieService.set(this.adultOptionCookie, 'Adult', this.limit());
    } else {
      this.cookieService.delete(this.adultOptionCookie);
    }
    window.location.reload();
  };

  language = (): string => (this.globalOption ? '' : '&language=hu');

  page = (pageNumber: number): string => `&page=${pageNumber}`;

  region = (): string => (this.globalOption ? '' : '&region=hu');

  year = (): string => `&year=${this.observables.movieYearOption.getValue()}`;

  tvYear = (): string =>
    `&first_air_date_year=${this.observables.tvShowYearOption.getValue()}`;

  withGenres = (): string => {
    const withGenresOption = this.observables.withGenresOption.getValue();
    if (withGenresOption.length === 1 && withGenresOption[0] === 0) {
      return '';
    } else {
      return `&with_genres=${withGenresOption.slice(1).join(',')}`;
    }
  };

  withTvGenres = (): string => {
    const tvWithGenresOption = this.observables.tvWithGenresOption.getValue();
    if (tvWithGenresOption.length === 1 && tvWithGenresOption[0] === 0) {
      return '';
    } else {
      return `&with_genres=${tvWithGenresOption.slice(1).join(',')}`;
    }
  };

  options = (): string =>
    `${this.apiKey}${this.language()}${this.adult(this.getAdultOption())}`;

  // Movie Begins

  apiGenres = (): string =>
    `${this.apiBaseUrl}genre/movie/list?${this.options()}`;

  popularMovies = (page: number): string =>
    `${this.apiBaseUrl}discover/movie?${this.options()}${this.page(
      page
    )}${this.year()}${this.sortBy(
      this.observables.sortMovieByOption.getValue()
    )}${this.withGenres()}`;

  movieById = (id: number): string =>
    `${this.apiBaseUrl}movie/${id}?${this.options()}`;

  topRatedMovies = (page: number): string =>
    `${this.apiBaseUrl}movie/top_rated?${this.options()}${this.page(page)}`;

  movieByGenre = (genre: string, page: number): string =>
    `${this.apiBaseUrl}genre/${genre}/movies?${this.options()}${this.page(
      page
    )}`;

  movieSearch = (phrase: string, page: number): string =>
    `${
      this.apiBaseUrl
    }search/movie?${this.options()}&query=${phrase}${this.page(page)}`;

  recommendedMovies = (id: number): string =>
    `${this.apiBaseUrl}movie/${id}/recommendations?${this.options()}`;

  similarMovies = (id: number): string =>
    `${this.apiBaseUrl}movie/${id}/similar?${this.options()}`;

  nowPlaying = (page: number): string =>
    `${this.apiBaseUrl}movie/now_playing?${this.options()}${this.page(
      page
    )}${this.region()}`;

  upcoming = (page: number): string =>
    `${this.apiBaseUrl}movie/upcoming?${this.options()}${this.page(
      page
    )}${this.region()}`;

  movieImages = (id: number): string =>
    `${
      this.apiBaseUrl
    }movie/${id}/images?${this.options()}&include_image_language=hu,eng,null`;

  movieVideos = (id: number): string =>
    `${this.apiBaseUrl}movie/${id}/videos?${this.options()}`;

  movieCredits = (id: number): string =>
    `${this.apiBaseUrl}movie/${id}/credits?${this.options()}`;

  movieReviews = (id: number): string =>
    `${this.apiBaseUrl}movie/${id}/reviews?${this.options()}`;

  movieKeywords = (id: number): string =>
    `${this.apiBaseUrl}movie/${id}/keywords?${this.options()}`;

  movieCollections = (id: number): string =>
    `${this.apiBaseUrl}collection/${id}?${this.options()}`;

  // Movie Ends

  // TV Show Begins

  apiTvGenres = (): string =>
    `${this.apiBaseUrl}genre/tv/list?${this.options()}`;

  tvShowSearch = (phrase: string, page: number): string =>
    `${this.apiBaseUrl}search/tv?${this.options()}&query=${phrase}${this.page(
      page
    )}`;

  tvShowById = (id: number): string =>
    `${this.apiBaseUrl}tv/${id}?${this.options()}`;

  recommendedTvShows = (id: number): string =>
    `${this.apiBaseUrl}tv/${id}/recommendations?${this.options()}`;

  similarTvShows = (id: number): string =>
    `${this.apiBaseUrl}tv/${id}/similar?${this.options()}`;

  popularTvShows = (page: number): string =>
    `${this.apiBaseUrl}discover/tv?${this.options()}${this.page(
      page
    )}${this.tvYear()}${this.sortBy(
      this.observables.sortTvShowByOption.getValue()
    )}${this.withTvGenres()}`;

  topRatedTvShows = (page: number): string =>
    `${this.apiBaseUrl}tv/top_rated?${this.options()}${this.page(page)}`;

  tvShowByGenre = (genre: string, page: number): string =>
    `${
      this.apiBaseUrl
    }discover/tv?&with_genres=${genre}&${this.options()}${this.page(page)}`;

  tvShowEpisodes = (id: number, season: string): string =>
    `${this.apiBaseUrl}tv/${id}/season/${season}?${this.options()}`;

  tvImages = (id: number): string =>
    `${
      this.apiBaseUrl
    }tv/${id}/images?${this.options()}&include_image_language=hu,eng,null`;

  tvShowVideos = (id: number): string =>
    `${this.apiBaseUrl}tv/${id}/videos?${this.options()}`;

  tvShowSeasonVideos = (id: number, season: string): string =>
    `${this.apiBaseUrl}tv/${id}/season/${season}/videos?${this.options()}`;

  tvShowCredits = (id: number): string =>
    `${this.apiBaseUrl}tv/${id}/credits?${this.options()}`;

  tvShowReviews = (id: number): string =>
    `${this.apiBaseUrl}tv/${id}/reviews?${this.options()}`;

  tvKeywords = (id: number): string =>
    `${this.apiBaseUrl}tv/${id}/keywords?${this.options()}`;

  // TV Show Ends

  // People Begins

  personById = (id: number): string =>
    `${this.apiBaseUrl}person/${id}?${this.options()}`;

  personMovieCredits = (id: number): string =>
    `${this.apiBaseUrl}person/${id}/movie_credits?${this.options()}`;

  personTvCredits = (id: number): string =>
    `${this.apiBaseUrl}person/${id}/tv_credits?${this.options()}`;

  personImages = (id: number): string =>
    `${
      this.apiBaseUrl
    }person/${id}/images?${this.options()}&include_image_language=hu,eng,null`;

  popularPersons = (page: number): string =>
    `${this.apiBaseUrl}person/popular?${this.options()}${this.page(page)}`;

  personSearch = (phrase: string, page: number): string =>
    `${
      this.apiBaseUrl
    }search/person?${this.options()}&query=${phrase}${this.page(page)}`;

  personTaggedImages = (id: number): string =>
    `${this.apiBaseUrl}person/${id}/tagged_images?${this.options()}`;

  // People Ends

  // Keywords Begins

  keywordDetails = (id: number): string =>
    `${this.apiBaseUrl}keyword/${id}?${this.options()}`;

  moviesByKeyword = (id: number, page: number): string =>
    `${this.apiBaseUrl}keyword/${id}/movies?${this.options()}${this.page(
      page
    )}`;

  keywordSearch = (phrase: string): string =>
    `${this.apiBaseUrl}search/keyword?${this.options()}&query=${phrase}`;

  // Keywords Ends
}

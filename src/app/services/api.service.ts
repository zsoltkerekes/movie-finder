import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { retry } from 'rxjs/operators';
import { IGenres } from '../interfaces/genres.interface';
import { setSortBy } from '../helpers/sort.helper';
import { Observable } from 'rxjs/internal/Observable';

interface ApiResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json: () => any;
}

@Injectable()
export class ApiService {
  genres = { name: '', id: 0 };
  genresArray: Array<IGenres>;
  tvGenres = { name: '', id: 0 };
  tvGenresArray: Array<IGenres>;

  constructor(private http: Http, private constants: ConstantsService) {
    this.getAllPossibleGenres();
  }

  getContent = (url: string): Observable<ApiResponse> =>
    this.http.get(url).pipe(retry(3));
  getBackgroundUrl = (): string =>
    `${this.constants.imageUrl}${this.constants.backdropSize}`;
  getSortByOptions = (): { name: string; value: string }[] =>
    this.constants.getSortByOptions();
  getGlobal = (): boolean => this.constants.globalOption;
  changeGlobal = (): void => this.constants.changeGlobal();
  setAdult = (): void => this.constants.setAdultOption();
  getAdult = (): boolean => this.constants.getAdultOption();
  getGenresArray = (): IGenres[] => this.genresArray;
  getTvGenresArray = (): IGenres[] => this.tvGenresArray;

  // Movie Begins

  getAllPossibleGenres = (): void => {
    this.getContent(this.constants.apiGenres()).subscribe((response) => {
      response.json().genres.forEach((row) => {
        this.genres[row.id] = row.name;
      });
      this.genresArray = [...response.json().genres].sort(setSortBy('name'));
      this.getAllPossibleTvGenres();
    });
  };

  getGenreList = (array: Array<number> = []): string => {
    const output = [];
    array.forEach((row) => {
      output.push(this.genres[row.toString()]);
    });
    return output.join(', ');
  };

  getPopularMovies = (page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.popularMovies(page));

  getMovieById = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.movieById(id));

  getTopRatedMovies = (page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.topRatedMovies(page));

  getMovieByGenre = (genre: string, page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.movieByGenre(genre, page));

  getMovieSearch = (phrase: string, page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.movieSearch(phrase, page));

  getRecommendedMovies = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.recommendedMovies(id));

  getSimilarMovies = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.similarMovies(id));

  getNowPlaying = (page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.nowPlaying(page));

  getUpcoming = (page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.upcoming(page));

  getTrendingMovies = (page = 1, isWeek = false): Observable<ApiResponse> =>
    this.getContent(this.constants.trendingMovies(page, isWeek));

  getMovieImages = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.movieImages(id));

  getMovieVideos = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.movieVideos(id));

  getMovieCredits = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.movieCredits(id));

  getMovieReviews = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.movieReviews(id));

  getMovieKeywords = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.movieKeywords(id));

  getMovieCollections = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.movieCollections(id));

  // Movie Ends

  // TV Show Begins

  getAllPossibleTvGenres = (): void => {
    this.getContent(this.constants.apiTvGenres()).subscribe((response) => {
      response.json().genres.forEach((row) => {
        this.tvGenres[row.id] = row.name;
      });
      this.tvGenres = {
        ...this.genres,
        ...this.tvGenres,
      };
      const temp = [...this.genresArray, ...response.json().genres].sort(
        setSortBy('name')
      );
      const output = [];
      temp.forEach((value, index) => {
        if (index > 0 && temp[index].id !== temp[index - 1].id) {
          output.push(temp[index - 1]);
        }
      });
      this.tvGenresArray = output;
    });
  };

  getTvGenreList = (array: Array<number> = []): string => {
    const output = [];
    array.forEach((row) => {
      output.push(this.tvGenres[row.toString()]);
    });
    return output.join(', ');
  };

  getTvShowSearch = (phrase: string, page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowSearch(phrase, page));

  getTvShowById = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowById(id));

  getRecommendedTvShows = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.recommendedTvShows(id));

  getSimilarTvShows = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.similarTvShows(id));

  getPopularTvShows = (page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.popularTvShows(page));

  getTopRatedTvSows = (page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.topRatedTvShows(page));

  getTvShowByGenre = (genre: string, page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowByGenre(genre, page));

  getTvShowEpisodes = (id: number, season: string): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowEpisodes(id, season));

  getTrendingTvShows = (page = 1, isWeek = false): Observable<ApiResponse> =>
    this.getContent(this.constants.trendingTvShows(page, isWeek));

  getTvImages = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.tvImages(id));

  getTvShowsVideos = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowVideos(id));

  getTvShowsSeasonVideos = (
    id: number,
    season: string
  ): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowSeasonVideos(id, season));

  getTvShowCredits = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowCredits(id));

  getTvShowReviews = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.tvShowReviews(id));

  getTvKeywords = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.tvKeywords(id));

  // TV Show Ends

  // People Begins

  getPersonById = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.personById(id));

  getPersonMovieCredits = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.personMovieCredits(id));

  getPersonTvCredits = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.personTvCredits(id));

  getPersonImages = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.personImages(id));

  getPopularPersons = (page: number): Observable<ApiResponse> =>
    this.getContent(this.constants.popularPersons(page));

  getPersonSearch = (phrase: string, page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.personSearch(phrase, page));

  getPersonTaggedImages = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.personTaggedImages(id));

  getTrendingPersons = (page = 1, isWeek = false): Observable<ApiResponse> =>
    this.getContent(this.constants.trendingPersons(page, isWeek));

  getCombinedPersonCredits = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.combinedPersonCredits(id));

  // People Ends

  // Keywords Begins

  getKeywordDetails = (id: number): Observable<ApiResponse> =>
    this.getContent(this.constants.keywordDetails(id));

  getMoviesByKeyword = (id: number, page = 1): Observable<ApiResponse> =>
    this.getContent(this.constants.moviesByKeyword(id, page));

  getKeywordSearch = (phrase: string): Observable<ApiResponse> =>
    this.getContent(this.constants.keywordSearch(phrase));

  // Keywords Ends
}

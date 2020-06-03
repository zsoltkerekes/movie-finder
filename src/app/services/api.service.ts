import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { retry } from 'rxjs/operators';
import { IGenres } from '../interfaces/genres.interface';

const sortByName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
};

@Injectable()
export class ApiService {
  genres = { name: String, id: Number };
  genresArray: Array<IGenres>;

  tvGenres = { name: String, id: Number };
  tvGenresArray: Array<IGenres>;

  constructor(private http: Http, private constants: ConstantsService) {
    this.getAllPossibleGenres();
  }

  getContent = (url) => this.http.get(url).pipe(retry(3));
  getBackgroundUrl = () =>
    `${this.constants.imageUrl}${this.constants.backdropSize}`;
  getSortByOptions = () => this.constants.getSortByOptions();
  getGlobal = () => this.constants.globalOption;
  changeGlobal = () => this.constants.changeGlobal();
  setAdult = () => this.constants.setAdultOption();
  getAdult = () => this.constants.getAdultOption();
  getGenresArray = () => this.genresArray;
  getTvGenresArray = () => this.tvGenresArray;

  // Movie Begins

  getAllPossibleGenres = () => {
    this.getContent(this.constants.apiGenres()).subscribe((response) => {
      response.json().genres.forEach((row) => {
        this.genres[row.id] = row.name;
      });
      this.genresArray = response.json().genres.sort(sortByName);
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

  getPopularMovies = (page = 1) =>
    this.getContent(this.constants.popularMovies(page));

  getMovieById = (id) => this.getContent(this.constants.movieById(id));

  getTopRatedMovies = (page = 1) =>
    this.getContent(this.constants.topRatedMovies(page));

  getMovieByGenre = (genre, page = 1) =>
    this.getContent(this.constants.movieByGenre(genre, page));

  getMovieSearch = (phrase, page = 1) =>
    this.getContent(this.constants.movieSearch(phrase, page));

  getRecommendedMovies = (id) =>
    this.getContent(this.constants.recommendedMovies(id));

  getSimilarMovies = (id) => this.getContent(this.constants.similarMovies(id));

  getNowPlaying = (page = 1) =>
    this.getContent(this.constants.nowPlaying(page));

  getUpcoming = (page = 1) => this.getContent(this.constants.upcoming(page));

  getMovieImages = (id) => this.getContent(this.constants.movieImages(id));

  getMovieVideos = (id) => this.getContent(this.constants.movieVideos(id));

  getMovieCredits = (id) => this.getContent(this.constants.movieCredits(id));

  getMovieReviews = (id) => this.getContent(this.constants.movieReviews(id));

  getMovieKeywords = (id) => this.getContent(this.constants.movieKeywords(id));

  getMovieCollections = (id) =>
    this.getContent(this.constants.movieCollections(id));

  // Movie Ends

  // TV Show Begins

  getAllPossibleTvGenres = () => {
    this.getContent(this.constants.apiTvGenres()).subscribe((response) => {
      response.json().genres.forEach((row) => {
        this.tvGenres[row.id] = row.name;
      });
      this.tvGenres = {
        ...this.genres,
        ...this.tvGenres,
      };
      const temp = [...this.genresArray, ...response.json().genres].sort(
        sortByName
      );
      const output = [];
      temp.forEach((value, index) => {
        if (index > 0) {
          if (temp[index].id !== temp[index - 1].id) {
            output.push(temp[index - 1]);
          }
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

  getTvShowSearch = (phrase, page = 1) =>
    this.getContent(this.constants.tvShowSearch(phrase, page));

  getTvShowById = (id) => this.getContent(this.constants.tvShowById(id));

  getRecommendedTvShows = (id) =>
    this.getContent(this.constants.recommendedTvShows(id));

  getSimilarTvShows = (id) =>
    this.getContent(this.constants.similarTvShows(id));

  getPopularTvShows = (page = 1) =>
    this.getContent(this.constants.popularTvShows(page));

  getTopRatedTvSows = (page = 1) =>
    this.getContent(this.constants.topRatedTvShows(page));

  getTvShowByGenre = (genre, page = 1) =>
    this.getContent(this.constants.tvShowByGenre(genre, page));

  getTvShowEpisodes = (id, season) =>
    this.getContent(this.constants.tvShowEpisodes(id, season));

  getTvImages = (id) => this.getContent(this.constants.tvImages(id));

  getTvShowsVideos = (id) => this.getContent(this.constants.tvShowVideos(id));

  getTvShowsSeasonVideos = (id, season) =>
    this.getContent(this.constants.tvShowSeasonVideos(id, season));

  getTvShowCredits = (id) => this.getContent(this.constants.tvShowCredits(id));

  getTvShowReviews = (id) => this.getContent(this.constants.tvShowReviews(id));

  getTvKeywords = (id) => this.getContent(this.constants.tvKeywords(id));

  // TV Show Ends

  // People Begins

  getPersonById = (id) => this.getContent(this.constants.personById(id));

  getPersonMovieCredits = (id) =>
    this.getContent(this.constants.personMovieCredits(id));

  getPersonTvCredits = (id) =>
    this.getContent(this.constants.personTvCredits(id));

  getPersonImages = (id) => this.getContent(this.constants.personImages(id));

  getPopularPersons = (page) =>
    this.getContent(this.constants.popularPersons(page));

  getPersonSearch = (phrase, page = 1) =>
    this.getContent(this.constants.personSearch(phrase, page));

  getPersonTaggedImages = (id) =>
    this.getContent(this.constants.personTaggedImages(id));

  // People Ends

  // Keywords Begins

  getKeywordDetails = (id) =>
    this.getContent(this.constants.keywordDetails(id));

  getMoviesByKeyword = (id, page = 1) =>
    this.getContent(this.constants.moviesByKeyword(id, page));

  getKeywordSearch = (phrase, page = 1) =>
    this.getContent(this.constants.keywordSearch(phrase));

  // Keywords Ends
}

import { Router } from '@angular/router';
import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  genres = { name: String, id: Number };
  genresArray: Array<{ id: Number, name: String }>;

  constructor(
    private http: Http,
    private constants: ConstantsService,
    private router: Router
  ) {
    this.getAllPossibleGenres();
  }

  getContent = url => this.http.get(url);

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

  changeGlobal () {
    this.constants.changeGlobal();
    this.getAllPossibleGenres();
    this.router.navigate(['/']);
  }

  getPopularMovies = (page = 1) => this.getContent(this.constants.popularMovies(page));

  getMovieById = id => this.getContent(this.constants.movieById(id));

  getBackgroundUrl = () => `${this.constants.imageUrl}${this.constants.backdropSize}`;

  getTopRatedMovies = (page = 1) => this.getContent(this.constants.topRatedMovies(page));

  getMovieByGenre = (genre, page = 1) => this.getContent(this.constants.movieByGenre(genre, page));

  getMovieSearch = (phrase, page = 1) => this.getContent(this.constants.movieSearch(phrase, page));

  getRecommendedMovies = id => this.getContent(this.constants.recommendedMovies(id));

  getNowPlaying = (page = 1) => this.getContent(this.constants.nowPlaying(page));

  getUpcoming = (page = 1) => this.getContent(this.constants.upcoming(page));

}

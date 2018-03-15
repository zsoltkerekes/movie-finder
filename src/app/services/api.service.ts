import { ConstantsService } from './constants.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  genres = { name: String, id: Number };
  genresArray: Array<{ id: Number, name: String }>;

  constructor(
    private http: Http,
    private constants: ConstantsService
  ) {
    this.getContent(this.constants.apiGenres()).subscribe(response => {
      response.json().genres.forEach(row => { this.genres[row.id] = row.name; });
      this.genresArray = response.json().genres.sort((a, b) => {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        return 0;
      });
    });
  }

  getContent = url => this.http.get(url);

  getGenreList = (array: Array<Number>): String => {
    const output = [];
    array.forEach(row => {
      output.push(this.genres[row.toString()]);
    });
    return output.join(', ');
  }

  getPopularMovies = () => this.getContent(this.constants.popularMovies());

  getMovieById = id => this.getContent(this.constants.movieById(id));

  getBackgroundUrl = () => `${this.constants.imageUrl}${this.constants.backdropSize}`;

  getTopRatedMovies = () => this.getContent(this.constants.topRatedMovies());

  getMovieByGenre = genre => this.getContent(this.constants.movieByGenre(genre));

  getMovieSearch = phrase => this.getContent(this.constants.movieSearch(phrase));

  getRecommendedMovies = id => this.getContent(this.constants.recommendedMovies(id));

}

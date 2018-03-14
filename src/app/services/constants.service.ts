export class ConstantsService {

  // config link https://api.themoviedb.org/3/configuration?api_key=8ada93d9b0cb48be3d73ac8e3ae93c13

  apiKey = 'api_key=8ada93d9b0cb48be3d73ac8e3ae93c13';
  apiBaseUrl = 'https://api.themoviedb.org/3/';
  sortBy = 'sort_by=popularity.desc';
  adult = 'include_adult=true';
  language = 'language=hu-HU';
  imageUrl = 'https://image.tmdb.org/t/p/';
  backdropSize = 'w1280';

  apiGenres = () =>
    `${this.apiBaseUrl}genre/movie/list?${this.apiKey}&${this.language}`

  popularMovies = () =>
    `${this.apiBaseUrl}discover/movie?${this.sortBy}&${this.apiKey}&${this.language}&${this.adult}`

  movieById = id =>
    `${this.apiBaseUrl}movie/${id}?${this.apiKey}&${this.language}&${this.adult}`

  topRatedMovies = () =>
    `${this.apiBaseUrl}movie/top_rated?${this.apiKey}&${this.language}&${this.adult}&${this.sortBy}`

  movieByGenre = genre =>
  `${this.apiBaseUrl}genre/${genre}/movies?${this.apiKey}&${this.language}&${this.adult}&${this.sortBy}`

  movieSearch = phrase =>
   `${this.apiBaseUrl}search/movie?${this.apiKey}&${this.language}&query=${phrase}&${this.adult}&${this.sortBy}`
}

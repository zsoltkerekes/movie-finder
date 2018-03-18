export class ConstantsService {

  // config link https://api.themoviedb.org/3/configuration?api_key=8ada93d9b0cb48be3d73ac8e3ae93c13

  apiKey = 'api_key=8ada93d9b0cb48be3d73ac8e3ae93c13';

  apiBaseUrl = 'https://api.themoviedb.org/3/';

  imageUrl = 'https://image.tmdb.org/t/p/';
  backdropSize = 'w1280';

  sortBy = 'sort_by=popularity.desc';
  adult = 'include_adult=true';
  language = 'language=hu-HU';
  page = pageNumber => `page=${pageNumber}`;

  options = () =>
  `${this.apiKey}&${this.sortBy}&${this.language}&${this.adult}`


  apiGenres = () =>
    `${this.apiBaseUrl}genre/movie/list?${this.options()}`

  popularMovies = () =>
    `${this.apiBaseUrl}discover/movie?${this.options()}`

  movieById = id =>
    `${this.apiBaseUrl}movie/${id}?${this.options()}`

  topRatedMovies = () =>
    `${this.apiBaseUrl}movie/top_rated?${this.options()}`

  movieByGenre = genre =>
  `${this.apiBaseUrl}genre/${genre}/movies?${this.options()}`

  movieSearch = (phrase, page) =>
   `${this.apiBaseUrl}search/movie?${this.options()}&query=${phrase}&${this.page(page)}`

   recommendedMovies = id =>
   `${this.apiBaseUrl}movie/${id}/recommendations?${this.options()}`
}

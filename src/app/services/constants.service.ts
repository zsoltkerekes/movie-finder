export class ConstantsService {

  // config link https://api.themoviedb.org/3/configuration?api_key=8ada93d9b0cb48be3d73ac8e3ae93c13

  apiKey = 'api_key=8ada93d9b0cb48be3d73ac8e3ae93c13';

  apiBaseUrl = 'https://api.themoviedb.org/3/';

  imageUrl = 'https://image.tmdb.org/t/p/';
  backdropSize = 'w1280';

  sortBy = 'sort_by=popularity.desc';
  adult = 'include_adult=false';
  language = 'language=hu-HU';
  page = pageNumber => `page=${pageNumber}`;

  options = () =>
    `${this.apiKey}&${this.sortBy}&${this.language}&${this.adult}`

  apiGenres = () =>
    `${this.apiBaseUrl}genre/movie/list?${this.options()}`

  popularMovies = page =>
    `${this.apiBaseUrl}discover/movie?${this.options()}&${this.page(page)}`

  movieById = id =>
    `${this.apiBaseUrl}movie/${id}?${this.options()}`

  topRatedMovies = page =>
    `${this.apiBaseUrl}movie/top_rated?${this.options()}&${this.page(page)}`

  movieByGenre = (genre, page) =>
    `${this.apiBaseUrl}genre/${genre}/movies?${this.options()}&${this.page(page)}`

  movieSearch = (phrase, page) =>
    `${this.apiBaseUrl}search/movie?${this.options()}&query=${phrase}&${this.page(page)}`

  recommendedMovies = id =>
    `${this.apiBaseUrl}movie/${id}/recommendations?${this.options()}`

  nowPlaying = page =>
    `${this.apiBaseUrl}movie/now_playing?${this.options()}&${this.page(page)}&region=hu`

  upcoming = page =>
    `${this.apiBaseUrl}movie/upcoming?${this.options()}&${this.page(page)}`
}

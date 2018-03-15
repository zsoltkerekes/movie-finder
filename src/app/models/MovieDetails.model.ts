export interface MovieDetails {
  title: String;
  original_title: String;
  original_language: String;
  status: String;
  release_date: String;
  vote_average: Number;
  popularity: Number;
  runtime: Number;
  adult: Boolean;
  budget: Number;
  genres: [{ id: Number, name: String }];
  homepage: String;
  imdb_id: String;
  backdrop_path: String;
  poster_path: String;
  overview: String;
  id: Number;
}

export const movieDetailsData = {
  title: undefined,
  original_title: undefined,
  original_language: undefined,
  status: undefined,
  release_date: undefined,
  vote_average: undefined,
  popularity: undefined,
  runtime: undefined,
  adult: undefined,
  budget: undefined,
  genres: undefined,
  homepage: undefined,
  imdb_id: undefined,
  backdrop_path: undefined,
  poster_path: undefined,
  overview: undefined,
  id: undefined
};

export interface MovieDetails {
  title: String;
  name: String;
  original_title: String;
  original_name: String;
  original_language: String;
  status: String;
  release_date: String;
  first_air_date: String;
  vote_average: Number;
  popularity: Number;
  runtime: Number;
  episode_run_time: Number;
  adult: Boolean;
  budget: Number;
  revenue: Number;
  created_by: Array<{name: String}>;
  genres: [{ id: Number, name: String }];
  homepage: String;
  imdb_id: String;
  backdrop_path: String;
  poster_path: String;
  overview: String;
  id: Number;
  seasons: Array<any>;
}

export const movieDetailsData = {
  title: undefined,
  name: undefined,
  original_title: undefined,
  original_name: undefined,
  original_language: undefined,
  status: undefined,
  release_date: undefined,
  first_air_date: undefined,
  vote_average: undefined,
  popularity: undefined,
  runtime: undefined,
  episode_run_time: undefined,
  adult: undefined,
  budget: undefined,
  revenue: undefined,
  created_by: undefined,
  genres: undefined,
  homepage: undefined,
  imdb_id: undefined,
  backdrop_path: undefined,
  poster_path: undefined,
  overview: undefined,
  id: undefined,
  seasons: [{}]
};

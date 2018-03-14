export interface MovieDetails {
  title: String;
  original_title: String | null;
  original_language: String | null;
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
}

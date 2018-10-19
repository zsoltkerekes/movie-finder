export interface MovieDetails {
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  original_language: string;
  status: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  popularity: number;
  runtime: number;
  episode_run_time: number;
  adult: Boolean;
  budget: number;
  revenue: number;
  created_by: Array<{ name: string }>;
  genres: [{ id: number, name: string }];
  homepage: string;
  imdb_id: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  id: number;
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

import { IGenres } from './genres.interface';

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
  adult: boolean;
  budget: number;
  revenue: number;
  created_by: Array<{ name: string }>;
  genres: Array<IGenres>;
  homepage: string;
  imdb_id: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  id: number;
  seasons: Array<any>;
  tagline: string;
  last_air_date: string;
  next_episode_to_air: {
    air_date: string;
  };
  number_of_seasons: number;
  number_of_episodes: number;
  belongs_to_collection: {
    id: number;
  };
}

export const movieDetailsData = {
  title: null,
  name: null,
  original_title: null,
  original_name: null,
  original_language: null,
  status: null,
  release_date: null,
  first_air_date: null,
  vote_average: null,
  popularity: null,
  runtime: null,
  episode_run_time: null,
  adult: null,
  budget: null,
  revenue: null,
  created_by: null,
  genres: null,
  homepage: null,
  imdb_id: null,
  backdrop_path: null,
  poster_path: null,
  overview: null,
  id: null,
  seasons: [{}],
  tagline: null,
  last_air_date: null,
  next_episode_to_air: {
    air_date: null,
  },
  number_of_seasons: null,
  number_of_episodes: null,
  belongs_to_collection: {
    id: null,
  },
};

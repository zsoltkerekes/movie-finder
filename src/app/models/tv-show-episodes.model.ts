export interface TvShowEpisodes {
  air_date: string;
  episodes: Array<{
    episode_number: number,
    air_date: string;
    name: string,
    overview: string,
    season_number: number,
    still_path: string,
    vote_average: number
  }>;
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
}

export const tvShowEpisodesData = {
  air_date: null,
  episodes: [{
    episode_number: null,
    air_date: null,
    name: null,
    overview: null,
    season_number: null,
    still_path: null,
    vote_average: null
  }],
  name: null,
  overview: null,
  id: null,
  poster_path: null,
  season_number: null
};

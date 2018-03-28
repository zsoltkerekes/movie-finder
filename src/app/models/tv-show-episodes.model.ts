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
  air_date: undefined,
  episodes: [{
    episode_number: undefined,
    air_date: undefined,
    name: undefined,
    overview: undefined,
    season_number: undefined,
    still_path: undefined,
    vote_average: undefined
  }],
  name: undefined,
  overview: undefined,
  id: undefined,
  poster_path: undefined,
  season_number: undefined
};

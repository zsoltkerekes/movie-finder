interface ICreditCast {
  id: number;
  character: string;
  original_title: string;
  overview: string;
  vote_count: number;
  video: boolean;
  media_type: 'movie' | 'tv';
  release_date: Date;
  vote_average: number;
  title: string;
  popularity: number;
  original_language: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  adult: boolean;
  poster_path: string;
  credit_id: string;
}

interface ICreditCrew {
  id: number;
  department: string;
  original_language: string;
  original_title: string;
  job: string;
  overview: string;
  vote_count: number;
  video: false;
  media_type: 'movie' | 'tv';
  poster_path: string;
  backdrop_path: string;
  title: string;
  popularity: Array<number>;
  vote_average: number;
  adult: false;
  release_date: Date;
  credit_id: string;
}

export interface ICombinedCredits {
  cast: ICreditCast[];
  crew: ICreditCrew[];
}

export const CombinedCreditsInitData = {
  cast: [],
  crew: [],
};

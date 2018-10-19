export interface People {
  birthday: string;
  deathday: string;
  id: number;
  name: string;
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  adult: boolean;
  imdb_id: string;
  homepage: string;
  profile_path: string;
}

export const peopleData = {
  birthday: undefined,
  deathday: undefined,
  id: undefined,
  name: undefined,
  gender: undefined,
  biography: undefined,
  popularity: undefined,
  place_of_birth: undefined,
  adult: undefined,
  imdb_id: undefined,
  homepage: undefined,
  profile_path: undefined
};

export interface PeopleMovieCredits {
  id: number;
  cast: Array<{
    character: string,
    credit_id: string,
    release_date: string,
    adult: number,
    vote_average: number,
    title: string,
    genre_ids: number[],
    original_language: string,
    original_title: string,
    popularity: number,
    id: number,
    backdrop_path: string,
    overview: string,
    poster_path: string,
    first_air_date: string,
    name: string,
    original_name: string,
    order: number,
    profile_path: string
  }>;
  crew: Array<{
    id: number,
    department: string,
    original_language: string,
    original_title: string,
    job: string,
    overview: string,
    release_date: string,
    vote_average: number,
    title: string,
    popularity: number,
    genre_ids: number[],
    backdrop_path: string,
    adult: boolean,
    poster_path: string,
    first_air_date: string,
    name: string,
    original_name: string,
    order: number,
    profile_path: string
  }>;
}

export const peopleMovieCreditsData = {
  id: undefined,
  cast: [{
    character: undefined,
    credit_id: undefined,
    release_date: undefined,
    adult: undefined,
    vote_average: undefined,
    title: undefined,
    genre_ids: undefined,
    original_language: undefined,
    original_title: undefined,
    popularity: undefined,
    id: undefined,
    backdrop_path: undefined,
    overview: undefined,
    poster_path: undefined,
    first_air_date: undefined,
    name: undefined,
    original_name: undefined,
    order: 100000000,
    profile_path: undefined
  }],
  crew: [{
    id: undefined,
    department: undefined,
    original_language: undefined,
    original_title: undefined,
    job: undefined,
    overview: undefined,
    release_date: undefined,
    vote_average: undefined,
    title: undefined,
    popularity: undefined,
    genre_ids: undefined,
    backdrop_path: undefined,
    adult: undefined,
    poster_path: undefined,
    first_air_date: undefined,
    name: undefined,
    original_name: undefined,
    order: 100000000,
    profile_path: undefined
  }]
};

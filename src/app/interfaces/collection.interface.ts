export interface Collection {
  id: number;
  name: string;
  overview: string;
  parts: {
    genre_ids: number[];
    id: number;
    original_title: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
  }[];
}

export const collectionInitData = {
  id: null,
  name: null,
  overview: null,
  parts: [
    {
      genre_ids: [],
      id: null,
      original_title: null,
      title: null,
      overview: null,
      release_date: null,
      vote_average: null,
    },
  ],
};

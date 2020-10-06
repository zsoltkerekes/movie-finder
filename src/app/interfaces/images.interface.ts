export interface Images {
  file_path: string;
  vote_average: number;
  media: {
    name?: string;
    title?: string;
    id?: number;
    original_name?: string;
    original_title?: string;
    release_date?: string;
    first_air_date?: string;
    overview?: string;
    vote_average?: number;
  };
  media_type: string;
}

export const imagesData = [
  {
    file_path: undefined,
    vote_average: 0,
    media: {
      name: undefined,
      title: undefined,
      original_name: undefined,
      original_title: undefined,
      overview: undefined,
    },
    media_type: undefined,
  },
];

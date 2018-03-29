export interface Videos {
  results: Array<{
    key: string,
    name: string,
    iso_639_1: string
  }>;
}

export const videosData = {
  results: [
    {
      key: undefined,
      name: undefined,
      iso_639_1: undefined
    }
  ]
};

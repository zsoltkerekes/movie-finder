export interface ListItem {
  title: string;
  name: string;
  genre_ids: number[];
  id: number;
  poster_path: string;
  profile_path: string;
  known_for: Array<{
    title: string
  }>;
}

export const listItemInitData = {
  title: undefined,
  name: undefined,
  genre_ids: undefined,
  id: 0,
  poster_path: undefined,
  profile_path: undefined,
  known_for: undefined
};

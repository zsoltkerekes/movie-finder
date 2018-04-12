export interface ListItem {
  title: String;
  name: String;
  genre_ids: Number[];
  id: Number;
  poster_path: String;
  profile_path: String;
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

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
  title: 'Adatok lekérése a szerverről...',
  name: null,
  genre_ids: null,
  id: 0,
  poster_path: null,
  profile_path: null,
  known_for: null
};

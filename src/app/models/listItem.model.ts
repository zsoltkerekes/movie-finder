export interface ListItem {
  title: String;
  genre_ids: Number[];
  id: Number;
  poster_path: String;
}

export const listItemInitData = {
  title: 'Adatok lekérése a szerverről...',
  genre_ids: null,
  id: 0,
  poster_path: null
};

export interface ListItem {
  title: String;
  name: String;
  genre_ids: Number[];
  id: Number;
  poster_path: String;
}

export const listItemInitData = {
  title: 'Adatok lekérése a szerverről...',
  name: null,
  genre_ids: null,
  id: 0,
  poster_path: null
};

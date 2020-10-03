import { IText } from '../interfaces/language.interface';

type IProvider = () => IText;

export const navProvider: IProvider = (): IText => ({
  Adult: {
    en: 'Adult',
    hu: 'Felnőtt',
  },
  Global: {
    en: 'Global',
    hu: 'Globális',
  },
  'Movie Finder': {
    en: 'Movie Finder',
    hu: 'Film Kereső',
  },
  Search: {
    en: 'Search',
    hu: 'Keresés',
  },
  Discover: {
    en: 'Discover',
    hu: 'Felfedezés',
  },
  'Top Rated': {
    en: 'Top Rated',
    hu: 'Legjobbak',
  },
  'Now playing': {
    en: 'Now playing',
    hu: 'Most a Mozikban',
  },
  Upcoming: {
    en: 'Upcoming',
    hu: 'Hamarosan a Mozikban',
  },
  Trending: {
    en: 'Trending',
    hu: 'Feltörekvők',
  },
});

export const textProvider: IProvider = (): IText => ({
  Adult: {
    en: 'Adult',
    hu: 'Felnőtt',
  },
  results: {
    en: 'results',
    hu: 'találat',
  },
  pages: {
    en: 'pages',
    hu: 'oldalon',
  },
  Year: {
    en: 'Year',
    hu: 'Év',
  },
  Order: {
    en: 'Order',
    hu: 'Sorrend',
  },
  Search: {
    en: 'Search',
    hu: 'Keresés',
  },
  Cast: {
    en: 'Cast',
    hu: 'Szereplő',
  },
  'act as': {
    en: 'act as',
    hu: 'szerepe',
  },
  Crew: {
    en: 'Crew',
    hu: 'Stáb',
  },
  Genres: {
    en: 'Genres',
    hu: 'Műfajok',
  },
  'Original language': {
    en: 'Original language',
    hu: 'Eredeti nyelv',
  },
  Runtime: {
    en: 'Runtime',
    hu: 'Hossz',
  },
  minutes: {
    en: 'minutes',
    hu: 'perc',
  },
  Status: {
    en: 'Status',
    hu: 'Státusz',
  },
  'Release date': {
    en: 'Release date',
    hu: 'Megjelenés dátuma',
  },
  Budget: {
    en: 'Budget',
    hu: 'Elkészítési költség',
  },
  Revenue: {
    en: 'Revenue',
    hu: 'Bevétel',
  },
  Vote: {
    en: 'Vote',
    hu: 'Nézők szavazata alapján',
  },
  Popularity: {
    en: 'Popularity',
    hu: 'Relatív népszerűség',
  },
  Homepage: {
    en: 'Homepage',
    hu: 'Weboldal',
  },
  'by title': {
    en: 'by title',
    hu: 'magyar cím alapján',
  },
  'by original title': {
    en: 'by original title',
    hu: 'eredeti cím alapján',
  },
  'by name': {
    en: 'by name',
    hu: 'név alapján',
  },
  'by votes': {
    en: 'by votes',
    hu: 'szavazatok alapján',
  },
  'by popularity': {
    en: 'by popularity',
    hu: 'népszerűség alapján',
  },
  'by release date': {
    en: 'by release date',
    hu: 'Megjelenés dátuma alapján',
  },
  Images: {
    en: 'Images',
    hu: 'Képek',
  },
  image: {
    en: 'image',
    hu: 'kép',
  },
  'Recommended videos': {
    en: 'Recommended videos',
    hu: 'Kapcsolódó Videók',
  },
  video: {
    en: 'video',
    hu: 'videó',
  },
  Movies: {
    en: 'Movies',
    hu: 'Filmek',
  },
  'No results': {
    en: 'No results',
    hu: 'Nincs találat',
  },
  Keyword: {
    en: 'Keyword',
    hu: 'Kulcsszó',
  },
  Keywords: {
    en: 'Keywords',
    hu: 'Kulcsszavak',
  },
  'Now playing': {
    en: 'Now playing',
    hu: 'Most a Mozikban',
  },
  Upcoming: {
    en: 'Upcoming',
    hu: 'Hamarosan a Mozikban',
  },
  'Choose a Movie genre': {
    en: 'Choose a Movie genre',
    hu: 'Válassz film műfajt',
  },
  'Recommended movies': {
    en: 'Recommended movies',
    hu: 'Ajánlott filmek',
  },
  'Similar movies': {
    en: 'Similar movies',
    hu: 'Hasonló filmek',
  },
  'Top rated movies': {
    en: 'Top rated movies',
    hu: 'Legjobb filmek',
  },
  Man: {
    en: 'Man',
    hu: 'Férfi',
  },
  Woman: {
    en: 'Woman',
    hu: 'Nő',
  },
  Birthday: {
    en: 'Birthday',
    hu: 'Születésnap',
  },
  Deathday: {
    en: 'Deathday',
    hu: 'Meghalt',
  },
  'Tagged Images from acts': {
    en: 'Tagged Images from acts',
    hu: 'Képek szerepléseiről',
  },
  'Tv shows': {
    en: 'Tv shows',
    hu: 'Sorozatok',
  },
  Persons: {
    en: 'Persons',
    hu: 'Emberek',
  },
  chars: {
    en: 'chars',
    hu: 'karakter',
  },
  'Recommended Tv Shows': {
    en: 'Recommended Tv Shows',
    hu: 'Ajánlott sorozatok',
  },
  'Similar Tv shows': {
    en: 'Similar Tv shows',
    hu: 'Hasonló sorozatok',
  },
  'Top rated tv shows': {
    en: 'Top rated tv shows',
    hu: 'Legjobb sorozatok',
  },
  'Choose a tv series genre': {
    en: 'Choose a tv series genre',
    hu: 'Válassz sorozat műfajt',
  },
  Loading: {
    en: 'Loading..',
    hu: 'Töltés..',
  },
  'Seasons/episodes': {
    en: 'Seasons/episodes',
    hu: 'Évadok/részek:',
  },
  'Last air date': {
    en: 'Last air date',
    hu: 'Utolsó epizód dátuma',
  },
  'Next air date': {
    en: 'Next air date',
    hu: 'Következő epizód dátuma',
  },
  'Created by': {
    en: 'Created by',
    hu: 'Készítette',
  },
  episode: {
    en: 'episode',
    hu: 'epizód',
  },
  Episodes: {
    en: 'Episodes',
    hu: 'Epizódok',
  },
  Previous: {
    en: 'Previous',
    hu: 'Előző',
  },
  Next: {
    en: 'Next',
    hu: 'Következő',
  },
  'Season Name': {
    en: 'Season Name',
    hu: 'Évad cím',
  },
  'Season Air Date': {
    en: 'Season Air Date',
    hu: 'Évad megjelenésének dátuma',
  },
  'Season episode count': {
    en: 'Season episode count',
    hu: 'Évad epizódok száma',
  },
  'Episodes overview': {
    en: 'Episodes overview',
    hu: 'Epizódok tartalma',
  },
  'Season overview': {
    en: 'Season overview',
    hu: 'Évad tartalma',
  },
  'Back to tv show details': {
    en: 'Back to tv show details',
    hu: 'Vissza a sorozat leírásához',
  },
  season: {
    en: 'season',
    hu: 'évad',
  },
  Trending: {
    en: 'Trending',
    hu: 'Feltörekvők',
  },
});

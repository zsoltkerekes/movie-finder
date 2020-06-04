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
    hu: 'Szereplők',
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
    hu: 'Premier dátuma',
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
    en: 'Similar movies:',
    hu: 'Hasonló filmek',
  },
  'Top rated movies': {
    en: 'Similar movies:',
    hu: 'Hasonló filmek',
  },
});

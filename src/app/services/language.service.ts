import { Injectable } from '@angular/core';

interface IText {
  [key: string]: {
    en: string;
    hu: string;
  };
}

type IGet = (key: string, global: boolean) => string;
type IProvider = () => IText;

interface ILanguageService {
  na: string;
  textProvider: IProvider;
  navProvider: IProvider;
  getText: IGet;
  getNav: IGet;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements ILanguageService {
  na = 'N/A';

  textProvider = (): IText => ({
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
  });

  navProvider = (): IText => ({
    Adult: {
      en: 'Adult',
      hu: 'Felnőtt',
    },
    Global: {
      en: 'Global',
      hu: 'Magyar',
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

  getText: IGet = (key, global) => {
    return this.textProvider()[key][global ? 'en' : 'hu'] || this.na;
  };

  getNav: IGet = (key, global) => {
    return this.navProvider()[key][global ? 'en' : 'hu'] || this.na;
  };
}

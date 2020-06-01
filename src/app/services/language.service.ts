import { Injectable } from '@angular/core';
import { textProvider, navProvider } from './../providers/language.provider';

type IGet = (key: string, global: boolean) => string;

interface ILanguageService {
  na: string;
  getText: IGet;
  getNav: IGet;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements ILanguageService {
  na = 'N/A';

  getText: IGet = (key, global) => {
    return textProvider()[key][global ? 'en' : 'hu'] || this.na;
  };

  getNav: IGet = (key, global) => {
    return navProvider()[key][global ? 'en' : 'hu'] || this.na;
  };
}

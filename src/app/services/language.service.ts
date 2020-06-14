import { Injectable } from '@angular/core';
import { textProvider, navProvider } from './../providers/language.provider';
import { ILanguageService, IGet } from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements ILanguageService {
  na = 'n/a';

  getText: IGet = (key, global) => {
    return (
      (textProvider()[key] && textProvider()[key][global ? 'en' : 'hu']) ||
      this.na
    );
  };

  getNav: IGet = (key, global) => {
    return (
      (navProvider()[key] && navProvider()[key][global ? 'en' : 'hu']) ||
      this.na
    );
  };
}

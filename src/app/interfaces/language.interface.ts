export type IGet = (key: string, global: boolean) => string;

export interface ILanguageService {
  na: string;
  getText: IGet;
  getNav: IGet;
}

export interface IText {
  [key: string]: {
    en: string;
    hu: string;
  };
}

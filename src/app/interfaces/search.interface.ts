import { ListItem } from './listItem.interface';

export interface IKeywordsSearchResults {
  results: [
    {
      name: string;
      id: number;
    }
  ];
}

export interface IMovieSearchResults {
  results: Array<ListItem>;
  page: number;
  total_results: number;
  total_pages: number;
}

export interface IPersonSearchResults {
  results: Array<ListItem>;
  page: number;
  total_results: number;
  total_pages: number;
}

export interface ITvShowSearchResults {
  results: Array<ListItem>;
  page: number;
  total_results: number;
  total_pages: number;
}

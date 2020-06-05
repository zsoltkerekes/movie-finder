import { Component, Input, OnChanges, OnInit } from '@angular/core';

import {
  PeopleMovieCredits,
  peopleMovieCreditsData,
} from '../../../interfaces/person.interface';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';

export interface ISort {
  [key: string]: string | number;
}
export type TOrder = 'asc' | 'desc';

@Component({
  selector: 'mf-person-movie-credits',
  templateUrl: './person-movie-credits.component.html',
  styleUrls: ['./person-movie-credits.component.scss'],
})
export class PersonMovieCreditsComponent implements OnInit, OnChanges {
  @Input() id: number;
  movieCredits: PeopleMovieCredits;
  listGenres = this.api.getTvGenreList;

  placeholder: string;
  searchCast: string;
  searchCrew: string;
  moviesText: string;
  castText: string;
  orderText: string;
  byVotesText: string;
  byPopularityText: string;
  byTitleText: string;
  byReleaseDateText: string;
  crewText: string;

  private setSortBy(key: string, by: TOrder = 'desc'): any {
    return by === 'desc'
      ? function (a: ISort, b: ISort): number {
          if (a[key] < b[key]) {
            return 1;
          }
          if (a[key] > b[key]) {
            return -1;
          }
          return 0;
        }
      : function (a: ISort, b: ISort): number {
          if (a[key] > b[key]) {
            return 1;
          }
          if (a[key] < b[key]) {
            return -1;
          }
          return 0;
        };
  }

  constructor(private api: ApiService, public language: LanguageService) {}

  ngOnInit() {
    this.placeholder = this.language.getText('Search', this.api.getGlobal());
    this.moviesText = this.language.getText('Movies', this.api.getGlobal());
    this.castText = this.language.getText('Cast', this.api.getGlobal());
    this.orderText = this.language.getText('Order', this.api.getGlobal());
    this.byVotesText = this.language.getText('by votes', this.api.getGlobal());
    this.byPopularityText = this.language.getText(
      'by popularity',
      this.api.getGlobal()
    );
    this.byTitleText = this.language.getText('by title', this.api.getGlobal());
    this.byReleaseDateText = this.language.getText(
      'by release date',
      this.api.getGlobal()
    );
    this.crewText = this.language.getText('Crew', this.api.getGlobal());
  }

  ngOnChanges() {
    this.movieCredits = peopleMovieCreditsData;
    this.searchCast = '';
    this.searchCrew = '';
    if (this.id) {
      this.api.getPersonMovieCredits(this.id).subscribe((response) => {
        const output = response.json();
        output.cast = [...output.cast].sort(this.setSortBy('vote_average'));
        output.crew = [...output.crew].sort(this.setSortBy('vote_average'));
        this.movieCredits = output;
      });
    }
  }

  onChange = (event: any) => {
    switch (event.value) {
      case 'vote_average':
        this.movieCredits.cast = [...this.movieCredits.cast].sort(
          this.setSortBy('vote_average')
        );
        break;
      case 'popularity':
        this.movieCredits.cast = [...this.movieCredits.cast].sort(
          this.setSortBy('popularity')
        );
        break;
      case 'title':
        this.movieCredits.cast = [...this.movieCredits.cast].sort(
          this.setSortBy('title', 'asc')
        );
        break;
      case 'release_date':
        this.movieCredits.cast = [...this.movieCredits.cast].sort(
          this.setSortBy('release_date')
        );
        break;
    }
  };
}

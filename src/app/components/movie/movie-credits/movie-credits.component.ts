import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';
import {
  PeopleMovieCredits,
  peopleMovieCreditsData,
} from '../../../interfaces/person.interface';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.scss'],
})
export class MovieCreditsComponent implements OnChanges, OnInit {
  @Input() id: number;
  movieCredits: PeopleMovieCredits;

  placeholder: string;
  searchCast: string;
  searchCrew: string;
  innerWidth: number;

  cast: string;
  actAs: string;
  crew: string;

  constructor(private api: ApiService, public language: LanguageService) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.placeholder = this.language.getText('Search', this.api.getGlobal());
    this.cast = this.language.getText('Cast', this.api.getGlobal());
    this.actAs = this.language.getText('act as', this.api.getGlobal());
    this.crew = this.language.getText('Crew', this.api.getGlobal());
  }

  ngOnChanges() {
    this.movieCredits = peopleMovieCreditsData;
    this.searchCast = '';
    this.searchCrew = '';
    if (this.id) {
      this.api.getMovieCredits(this.id).subscribe((response) => {
        const output = response.json();
        output.cast = [...output.cast].sort(setSortBy('order', 'asc'));
        output.crew = [...output.crew].sort(setSortBy('job', 'asc'));
        this.movieCredits = output;
      });
    }
  }
}

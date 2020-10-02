import { ApiService } from '../../../services/api.service';
import {
  PeopleMovieCredits,
  peopleMovieCreditsData,
} from '../../../interfaces/person.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { setSortBy } from '../../../helpers/sort.helper';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-person-tv-credits',
  templateUrl: './person-tv-credits.component.html',
  styleUrls: ['./person-tv-credits.component.scss'],
})
export class PersonTvCreditsComponent implements OnInit, OnChanges {
  @Input() id: number;
  tvCredits: PeopleMovieCredits;
  listGenres = this.api.getTvGenreList;

  placeholder: string;
  searchCast: string;
  searchCrew: string;
  crewText: string;
  tvShowsText: string;
  castText: string;

  constructor(private api: ApiService, public language: LanguageService) {}

  ngOnInit(): void {
    this.placeholder = this.language.getText('Search', this.api.getGlobal());
    this.crewText = this.language.getText('Crew', this.api.getGlobal());
    this.tvShowsText = this.language.getText('Tv shows', this.api.getGlobal());
    this.castText = this.language.getText('Cast', this.api.getGlobal());
  }

  ngOnChanges(): void {
    this.tvCredits = peopleMovieCreditsData;
    this.searchCast = '';
    this.searchCrew = '';
    if (this.id) {
      this.api.getPersonTvCredits(this.id).subscribe((response) => {
        const output = { cast: [], crew: [], ...response.json() };
        output.cast = [...output.cast].sort(setSortBy('vote_average'));
        output.crew = [...output.crew].sort(setSortBy('vote_average'));
        this.tvCredits = output;
      });
    }
  }
}

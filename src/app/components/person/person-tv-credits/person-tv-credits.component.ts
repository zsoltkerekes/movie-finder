import {ApiService} from '../../../services/api.service';
import {PeopleMovieCredits, peopleMovieCreditsData} from '../../../models/person.model';
import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'mf-person-tv-credits',
  templateUrl: './person-tv-credits.component.html',
  styleUrls: ['./person-tv-credits.component.scss']
})
export class PersonTvCreditsComponent implements OnChanges {

  @Input() id: number;
  tvCredits: PeopleMovieCredits;
  getGlobal = this.api.getGlobal;
  placeholder = this.api.getGlobal() ? 'Search..' : 'Keresés..';
  searchCast: string;
  searchCrew: string;
  listGenres = this.api.getTvGenreList;

  constructor(private api: ApiService) {
  }

  ngOnChanges() {
    this.tvCredits = peopleMovieCreditsData;
    this.searchCast = '';
    this.searchCrew = '';
    if (this.id) {
      this.api.getPersonTvCredits(this.id)
        .subscribe(response => {
          const output = response.json();
          output.cast = output.cast.sort((a, b) => {
            if (a.vote_average < b.vote_average) {
              return 1;
            }
            if (a.vote_average > b.vote_average) {
              return -1;
            }
            return 0;
          });
          output.crew = output.crew.sort((a, b) => {
            if (a.vote_average < b.vote_average) {
              return 1;
            }
            if (a.vote_average > b.vote_average) {
              return -1;
            }
            return 0;
          });
          this.tvCredits = output;
        });
    }
  }

}
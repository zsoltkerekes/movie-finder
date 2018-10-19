import {Component, Input, OnChanges} from '@angular/core';

import {PeopleMovieCredits, peopleMovieCreditsData} from '../../models/person.model';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'mf-person-movie-credits',
  templateUrl: './person-movie-credits.component.html',
  styleUrls: ['./person-movie-credits.component.scss']
})
export class PersonMovieCreditsComponent implements OnChanges {

  @Input('id') id;
  movieCredits: PeopleMovieCredits;
  getGlobal = this.api.getGlobal;
  placeholder = this.api.getGlobal() ? 'Search..' : 'Keresés..';
  searchCast: string;
  searchCrew: string;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnChanges() {
    this.movieCredits = peopleMovieCreditsData;
    this.searchCast = '';
    this.searchCrew = '';
    if (this.id) {
      this.api.getPersonMovieCredits(this.id)
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
          this.movieCredits = output;
        });
    }
  }

  onChange = event => {
    switch (event.value) {

      case 'vote_average':
        this.movieCredits.cast = this.movieCredits.cast.sort((a, b) => {
          if (a.vote_average < b.vote_average) {
            return 1;
          }
          if (a.vote_average > b.vote_average) {
            return -1;
          }
          return 0;
        });
        break;

      case 'popularity':
        this.movieCredits.cast = this.movieCredits.cast.sort((a, b) => {
          if (a.popularity < b.popularity) {
            return 1;
          }
          if (a.popularity > b.popularity) {
            return -1;
          }
          return 0;
        });
        break;

      case 'title':
        this.movieCredits.cast = this.movieCredits.cast.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        break;

      case 'release_date':
        this.movieCredits.cast = this.movieCredits.cast.sort((a, b) => {
          if (a.release_date > b.release_date) {
            return -1;
          }
          if (a.release_date < b.release_date) {
            return 1;
          }
          return 0;
        });
        break;

    }
  };

}

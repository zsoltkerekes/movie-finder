import { Component, Input, OnChanges } from '@angular/core';

import { PeopleMovieCredits, peopleMovieCreditsData } from './../../models/person.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-person-movie-credits',
  templateUrl: './person-movie-credits.component.html',
  styleUrls: ['./person-movie-credits.component.scss']
})
export class PersonMovieCreditsComponent implements OnChanges {

  @Input('id') id;
  movieCredits: PeopleMovieCredits;
  getGlobal = this.api.getGlobal;

  constructor(
    private api: ApiService
  ) { }

  ngOnChanges() {
    this.movieCredits = peopleMovieCreditsData;
    if (this.id) {
      this.api.getPersonMovieCredits(this.id)
        .subscribe(response => {
          const output = response.json();
          output.cast = output.cast.sort((a, b) => {
            if (a.vote_average < b.vote_average) { return 1; }
            if (a.vote_average > b.vote_average) { return -1; }
            return 0;
          });
          output.crew = output.crew.sort((a, b) => {
            if (a.vote_average < b.vote_average) { return 1; }
            if (a.vote_average > b.vote_average) { return -1; }
            return 0;
          });
          this.movieCredits = output;
        });
    }
  }

}

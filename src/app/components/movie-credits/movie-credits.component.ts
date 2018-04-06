import { Component, Input, OnChanges } from '@angular/core';

import { PeopleMovieCredits, peopleMovieCreditsData } from './../../models/person.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.scss']
})
export class MovieCreditsComponent implements OnChanges {

  @Input('id') id;
  movieCredits: PeopleMovieCredits;

  constructor(
    private api: ApiService
  ) { }

  ngOnChanges() {
    this.movieCredits = peopleMovieCreditsData;
    if (this.id) {
      this.api.getMovieCredits(this.id)
        .subscribe(response => {
          const output = response.json();
          output.cast = output.cast.sort((a, b) => {
            if (a.order < b.order) { return -1; }
            if (a.order > b.order) { return 1; }
            return 0;
          });
          output.crew = output.crew.sort((a, b) => {
            if (a.job < b.job) { return -1; }
            if (a.job > b.job) { return 1; }
            return 0;
          });
          this.movieCredits = output;
        });
    }
  }

}

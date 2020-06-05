import { Component, Input, OnChanges } from '@angular/core';

import {
  PeopleMovieCredits,
  peopleMovieCreditsData,
} from '../../../interfaces/person.interface';
import { ApiService } from '../../../services/api.service';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-tv-show-credits',
  templateUrl: './tv-show-credits.component.html',
  styleUrls: ['./tv-show-credits.component.scss'],
})
export class TvShowCreditsComponent implements OnChanges {
  @Input() id: number;
  movieCredits: PeopleMovieCredits;
  getGlobal = this.api.getGlobal;
  placeholder = this.api.getGlobal() ? 'Search..' : 'Keresés..';
  searchCast: string;
  searchCrew: string;
  innerWidth: number;
  isLoading: boolean;

  constructor(private api: ApiService) {
    this.innerWidth = window.innerWidth;
  }

  ngOnChanges() {
    this.movieCredits = peopleMovieCreditsData;
    this.searchCast = '';
    this.searchCrew = '';
    this.isLoading = true;
    if (this.id) {
      this.api.getTvShowCredits(this.id).subscribe((response) => {
        const output = response.json();
        output.cast = output.cast.sort(setSortBy('order'));
        output.crew = output.crew.sort(setSortBy('job'));
        this.isLoading = false;
        this.movieCredits = output;
      });
    }
  }
}

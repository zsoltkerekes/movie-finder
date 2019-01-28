import {Component, DoCheck} from '@angular/core';

import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'mf-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements DoCheck {

  genres: { id: Number, name: String }[];
  getGlobal = this.api.getGlobal;

  constructor(private api: ApiService) {
  }

  ngDoCheck() {
    this.genres = this.api.genresArray ? [...this.api.genresArray] : [{id: 1, name: 'Loading...'}];
  }
}

import { Component, DoCheck } from '@angular/core';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements DoCheck {

  genres: Array<{ id: Number, name: String }> = [{ id: 1, name: 'Töltés...' }];
  getGlobal = this.api.getGlobal;

  constructor(
    private api: ApiService
  ) { }

  ngDoCheck() {
    this.genres = this.api.genresArray ? [...this.api.genresArray] : null;
  }




}

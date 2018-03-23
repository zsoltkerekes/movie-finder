import { Component, DoCheck } from '@angular/core';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-tv-recommended',
  templateUrl: './tv-recommended.component.html',
  styleUrls: ['./tv-recommended.component.scss']
})
export class TvRecommendedComponent implements DoCheck {

  tvGenres: Array<{ id: Number, name: String }> = [{ id: 1, name: 'Töltés...' }];

  constructor(
    private api: ApiService
  ) { }

  ngDoCheck() {
    this.tvGenres = this.api.tvGenresArray ? [...this.api.tvGenresArray] : null;
  }


}
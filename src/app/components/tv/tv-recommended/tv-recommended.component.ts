import { Component, DoCheck, ViewChild } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { IGenres } from '../../../interfaces/genres.interface';

@Component({
  selector: 'mf-tv-recommended',
  templateUrl: './tv-recommended.component.html',
  styleUrls: ['./tv-recommended.component.scss'],
})
export class TvRecommendedComponent implements DoCheck {
  @ViewChild('pic', { static: false }) pic;

  tvGenres: IGenres[];
  getGlobal = this.api.getGlobal;

  constructor(private api: ApiService) {}

  ngDoCheck() {
    this.tvGenres = this.api.tvGenresArray
      ? [...this.api.tvGenresArray]
      : [{ id: 1, name: 'Töltés...' }];
  }
}

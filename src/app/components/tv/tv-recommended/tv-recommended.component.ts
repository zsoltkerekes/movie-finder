import { Component, DoCheck, ViewChild, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { IGenres } from '../../../interfaces/genres.interface';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-tv-recommended',
  templateUrl: './tv-recommended.component.html',
  styleUrls: ['./tv-recommended.component.scss'],
})
export class TvRecommendedComponent implements OnInit, DoCheck {
  @ViewChild('pic', { static: false }) pic;

  tvGenres: IGenres[];
  chooseText: string;
  loading: string;

  constructor(private api: ApiService, private language: LanguageService) {}

  ngOnInit() {
    this.chooseText = this.language.getText(
      'Choose a tv series genre',
      this.api.getGlobal()
    );
    this.loading = this.language.getText('Loading', this.api.getGlobal());
  }

  ngDoCheck() {
    this.tvGenres = this.api.tvGenresArray
      ? [...this.api.tvGenresArray]
      : [{ id: 1, name: this.loading }];
  }
}

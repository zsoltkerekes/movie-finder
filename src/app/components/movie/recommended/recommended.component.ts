import { Component, DoCheck, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { IGenres } from '../../../interfaces/genres.interface';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedComponent implements OnInit, DoCheck {
  genres: IGenres[];
  chooseMovieGenre: string;
  loading: string;

  constructor(private api: ApiService, private language: LanguageService) {}

  ngOnInit() {
    this.chooseMovieGenre = this.language.getText(
      'Choose a Movie genre',
      this.api.getGlobal()
    );
    this.loading = this.language.getText('Loading', this.api.getGlobal());
  }

  ngDoCheck() {
    this.genres = this.api.genresArray
      ? [...this.api.genresArray]
      : [{ id: 1, name: this.loading }];
  }
}

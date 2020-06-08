import { ApiService } from '../../../services/api.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-discover-options',
  templateUrl: './discover-options.component.html',
  styleUrls: ['./discover-options.component.scss'],
})
export class DiscoverOptionsComponent implements OnInit, DoCheck {
  sortByOptions: Array<{ name: string; value: string }>;
  movieSelected: string;
  movieYear: number;
  movieGenres: Array<any>;
  selectedMovieGenres: number[];
  placeholder: string;
  placeholderOrder: string;

  constructor(
    private api: ApiService,
    private observables: ObservablesService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.movieYear = this.observables.movieYearOption.getValue();
    this.movieSelected = this.observables.sortMovieByOption.getValue();
    this.selectedMovieGenres = this.observables.withGenresOption
      .getValue()
      .map((str: any) => parseInt(str, 10));
    this.sortByOptions = this.api.getSortByOptions();
    this.movieGenres = this.api.getGenresArray();
    this.placeholder = this.language.getText('Year', this.api.getGlobal());
    this.placeholderOrder = this.language.getText(
      'Order',
      this.api.getGlobal()
    );
  }

  ngDoCheck() {
    this.movieGenres = this.api.getGenresArray()
      ? [...this.api.getGenresArray()]
      : null;
  }

  setMovieSortByOption = (event) =>
    this.observables.sortMovieByOption.next(event.value);

  setMovieYearOption = (event) => {
    const thisYear: number = new Date().getFullYear();
    const range = 300;
    if (
      isNaN(event.target.value) ||
      event.target.value > thisYear + range ||
      event.target.value < thisYear - range
    ) {
      this.movieYear = thisYear;
      return this.observables.movieYearOption.next(thisYear);
    }
    return this.observables.movieYearOption.next(event.target.value);
  };

  setMovieGenre = (id, event) => {
    if (event.checked) {
      this.selectedMovieGenres.push(id);
    } else if (this.selectedMovieGenres.length > 1) {
      this.selectedMovieGenres.splice(
        this.selectedMovieGenres.findIndex(
          (previouslySelected) => previouslySelected === id
        ),
        1
      );
    }
    this.observables.withGenresOption.next(this.selectedMovieGenres);
  };

  getCheckedStatus = (id) =>
    this.selectedMovieGenres.findIndex(
      (previouslySelected) => previouslySelected === id
    ) !== -1
      ? 'checked'
      : null;
}

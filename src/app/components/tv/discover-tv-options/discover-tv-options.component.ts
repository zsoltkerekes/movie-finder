import { ApiService } from '../../../services/api.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-discover-tv-options',
  templateUrl: './discover-tv-options.component.html',
  styleUrls: ['./discover-tv-options.component.scss'],
})
export class DiscoverTvOptionsComponent implements OnInit, DoCheck {
  sortByOptions: Array<{ name: string; value: string }>;
  tvShowSelected: string;
  tvShowYear: number;
  tvShowGenres: Array<any>;
  selectedTvShowGenres: number[];
  placeholder: string;
  placeholderOrder: string;

  constructor(
    private api: ApiService,
    private observables: ObservablesService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.tvShowYear = this.observables.tvShowYearOption.getValue();
    this.tvShowYear = this.observables.tvShowYearOption.getValue();
    this.sortByOptions = this.api.getSortByOptions();
    this.tvShowSelected = this.observables.sortTvShowByOption.getValue();
    this.tvShowGenres = this.api.getTvGenresArray();
    this.selectedTvShowGenres = this.observables.tvWithGenresOption
      .getValue()
      .map((str: any) => parseInt(str, 10));
    this.placeholder = this.language.getText('Year', this.api.getGlobal());
    this.placeholderOrder = this.language.getText(
      'Order',
      this.api.getGlobal()
    );
  }

  ngDoCheck() {
    this.tvShowGenres = this.api.getTvGenresArray()
      ? [...this.api.getTvGenresArray()]
      : null;
  }

  setTvShowSortByOption = (event) =>
    this.observables.sortTvShowByOption.next(event.value);

  setTvShowYearOption = (event) => {
    const thisYear: number = new Date().getFullYear();
    const range = 300;
    if (
      isNaN(event.target.value) ||
      event.target.value > thisYear + range ||
      event.target.value < thisYear - range
    ) {
      this.tvShowYear = thisYear;
      return this.observables.tvShowYearOption.next(thisYear);
    }
    return this.observables.tvShowYearOption.next(event.target.value);
  };

  setTvShowGenre = (id, event) => {
    if (event.checked) {
      this.selectedTvShowGenres.push(id);
    } else if (this.selectedTvShowGenres.length > 1) {
      this.selectedTvShowGenres.splice(
        this.selectedTvShowGenres.findIndex(
          (previouslySelected) => previouslySelected === id
        ),
        1
      );
    }
    this.observables.tvWithGenresOption.next(this.selectedTvShowGenres);
  };

  getTvCheckedStatus = (id) =>
    this.selectedTvShowGenres.findIndex(
      (previouslySelected) => previouslySelected === id
    ) !== -1
      ? 'checked'
      : null;
}

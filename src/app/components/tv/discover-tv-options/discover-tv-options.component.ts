import { ApiService } from '../../../services/api.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { IGenres } from '../../../interfaces/genres.interface';

interface EventWithValue {
  value?: string;
  target?: {
    value: number;
  };
  checked?: boolean;
}
@Component({
  selector: 'mf-discover-tv-options',
  templateUrl: './discover-tv-options.component.html',
  styleUrls: ['./discover-tv-options.component.scss'],
})
export class DiscoverTvOptionsComponent implements OnInit, DoCheck {
  sortByOptions: Array<{ name: string; value: string }>;
  tvShowSelected: string;
  tvShowYear: number;
  tvShowGenres: Array<IGenres>;
  selectedTvShowGenres: number[];
  placeholder: string;
  placeholderOrder: string;

  constructor(
    private api: ApiService,
    private observables: ObservablesService,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.tvShowYear = this.observables.tvShowYearOption.getValue();
    this.sortByOptions = this.api.getSortByOptions();
    this.tvShowSelected = this.observables.sortTvShowByOption.getValue();
    this.tvShowGenres = this.api.getTvGenresArray();
    this.selectedTvShowGenres = this.observables.tvWithGenresOption
      .getValue()
      .map((str: number) => parseInt(str.toString(), 10));
    this.placeholder = this.language.getText('Year', this.api.getGlobal());
    this.placeholderOrder = this.language.getText(
      'Order',
      this.api.getGlobal()
    );
  }

  ngDoCheck(): void {
    this.tvShowGenres = this.api.getTvGenresArray()
      ? [...this.api.getTvGenresArray()]
      : null;
  }

  setTvShowSortByOption = (event: EventWithValue): void =>
    this.observables.sortTvShowByOption.next(event.value);

  setTvShowYearOption = (event: EventWithValue): void => {
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

  setTvShowGenre = (id: number, event: EventWithValue): void => {
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

  getTvCheckedStatus = (id: number): string | null =>
    this.selectedTvShowGenres.findIndex(
      (previouslySelected) => previouslySelected === id
    ) !== -1
      ? 'checked'
      : null;
}

import { ConstantsService } from './../../services/constants.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';

@Component({
  selector: 'mf-discover-tv-options',
  templateUrl: './discover-tv-options.component.html',
  styleUrls: ['./discover-tv-options.component.scss']
})
export class DiscoverTvOptionsComponent implements OnInit, DoCheck {

  sortByOptions: Array<{ name: string, value: string }>;
  selected: String;
  year: number;
  tvShowGenres: Array<any>;
  selectedTvShowGenres: number[];
  placeholder: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.year = this.api.getYearOption();
    this.sortByOptions = this.api.getSortByOptions();
    this.selected = this.api.getSortByOption();
    this.tvShowGenres = this.api.tvGenresArray;
    this.selectedTvShowGenres = this.api.getTvWithGenresOption();
    this.placeholder = this.api.getGlobal() ? 'Year' : 'Év';
  }

  ngDoCheck() {
    this.tvShowGenres = this.api.tvGenresArray ? [...this.api.tvGenresArray] : null;
  }

  setSortByOption = event => this.api.setSortByOption(event.value);
  setYearOption = event => this.api.setYearOption(event.target.value);

  setTvShowGenre = (id, event) => {
    if (event.checked) {
      this.selectedTvShowGenres.push(id);
    } else if (this.selectedTvShowGenres.length > 1) {
      this.selectedTvShowGenres.splice(this.selectedTvShowGenres.findIndex(previouslySelected => previouslySelected === id), 1);
    }
    this.api.setTvWithGenresOption(this.selectedTvShowGenres);
  }

  getTvCheckedStatus = id => {
    const result = this.selectedTvShowGenres.findIndex(previouslySelected => previouslySelected === id) !== -1 ? 'checked' : null;
    return result;
  }


}

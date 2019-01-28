import {ApiService} from '../../../services/api.service';
import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'mf-discover-tv-options',
  templateUrl: './discover-tv-options.component.html',
  styleUrls: ['./discover-tv-options.component.scss']
})
export class DiscoverTvOptionsComponent implements OnInit, DoCheck {

  sortByOptions: Array<{ name: string, value: string }>;
  tvShowSelected: string;
  tvShowYear: number;
  tvShowGenres: Array<any>;
  selectedTvShowGenres: number[];
  placeholder: string;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.tvShowYear = this.api.getTvShowYearOption();
    this.sortByOptions = this.api.getSortByOptions();
    this.tvShowSelected = this.api.getTvShowSortByOption();
    this.tvShowGenres = this.api.tvGenresArray;
    this.selectedTvShowGenres = this.api.getTvWithGenresOption();
    this.placeholder = this.api.getGlobal() ? 'Year' : 'Év';
    this.tvShowYear = this.tvShowYear || new Date().getFullYear();
  }

  ngDoCheck() {
    this.tvShowGenres = this.api.tvGenresArray ? [...this.api.tvGenresArray] : null;
  }

  setTvShowSortByOption = event => this.api.setTvShowSortByOption(event.value);
  setTvShowYearOption = event => this.api.setTvShowYearOption(event.target.value);

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

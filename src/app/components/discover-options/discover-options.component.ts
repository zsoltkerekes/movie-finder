import { ConstantsService } from './../../services/constants.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mf-discover-options',
  templateUrl: './discover-options.component.html',
  styleUrls: ['./discover-options.component.scss']
})
export class DiscoverOptionsComponent implements OnInit, DoCheck {

  sortByOptions: Array<{ name: string, value: string }>;
  selected: String;
  year: number;
  movieGenres: Array<any>;
  selectedMovieGenres: number[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.year = this.api.getYearOption();
    this.sortByOptions = this.api.getSortByOptions();
    this.selected = this.api.getSortByOption();
    this.movieGenres = this.api.genresArray;
    this.selectedMovieGenres = this.api.getWithGenresOption();
  }

  ngDoCheck() {
    this.movieGenres = this.api.genresArray ? [...this.api.genresArray] : null;
  }

  setSortByOption = event => this.api.setSortByOption(event.value);
  setYearOption = event => this.api.setYearOption(event.target.value);

  setMovieGenre = (id, event) => {
    if (event.checked) {
      this.selectedMovieGenres.push(id);
    } else if (this.selectedMovieGenres.length > 1) {
      this.selectedMovieGenres.splice(this.selectedMovieGenres.findIndex(previouslySelected => previouslySelected === id), 1);
    }
    this.api.setWithGenresOption(this.selectedMovieGenres);
  }

  getCheckedStatus = id => {
    const result = this.selectedMovieGenres.findIndex(previouslySelected => previouslySelected === id) !== -1 ? 'checked' : null;
    return result;
  }


}

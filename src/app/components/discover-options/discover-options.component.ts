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
  movieSelected: String;
  movieYear: number;
  movieGenres: Array<any>;
  selectedMovieGenres: number[];
  placeholder: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.movieYear = this.api.getMovieYearOption();
    this.sortByOptions = this.api.getSortByOptions();
    this.movieSelected = this.api.getMovieSortByOption();
    this.movieGenres = this.api.genresArray;
    this.selectedMovieGenres = this.api.getWithGenresOption();
    this.placeholder = this.api.getGlobal() ? 'Year' : 'Év';
  }

  ngDoCheck() {
    this.movieGenres = this.api.genresArray ? [...this.api.genresArray] : null;
  }

  setMovieSortByOption = event => this.api.setMovieSortByOption(event.value);
  setMovieYearOption = event => this.api.setMovieYearOption(event.target.value);

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

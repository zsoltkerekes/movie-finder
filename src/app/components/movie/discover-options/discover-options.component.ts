import {ApiService} from '../../../services/api.service';
import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'mf-discover-options',
  templateUrl: './discover-options.component.html',
  styleUrls: ['./discover-options.component.scss']
})
export class DiscoverOptionsComponent implements OnInit, DoCheck {

  sortByOptions: Array<{ name: string, value: string }>;
  movieSelected: string;
  movieYear: number;
  movieGenres: Array<any>;
  selectedMovieGenres: number[];
  placeholder: string;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.movieYear = this.api.getMovieYearOption();
    this.sortByOptions = this.api.getSortByOptions();
    this.movieSelected = this.api.getMovieSortByOption();
    this.movieGenres = this.api.genresArray;
    this.selectedMovieGenres = this.api.getWithGenresOption();
    this.placeholder = this.api.getGlobal() ? 'Year' : 'Év';
    this.movieYear = this.movieYear || new Date().getFullYear();
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

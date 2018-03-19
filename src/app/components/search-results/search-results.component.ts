import { ApiService } from './../../services/api.service';
import { ListItem, listItemInitData } from './../../models/listItem.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mf-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  phrase: String;
  page: Number;

  searchResults: {
    results: Array<ListItem>,
    page: Number,
    total_results: Number,
    total_pages: Number
  };

  listGenres = this.api.getGenreList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }


  ngOnInit() {
    if (this.activatedRoute.snapshot.params['phrase'] !== '') {
      this.search();
      this.activatedRoute.params
        .subscribe(
          () => {
            this.search();
          }
        );
    }
  }

  search() {
    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.page = +this.activatedRoute.snapshot.params['page'] || 1;
    this.searchResults = {
      results: [listItemInitData],
      page: 1,
      total_results: 1,
      total_pages: 1
    };

    this.api.getMovieSearch(this.phrase, +this.page)
      .subscribe((response) => {
        const willBeSorted = response.json();
        willBeSorted.results.sort((a, b) => {
          if (a.popularity > b.popularity) { return -1; }
          if (a.popularity < b.popularity) { return 1; }
          return 0;
        });
        this.searchResults = willBeSorted;
      });
  }

}

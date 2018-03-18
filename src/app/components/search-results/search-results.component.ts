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
  pagination: any;
  // pagination: {
  //   total_pages: Number,
  //   total_results: Number,
  //   page: Number,
  //   links: Array<any>
  // };

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
    this.pagination = {
      total_pages: 1,
      total_results: 0,
      page: 1,
      links: []
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
        this.pagination = {
          total_pages: this.searchResults.total_pages,
          total_results: this.searchResults.total_results,
          page: this.searchResults.page,
          links: []
        };
        for (let i = 0; i < this.searchResults.total_pages; i++) {
          this.pagination.links[i] = {
            url: `/search/${this.phrase}/${i + 1}`,
            name: `${i * 20 + 1}-${i * 20 + this.searchResults.results.length}`
          };
        }
        if (this.pagination.page < 5) {
          this.pagination.links = this.pagination.links.slice(0, 10);
        } else {
          if (this.pagination.page >= 5) {
            this.pagination.links = this.pagination.links.slice(this.pagination.page - 5, this.pagination.page + 5);
          }
        }

      });
  }

}

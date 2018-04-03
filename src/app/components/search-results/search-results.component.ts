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
  moviePage: Number;
  tvShowPage: Number;

  movieSearchResults: {
    results: Array<ListItem>,
    page: Number,
    total_results: Number,
    total_pages: Number
  };

  tvShowSearchResults: {
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
    this.activatedRoute.params
      .subscribe(
        () => {
          if (this.activatedRoute.snapshot.params['phrase']) {
            this.movieSearch();
            this.tvShowSearch();
          }
          if (this.activatedRoute.snapshot.fragment === 'movie') {
            document.querySelector('#movie').scrollIntoView();
          }
          if (this.activatedRoute.snapshot.fragment === 'tvShow') {
            document.querySelector('#tvShow').scrollIntoView();
          }
        }
      );
  }

  movieSearch() {

    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.moviePage = +this.activatedRoute.snapshot.params['moviePage'] || 1;
    this.movieSearchResults = {
      results: [listItemInitData],
      page: 1,
      total_results: 1,
      total_pages: 1
    };

    this.api.getMovieSearch(this.phrase, +this.moviePage)
      .subscribe((response) => {
        const output = response.json();
        output.results = output.results.map(row => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort((a, b) => {
          if (a.popularity > b.popularity) { return -1; }
          if (a.popularity < b.popularity) { return 1; }
          return 0;
        });
        this.movieSearchResults = willBeSorted;
      });
  }

  tvShowSearch() {

    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.tvShowPage = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
    this.tvShowSearchResults = {
      results: [listItemInitData],
      page: 1,
      total_results: 1,
      total_pages: 1
    };

    this.api.getTvShowSearch(this.phrase, +this.tvShowPage)
      .subscribe((response) => {
        const output = response.json();
        output.results = output.results.map(row => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort((a, b) => {
          if (a.popularity > b.popularity) { return -1; }
          if (a.popularity < b.popularity) { return 1; }
          return 0;
        });
        this.tvShowSearchResults = willBeSorted;
      });
  }


}

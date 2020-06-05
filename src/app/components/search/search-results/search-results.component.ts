import { ApiService } from '../../../services/api.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  phrase: string;
  moviePage: number;
  tvShowPage: number;
  personPage: number;
  isLoadingMovie: boolean;
  isLoadingPerson: boolean;
  isLoadingTv: boolean;
  isLoadingKeywords: boolean;

  keywordsSearchResults: {
    results: [
      {
        name: string;
        id: number;
      }
    ];
  };

  movieSearchResults: {
    results: Array<ListItem>;
    page: number;
    total_results: number;
    total_pages: number;
  };

  tvShowSearchResults: {
    results: Array<ListItem>;
    page: number;
    total_results: number;
    total_pages: number;
  };

  personSearchResults: {
    results: Array<ListItem>;
    page: number;
    total_results: number;
    total_pages: number;
  };

  listGenres = this.api.getGenreList;
  getGlobal = this.api.getGlobal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      if (this.activatedRoute.snapshot.params['phrase']) {
        this.isLoadingMovie = true;
        this.isLoadingPerson = true;
        this.isLoadingTv = true;
        this.isLoadingKeywords = true;

        this.keywordsSearch();
        this.movieSearch();
        this.tvShowSearch();
        this.personSearch();
      }
      if (this.activatedRoute.snapshot.fragment === 'movie') {
        document.querySelector('#movie').scrollIntoView();
      }
      if (this.activatedRoute.snapshot.fragment === 'tvShow') {
        document.querySelector('#tvShow').scrollIntoView();
      }
      if (this.activatedRoute.snapshot.fragment === 'person') {
        document.querySelector('#person').scrollIntoView();
      }
    });
  }

  keywordsSearch() {
    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.keywordsSearchResults = undefined;

    this.api.getKeywordSearch(this.phrase).subscribe((response) => {
      const output = response.json();
      this.keywordsSearchResults = output;
      this.isLoadingKeywords = false;
    });
  }

  movieSearch() {
    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.moviePage = +this.activatedRoute.snapshot.params['moviePage'] || 1;
    this.movieSearchResults = {
      results: [listItemInitData],
      page: 1,
      total_results: 1,
      total_pages: 1,
    };

    this.api
      .getMovieSearch(this.phrase, +this.moviePage)
      .subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort(setSortBy('popularity'));
        this.movieSearchResults = willBeSorted;
        this.isLoadingMovie = false;
      });
  }

  tvShowSearch() {
    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.tvShowPage = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
    this.tvShowSearchResults = {
      results: [listItemInitData],
      page: 1,
      total_results: 1,
      total_pages: 1,
    };

    this.api
      .getTvShowSearch(this.phrase, +this.tvShowPage)
      .subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort(setSortBy('popularity'));
        this.tvShowSearchResults = willBeSorted;
        this.isLoadingTv = false;
      });
  }

  personSearch() {
    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.personPage = +this.activatedRoute.snapshot.params['personPage'] || 1;
    this.personSearchResults = {
      results: [listItemInitData],
      page: 1,
      total_results: 1,
      total_pages: 1,
    };

    this.api
      .getPersonSearch(this.phrase, +this.personPage)
      .subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort(setSortBy('popularity'));
        this.personSearchResults = willBeSorted;
        this.isLoadingPerson = false;
      });
  }
}

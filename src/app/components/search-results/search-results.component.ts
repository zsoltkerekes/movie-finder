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

  searchResults: { results: Array<ListItem> };

  listGenres = this.api.getGenreList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  search() {
    this.phrase = this.activatedRoute.snapshot.params['phrase'];
    this.searchResults = { results: [listItemInitData] };
    this.api.getMovieSearch(this.phrase)
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

}

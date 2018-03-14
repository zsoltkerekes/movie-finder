import { Component, OnInit } from '@angular/core';

import { ListItem, listItemInitData } from '../../models/listItem.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {

  topRatedMovies: { results: Array<ListItem> } = { results: [listItemInitData] };

  listGenres = this.api.getGenreList;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.api.getTopRatedMovies()
      .subscribe(response => {
        const willBeSorted = response.json();
        willBeSorted.results.sort((a, b) => {
          if (a.popularity > b.popularity) { return -1; }
          if (a.popularity < b.popularity) { return 1; }
          return 0;
        });
        this.topRatedMovies = willBeSorted;
      });
  }
}

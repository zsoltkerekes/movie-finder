import { Component, OnInit } from '@angular/core';

import { ListItem, listItemInitData } from './../../models/listItem.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMovies: { results: Array<ListItem> } = { results: [listItemInitData] };

  listGenres = this.api.getGenreList;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.api.getPopularMovies()
      .subscribe(response => {
        this.popularMovies = response.json();
      });
  }


}

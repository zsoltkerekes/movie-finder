import { ActivatedRoute } from '@angular/router';
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
  page: number;

  listGenres = this.api.getGenreList;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          document.documentElement.scrollTop = 0;
          this.page = +this.activatedRoute.snapshot.params['page'] || 1;
          this.api.getPopularMovies(this.page)
            .subscribe(response => {
              this.popularMovies = response.json();
            });
        }
      );
  }



}

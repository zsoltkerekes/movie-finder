import { ActivatedRoute } from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

import { ListItem, listItemInitData } from '../../models/listItem.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'mf-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  @ViewChild ('container') container;

  popularMovies: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;
  getGlobal = this.api.getGlobal;
  listGenres = this.api.getGenreList;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.isLoading = true;
          this.popularMovies = { results: [listItemInitData] };
          this.page = +this.activatedRoute.snapshot.params['moviePage'] || 1;
          this.api.getPopularMovies(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.popularMovies = output;
              this.isLoading = false;
              if (this.container) {
                this.container.nativeElement.scrollLeft = 0;
              }
            });
            if (this.activatedRoute.snapshot.fragment === 'movie') {
              document.querySelector('#movie').scrollIntoView();
            }
        }
      );




  }

}

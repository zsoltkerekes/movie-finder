import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

import {ListItem, listItemInitData} from '../../../models/listItem.model';
import {ApiService} from '../../../services/api.service';
import {ObservablesService} from '../../../services/observables.service';

import {Location} from '@angular/common';

@Component({
  selector: 'mf-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
  providers: [Location]
})
export class PopularMoviesComponent implements OnInit {

  @ViewChild('container', {static: false}) container;

  popularMovies: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;
  getGlobal = this.api.getGlobal;
  listGenres = this.api.getGenreList;

  constructor(private api: ApiService,
              private activatedRoute: ActivatedRoute,
              private observables: ObservablesService,
              private location: Location
  ) {
  }

  loadMovies() {
    this.isLoading = true;
    this.popularMovies = {results: [listItemInitData]};
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
      setTimeout(() => {
        document.querySelector('#movie').scrollIntoView();
      }, 0);
    }

    this.location.replaceState(`/discover/${
      +this.activatedRoute.snapshot.params['moviePage']
      }/${
      +this.activatedRoute.snapshot.params['tvShowPage']
      }/${
      +this.activatedRoute.snapshot.params['personPage']
      }/${
      this.observables.sortMovieByOption.getValue()}/${
      this.observables.movieYearOption.getValue()}/${
      this.observables.withGenresOption.getValue().join(',')}/${
      this.observables.sortTvShowByOption.getValue()}/${
      this.observables.tvShowYearOption.getValue()}/${
      this.observables.tvWithGenresOption.getValue().join(',')}`);
  }

  ngOnInit() {
    this.observables.ngOnInit();
    this.activatedRoute.params.subscribe(() => this.loadMovies());
    this.observables.movieYearOption.subscribe(() => this.loadMovies());
    this.observables.sortMovieByOption.subscribe(() => this.loadMovies());
    this.observables.withGenresOption.subscribe(() => this.loadMovies());
  }
}

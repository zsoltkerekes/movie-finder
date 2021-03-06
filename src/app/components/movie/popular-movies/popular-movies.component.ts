import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';

import { Location } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'mf-popular-movies',
  templateUrl: './popular-movies.component.html',
  providers: [Location],
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: false }) container;

  popularMovies: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;

  moviesText: string;
  noResultText: string;

  paramsSubscription: Subscription;
  movieYearOptionSubscription: Subscription;
  sortMovieByOptionSubscription: Subscription;
  withGenresOptionSubscription: Subscription;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private observables: ObservablesService,
    private location: Location,
    private language: LanguageService
  ) {}

  loadMovies(): void {
    this.isLoading = true;
    this.popularMovies = { results: [listItemInitData] };
    this.page = +this.activatedRoute.snapshot.params['moviePage'] || 1;
    this.api.getPopularMovies(this.page).subscribe((response) => {
      const output = response.json();
      output.results = output.results.map((row) => row || {});
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

    this.location.replaceState(
      `/discover/${+this.activatedRoute.snapshot.params['moviePage']}/${+this
        .activatedRoute.snapshot.params['tvShowPage']}/${+this.activatedRoute
        .snapshot.params[
        'personPage'
      ]}/${this.observables.sortMovieByOption.getValue()}/${this.observables.movieYearOption.getValue()}/${this.observables.withGenresOption
        .getValue()
        .join(
          ','
        )}/${this.observables.sortTvShowByOption.getValue()}/${this.observables.tvShowYearOption.getValue()}/${this.observables.tvWithGenresOption
        .getValue()
        .join(',')}`
    );
  }

  ngOnInit(): void {
    this.moviesText = this.language.getText('Movies', this.api.getGlobal());
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.paramsSubscription = this.activatedRoute.params.subscribe(() =>
      this.loadMovies()
    );
    this.movieYearOptionSubscription = this.observables.movieYearOption.subscribe(
      () => this.loadMovies()
    );
    this.sortMovieByOptionSubscription = this.observables.sortMovieByOption.subscribe(
      () => this.loadMovies()
    );
    this.withGenresOptionSubscription = this.observables.withGenresOption.subscribe(
      () => this.loadMovies()
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.movieYearOptionSubscription.unsubscribe();
    this.sortMovieByOptionSubscription.unsubscribe();
    this.withGenresOptionSubscription.unsubscribe();
  }
}

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
  selector: 'mf-popular-tv-shows',
  templateUrl: './popular-tv-shows.component.html',
  styleUrls: ['./popular-tv-shows.component.scss'],
  providers: [Location],
})
export class PopularTvShowsComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: false }) container;

  popularTvShows: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;

  tvShowsText: string;
  noResultText: string;

  paramsSubscription: Subscription;
  tvShowYearOptionSubscription: Subscription;
  sortTvShowByOptionSubscription: Subscription;
  withGenresOptionSubscription: Subscription;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private observables: ObservablesService,
    private location: Location,
    private language: LanguageService
  ) {}

  loadTvShows(): void {
    this.isLoading = true;
    this.popularTvShows = { results: [listItemInitData] };
    this.page = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
    this.api.getPopularTvShows(this.page).subscribe((response) => {
      const output = response.json();
      output.results = output.results.map((row) => row || {});
      this.popularTvShows = output;
      this.isLoading = false;
      if (this.container) {
        this.container.nativeElement.scrollLeft = 0;
      }
    });
    if (this.activatedRoute.snapshot.fragment === 'tvShow') {
      document.querySelector('#tvShow').scrollIntoView();
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
    this.tvShowsText = this.language.getText('Tv shows', this.api.getGlobal());
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.paramsSubscription = this.activatedRoute.params.subscribe(() =>
      this.loadTvShows()
    );
    this.tvShowYearOptionSubscription = this.observables.tvShowYearOption.subscribe(
      () => this.loadTvShows()
    );
    this.sortTvShowByOptionSubscription = this.observables.sortTvShowByOption.subscribe(
      () => this.loadTvShows()
    );
    this.withGenresOptionSubscription = this.observables.tvWithGenresOption.subscribe(
      () => this.loadTvShows()
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.tvShowYearOptionSubscription.unsubscribe();
    this.sortTvShowByOptionSubscription.unsubscribe();
    this.withGenresOptionSubscription.unsubscribe();
  }
}

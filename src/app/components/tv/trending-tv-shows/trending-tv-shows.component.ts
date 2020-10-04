import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { ObservablesService } from '../../../services/observables.service';

@Component({
  selector: 'mf-trending-tv-shows',
  templateUrl: './trending-tv-shows.component.html',
  styleUrls: ['./trending-tv-shows.component.scss'],
})
export class TrendingTvShowComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: false }) container;

  trendingTvShows: { results: Array<ListItem> };
  tvShowPage: number;
  isLoading: boolean;

  trendingText: string;
  noResultText: string;

  time: boolean;
  timeSubscription: Subscription;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService,
    private observables: ObservablesService
  ) {}

  loadContent(): void {
    this.isLoading = true;
    this.trendingTvShows = { results: [listItemInitData] };
    this.tvShowPage = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
    this.api
      .getTrendingTvShows(this.tvShowPage, this.observables.time.getValue())
      .subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.trendingTvShows = output;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
    if (this.activatedRoute.snapshot.fragment === 'tvShow') {
      document.querySelector('#tvShow').scrollIntoView();
    }
  }

  ngOnInit(): void {
    this.trendingText = this.language.getText(
      'Trending Tv Shows',
      this.api.getGlobal()
    );
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => this.loadContent());
    this.timeSubscription = this.observables.time.subscribe(() =>
      this.loadContent()
    );
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }
}

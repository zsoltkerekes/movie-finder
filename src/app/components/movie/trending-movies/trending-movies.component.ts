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
  selector: 'mf-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss'],
})
export class TrendingMoviesComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: false }) container;

  trendingMovies: { results: Array<ListItem> };
  moviePage: number;
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
    this.trendingMovies = { results: [listItemInitData] };
    this.moviePage = +this.activatedRoute.snapshot.params['moviePage'] || 1;
    this.api
      .getTrendingMovies(this.moviePage, this.observables.time.getValue())
      .subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.trendingMovies = output;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
    if (this.activatedRoute.snapshot.fragment === 'movie') {
      document.querySelector('#movie').scrollIntoView();
    }
  }

  ngOnInit(): void {
    this.trendingText = this.language.getText(
      'Trending Movies',
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

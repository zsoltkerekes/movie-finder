import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-trending-tv-shows',
  templateUrl: './trending-tv-shows.component.html',
  styleUrls: ['./trending-tv-shows.component.scss'],
})
export class TrendingTvShowComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  trendingTvShows: { results: Array<ListItem> };
  tvShowPage: number;
  isLoading: boolean;

  trendingText: string;
  noResultText: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.trendingText = this.language.getText(
      'Trending Tv Shows',
      this.api.getGlobal()
    );
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      this.trendingTvShows = { results: [listItemInitData] };
      this.tvShowPage = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
      this.api.getTrendingTvShows(this.tvShowPage).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort(setSortBy('popularity'));
        this.trendingTvShows = willBeSorted;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
      if (this.activatedRoute.snapshot.fragment === 'tvShow') {
        document.querySelector('#tvShow').scrollIntoView();
      }
    });
  }
}

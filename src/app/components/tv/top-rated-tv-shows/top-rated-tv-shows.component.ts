import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { setSortBy } from '../../../helpers/sort.helper';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-top-rated-tv-shows',
  templateUrl: './top-rated-tv-shows.component.html',
})
export class TopRatedTvShowsComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  topRatedTvShows: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;

  topRatedTvShowsText: string;
  noResultText: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.topRatedTvShowsText = this.language.getText(
      'Top rated tv shows',
      this.api.getGlobal()
    );
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      this.topRatedTvShows = { results: [listItemInitData] };
      this.page = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
      this.api.getTopRatedTvSows(this.page).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort(setSortBy('popularity'));
        this.topRatedTvShows = willBeSorted;
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

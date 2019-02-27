import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

import {ListItem, listItemInitData} from '../../../models/listItem.model';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'mf-top-rated-tv-shows',
  templateUrl: './top-rated-tv-shows.component.html',
  styleUrls: ['./top-rated-tv-shows.component.scss']
})
export class TopRatedTvShowsComponent implements OnInit {

  @ViewChild('container') container;

  topRatedTvShows: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;
  listGenres = this.api.getGenreList;
  getGlobal = this.api.getGlobal;

  constructor(private api: ApiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.isLoading = true;
          this.topRatedTvShows = {results: [listItemInitData]};
          this.page = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
          this.api.getTopRatedTvSows(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              const willBeSorted = output;
              willBeSorted.results.sort((a, b) => {
                if (a.popularity > b.popularity) {
                  return -1;
                }
                if (a.popularity < b.popularity) {
                  return 1;
                }
                return 0;
              });
              this.topRatedTvShows = willBeSorted;
              this.isLoading = false;
              if (this.container) {
                this.container.nativeElement.scrollLeft = 0;
              }
            });
          if (this.activatedRoute.snapshot.fragment === 'tvShow') {
            document.querySelector('#tvShow').scrollIntoView();
          }
        }
      );
  }

}
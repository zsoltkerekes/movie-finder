import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

import {ListItem, listItemInitData} from '../../../models/listItem.model';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'mf-popular-tv-shows',
  templateUrl: './popular-tv-shows.component.html',
  styleUrls: ['./popular-tv-shows.component.scss']
})
export class PopularTvShowsComponent implements OnInit {

  @ViewChild('container') container;

  popularTvShows: { results: Array<ListItem> };
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
          this.popularTvShows = {results: [listItemInitData]};
          this.page = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
          this.api.getPopularTvShows(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.popularTvShows = output;
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

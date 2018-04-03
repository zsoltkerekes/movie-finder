import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListItem, listItemInitData } from '../../models/listItem.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-top-rated-tv-shows',
  templateUrl: './top-rated-tv-shows.component.html',
  styleUrls: ['./top-rated-tv-shows.component.scss']
})
export class TopRatedTvShowsComponent implements OnInit {

  topRatedTvShows: { results: Array<ListItem> } = { results: [listItemInitData] };
  page: number;

  listGenres = this.api.getGenreList;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.page = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
          this.api.getTopRatedTvSows(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              const willBeSorted = output;
              willBeSorted.results.sort((a, b) => {
                if (a.popularity > b.popularity) { return -1; }
                if (a.popularity < b.popularity) { return 1; }
                return 0;
              });
              this.topRatedTvShows = willBeSorted;
            });
            if (this.activatedRoute.snapshot.fragment === 'tvShow') {
              document.querySelector('#tvShow').scrollIntoView();
            }
         }
      );
  }

}

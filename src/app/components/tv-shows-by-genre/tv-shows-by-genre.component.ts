import { listItemInitData } from './../../models/listItem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListItem } from '../../models/listItem.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-tv-shows-by-genre',
  templateUrl: './tv-shows-by-genre.component.html',
  styleUrls: ['./tv-shows-by-genre.component.scss']
})
export class TvShowsByGenreComponent implements OnInit {
  id: number;
  page: number;

  tvShowsByGenre: { results: Array<ListItem> } = { results: [listItemInitData] };

  listTvGenres = this.api.getTvGenreList;
  tvGenres = this.api.tvGenres;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          document.documentElement.scrollTop = 0;
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.page = +this.activatedRoute.snapshot.params['page'];
          this.api.getTvShowByGenre(this.id, this.page)
            .subscribe(response => this.tvShowsByGenre = response.json()
            );
        }
      );
  }

}

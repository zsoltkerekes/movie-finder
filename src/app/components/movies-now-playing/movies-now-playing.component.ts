import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ListItem, listItemInitData } from './../../models/listItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-movies-now-playing',
  templateUrl: './movies-now-playing.component.html',
  styleUrls: ['./movies-now-playing.component.scss']
})
export class MoviesNowPlayingComponent implements OnInit {

  nowPlayingMovies: { results: Array<ListItem> } = { results: [listItemInitData] };
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
          this.page = +this.activatedRoute.snapshot.params['page'] || 1;
          this.api.getNowPlaying(this.page)
            .subscribe(response => {
              this.nowPlayingMovies = response.json();
            });
        }
      );
  }


}

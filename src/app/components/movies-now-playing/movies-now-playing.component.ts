import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {ListItem, listItemInitData} from "../../models/listItem.model";
import {Component, OnInit, ViewChild} from "@angular/core";

@Component({
  selector: 'mf-movies-now-playing',
  templateUrl: './movies-now-playing.component.html',
  styleUrls: ['./movies-now-playing.component.scss']
})
export class MoviesNowPlayingComponent implements OnInit {

  @ViewChild('container') container;

  nowPlayingMovies: { results: Array<ListItem> };
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
          this.nowPlayingMovies = {results: [listItemInitData]};
          this.page = +this.activatedRoute.snapshot.params['page'] || 1;
          this.api.getNowPlaying(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.nowPlayingMovies = output;
              this.isLoading = false;
              if (this.container) {
                this.container.nativeElement.scrollLeft = 0;
              }
            });
          document.documentElement.scrollTop = 0;

        }
      );
  }


}

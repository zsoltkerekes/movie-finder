import {ListItem, listItemInitData} from '../../models/listItem.model';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'mf-tv-shows-by-genre',
  templateUrl: './tv-shows-by-genre.component.html',
  styleUrls: ['./tv-shows-by-genre.component.scss']
})
export class TvShowsByGenreComponent implements OnInit {

  @ViewChild('container') container;

  id: number;
  page: number;
  isLoading: boolean;
  tvShowsByGenre: { results: Array<ListItem> } = {results: [listItemInitData]};
  listTvGenres = this.api.getTvGenreList;
  tvGenres = this.api.tvGenres;
  getGlobal = this.api.getGlobal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {
  }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.isLoading = true;
          document.documentElement.scrollTop = 0;
          this.tvShowsByGenre = {results: [listItemInitData]};
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.page = +this.activatedRoute.snapshot.params['page'];
          this.api.getTvShowByGenre(this.id, this.page)
            .subscribe(response => {
                const output = response.json();
                output.results = output.results.map(row => row || {});
                this.tvShowsByGenre = output;
                this.isLoading = false;
                if (this.container) {
                  this.container.nativeElement.scrollLeft = 0;
                }
              }
            );
        }
      );
  }

}

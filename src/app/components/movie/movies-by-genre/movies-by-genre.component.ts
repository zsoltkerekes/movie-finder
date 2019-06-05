import {ListItem, listItemInitData} from '../../../models/listItem.model';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'mf-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.scss']
})
export class MoviesByGenreComponent implements OnInit {

  @ViewChild('container', {static: false}) container;

  id: number;
  page: number;
  isLoading: boolean;
  moviesByGenre: { results: Array<ListItem> } = {results: [listItemInitData]};
  listGenres = this.api.getGenreList;
  genres = this.api.genres;
  getGlobal = this.api.getGlobal;

  constructor(private activatedRoute: ActivatedRoute,
              private api: ApiService) {
  }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.isLoading = true;
          document.documentElement.scrollTop = 0;
          this.moviesByGenre = {results: [listItemInitData]};
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.page = +this.activatedRoute.snapshot.params['page'];
          this.api.getMovieByGenre(this.id, this.page)
            .subscribe(response => {
                const output = response.json();
                output.results = output.results.map(row => row || {});
                this.moviesByGenre = output;
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

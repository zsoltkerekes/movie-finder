import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mf-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss'],
})
export class SimilarMoviesComponent implements OnInit {
  @ViewChild('container', { static: true }) container;

  id: number;

  similarMovies: { results: Array<ListItem> } = { results: [listItemInitData] };

  listGenres = this.api.getGenreList;
  genres = this.api.genres;
  getGlobal = this.api.getGlobal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      this.container.nativeElement.scrollLeft = 0;
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.api.getSimilarMovies(this.id).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.similarMovies = output;
      });
    });
  }
}

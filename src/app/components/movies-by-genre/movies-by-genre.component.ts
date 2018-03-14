import { listItemInitData } from './../../models/listItem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListItem } from '../../models/listItem.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.scss']
})
export class MoviesByGenreComponent implements OnInit {
  id: number;

  moviesByGenre:  { results: Array<ListItem> } = { results: [listItemInitData] };

  listGenres = this.api.getGenreList;
  genres = this.api.genres;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params['id'];
    document.documentElement.scrollTop = 0;
    this.api.getMovieByGenre(this.id)
      .subscribe(response =>  this.moviesByGenre = response.json());
  }

}

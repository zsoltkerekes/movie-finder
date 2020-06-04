import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';

@Component({
  selector: 'mf-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.scss'],
})
export class MoviesByGenreComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  id: number;
  page: number;
  isLoading: boolean;
  moviesByGenre: { results: Array<ListItem> };
  listGenres = this.api.getGenreList;
  genres = this.api.genres;

  movieText: string;
  noResultsText: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.moviesByGenre = { results: [listItemInitData] };
    this.movieText = this.language.getText('Movies', this.api.getGlobal());
    this.noResultsText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      document.documentElement.scrollTop = 0;
      this.moviesByGenre = { results: [listItemInitData] };
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.page = +this.activatedRoute.snapshot.params['page'];
      this.api.getMovieByGenre(this.id, this.page).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.moviesByGenre = output;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
    });
  }
}

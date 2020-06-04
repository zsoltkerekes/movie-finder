import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  topRatedMovies: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;

  topRatedMoviesText: string;
  noResultText: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.topRatedMoviesText = this.language.getText(
      'Top rated movies',
      this.api.getGlobal()
    );
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      this.topRatedMovies = { results: [listItemInitData] };
      this.page = +this.activatedRoute.snapshot.params['moviePage'] || 1;
      this.api.getTopRatedMovies(this.page).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort((a, b) => {
          if (a.popularity > b.popularity) {
            return -1;
          }
          if (a.popularity < b.popularity) {
            return 1;
          }
          return 0;
        });
        this.topRatedMovies = willBeSorted;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
      if (this.activatedRoute.snapshot.fragment === 'movie') {
        document.querySelector('#movie').scrollIntoView();
      }
    });
  }
}

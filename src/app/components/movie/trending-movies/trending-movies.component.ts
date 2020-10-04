import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss'],
})
export class TrendingMoviesComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  trendingMovies: { results: Array<ListItem> };
  moviePage: number;
  isLoading: boolean;

  trendingText: string;
  noResultText: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.trendingText = this.language.getText(
      'Trending Movies',
      this.api.getGlobal()
    );
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      this.trendingMovies = { results: [listItemInitData] };
      this.moviePage = +this.activatedRoute.snapshot.params['moviePage'] || 1;
      this.api.getTrendingMovies(this.moviePage).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.trendingMovies = output;
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

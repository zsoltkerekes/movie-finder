import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-tv-shows-by-genre',
  templateUrl: './tv-shows-by-genre.component.html',
  styleUrls: ['./tv-shows-by-genre.component.scss'],
})
export class TvShowsByGenreComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  id: number;
  page: number;
  isLoading: boolean;
  tvShowsByGenre: { results: Array<ListItem> } = {
    results: [listItemInitData],
  };
  listTvGenres = this.api.getTvGenreList;
  tvGenres = this.api.tvGenres;

  tvShowsText: string;
  noResultsText: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.tvShowsByGenre = {
      results: [listItemInitData],
    };
    this.tvShowsText = this.language.getText('Tv shows', this.api.getGlobal());
    this.noResultsText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      document.documentElement.scrollTop = 0;
      this.tvShowsByGenre = { results: [listItemInitData] };
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.page = +this.activatedRoute.snapshot.params['page'];
      this.api.getTvShowByGenre(this.id, this.page).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.tvShowsByGenre = output;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
    });
  }
}

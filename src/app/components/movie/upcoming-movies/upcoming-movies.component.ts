import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss'],
})
export class UpcomingMoviesComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  upcomingMovies: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;

  upcomingText: string;
  noResultText: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.upcomingText = this.language.getText('Upcoming', this.api.getGlobal());
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      this.upcomingMovies = { results: [listItemInitData] };
      this.page = +this.activatedRoute.snapshot.params['page'] || 1;
      this.api.getUpcoming(this.page).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        const willBeSorted = output;
        willBeSorted.results.sort(setSortBy('popularity'));
        this.upcomingMovies = willBeSorted;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
      document.documentElement.scrollTop = 0;
    });
  }
}

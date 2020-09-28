import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() results: {
    total_pages: number;
    total_results: number;
    page: number;
  };
  @Input() url: string;
  @Input() type: string;

  pagination: {
    total_pages: number;
    total_results: number;
    page: number;
    links: Array<{ name: string; url: string }>;
  };

  moviePage: number;
  tvShowPage: number;
  personPage: number;
  keywordsPage: number;

  resultsText: string;
  pagesText: string;

  getGlobal = this.api.getGlobal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private observables: ObservablesService,
    public language: LanguageService
  ) {}

  ngOnInit(): void {
    this.pagination = {
      total_pages: 0,
      total_results: 0,
      page: 0,
      links: [],
    };
  }

  setParams(): void {
    this.moviePage = +this.activatedRoute.snapshot.params['moviePage'] || 1;
    this.tvShowPage = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
    this.personPage = +this.activatedRoute.snapshot.params['personPage'] || 1;
    this.personPage = +this.activatedRoute.snapshot.params['personPage'] || 1;
    this.keywordsPage =
      +this.activatedRoute.snapshot.params['keywordsPage'] || 1;

    this.resultsText = this.language.getText('results', this.api.getGlobal());
    this.pagesText = this.language.getText('pages', this.api.getGlobal());
  }

  optionsInUrl(): string {
    return this.url === '/discover/'
      ? `/${this.observables.sortMovieByOption.getValue()}/${this.observables.movieYearOption.getValue()}/${this.observables.withGenresOption
          .getValue()
          .join(
            ','
          )}/${this.observables.sortTvShowByOption.getValue()}/${this.observables.tvShowYearOption.getValue()}/${this.observables.tvWithGenresOption
          .getValue()
          .join(',')}`
      : '';
  }

  ngOnChanges(): void {
    this.setParams();

    if (this.results) {
      this.pagination = {
        total_pages: +this.results.total_pages,
        total_results: +this.results.total_results,
        page: +this.results.page,
        links: [],
      };

      for (let i = 0; i < +this.results.total_pages; i++) {
        let expandedUrl = `${this.url}/${i + 1}`;

        switch (this.type) {
          case 'movie':
            expandedUrl = `${this.url}/${i + 1}/${this.tvShowPage}/${
              this.personPage
            }`;
            break;
          case 'tvShow':
            expandedUrl = `${this.url}/${this.moviePage}/${i + 1}/${
              this.personPage
            }`;
            break;
          case 'person':
            expandedUrl = `${this.url}/${this.moviePage}/${this.tvShowPage}/${
              i + 1
            }`;
            break;
          case 'keyword':
            expandedUrl = `${this.url}/${i + 1}`;
            break;
        }

        this.pagination.links[i] = {
          url: expandedUrl + this.optionsInUrl(),
          name: `${i * 20 + 1}-${(i + 1) * 20}`,
        };
      }

      if (this.pagination.links.length > 0) {
        this.pagination.links[this.pagination.links.length - 1].name = `${
          (+this.results.total_pages - 1) * 20 + 1
        }-${this.results.total_results}`;
      }

      if (this.pagination.page < 5) {
        this.pagination.links = this.pagination.links.slice(0, 10);
      } else {
        this.pagination.links = this.pagination.links.slice(
          this.pagination.page - 5,
          this.pagination.page + 5
        );
      }
    }
  }
}

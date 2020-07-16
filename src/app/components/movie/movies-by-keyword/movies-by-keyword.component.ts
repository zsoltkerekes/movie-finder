import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../services/api.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-movies-by-keyword',
  templateUrl: './movies-by-keyword.component.html',
  styleUrls: ['./movies-by-keyword.component.scss'],
})
export class MoviesByKeywordComponent implements OnInit {
  id: number;
  page: number;
  keyword: string;
  isLoading: boolean;
  movies: { results: Array<ListItem> };

  keywordText: string;
  noResultsText: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private api: ApiService,
    private router: Router,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.keywordText = this.language.getText('Keyword', this.api.getGlobal());
    this.noResultsText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      document.documentElement.scrollTop = 0;
      this.isLoading = true;
      this.title.setTitle(
        `${this.keywordText} ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
      );
      if (this.activatedRoute.snapshot.params['id']) {
        this.id = +this.activatedRoute.snapshot.params['id'];
        this.page = +this.activatedRoute.snapshot.params['keywordsPage'];
        this.loadKeywordsRelatedContent();
      }
    });
  }

  loadKeywordsRelatedContent = () => {
    this.movies = { results: [listItemInitData] };

    this.api.getKeywordDetails(this.id).subscribe((result) => {
      this.keyword = result.json().name;
      this.title.setTitle(
        `${this.keywordText}: ${
          this.keyword[0].toLocaleUpperCase() + this.keyword.substr(1)
        } ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
      );
    });

    this.api.getMoviesByKeyword(this.id, this.page).subscribe(
      (response) => {
        this.movies = response.json();
        this.isLoading = false;
      },
      (error) => {
        if (error.status === 404) {
          this.router.navigate(['/404']);
        }
      }
    );
  };
}

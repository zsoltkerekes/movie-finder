import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { ListItem, listItemInitData } from '../../models/listItem.model';

@Component({
  selector: 'mf-by-keywords',
  templateUrl: './by-keywords.component.html',
  styleUrls: ['./by-keywords.component.scss']
})
export class ByKeywordsComponent implements OnInit {
  id: number;
  page: number;
  keyword: string;
  movies: { results: Array<ListItem> };
  getGlobal = this.api.getGlobal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          document.documentElement.scrollTop = 0;
          this.title.setTitle(`By Keyword :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
          if (this.activatedRoute.snapshot.params['id']) {
            this.id = +this.activatedRoute.snapshot.params['id'];
            this.page = +this.activatedRoute.snapshot.params['keywordsPage'];
            this.loadKeywordsRelatedContent();
          }
        }
      );
  }

  loadKeywordsRelatedContent = () => {

    this.movies = { results: [listItemInitData] };

    this.api.getKeywordDetails(this.id)
      .subscribe(
        result => {
          this.keyword = result.json().name;
          this.title.setTitle(`${this.keyword} :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
        }
      );

    this.api.getMoviesByKeyword(this.id, this.page)
      .subscribe(
        response => {
          this.movies = response.json();
        }
      );


  }

}

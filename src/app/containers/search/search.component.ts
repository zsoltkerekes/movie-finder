import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'mf-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  subTitle: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.subTitle = this.language.getNav('Search', this.api.getGlobal());
    this.title.setTitle(
      `${this.subTitle}  ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
    );
  }
}

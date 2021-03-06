import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'mf-tv-show-episodes',
  templateUrl: './tv-show-episodes.component.html',
})
export class TvShowEpisodesComponent implements OnInit {
  subTitle: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.subTitle = this.language.getNav('Episodes', this.api.getGlobal());
    this.title.setTitle(
      `${this.subTitle} ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
    );
  }
}

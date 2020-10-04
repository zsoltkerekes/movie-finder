import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LanguageService } from '../../services/language.service';
import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'mf-upcoming',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  subTitle: string;
  day: string;
  week: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService,
    private observables: ObservablesService
  ) {}

  onChange = (event: { checked: boolean }): void =>
    this.observables.time.next(event.checked);

  ngOnInit(): void {
    this.subTitle = this.language.getNav('Trending', this.api.getGlobal());
    this.day = this.language.getText('day', this.api.getGlobal());
    this.week = this.language.getText('week', this.api.getGlobal());

    this.title.setTitle(
      `${this.subTitle} ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
    );
  }
}

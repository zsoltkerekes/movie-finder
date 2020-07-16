import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ObservablesService } from '../../services/observables.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'mf-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  subTitle: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private observables: ObservablesService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.observables.initMovie();
    this.observables.initTv();
    document.documentElement.scrollTop = 0;
    this.subTitle = this.language.getNav('Discover', this.api.getGlobal());
    this.title.setTitle(
      `${this.subTitle} ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
    );
  }
}

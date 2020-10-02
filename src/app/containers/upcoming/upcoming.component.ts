import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'mf-upcoming',
  templateUrl: './upcoming.component.html',
})
export class UpcomingComponent implements OnInit {
  subTitle: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    this.subTitle = this.language.getNav('Upcoming', this.api.getGlobal());
    this.title.setTitle(
      `${this.subTitle} ::: ${this.activatedRoute.snapshot.data['pageTitle']}`
    );
  }
}

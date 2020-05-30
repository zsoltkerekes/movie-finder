import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ScrollerService } from '../../../services/scroller.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  date: Date;
  adult: string;
  global: string;
  movieFinder: string;

  constructor(
    public api: ApiService,
    private language: LanguageService,
    public scroll: ScrollerService
  ) {}

  ngOnInit() {
    this.date = new Date();
    this.adult = this.language.getText('Adult', this.api.getGlobal());
    this.global = this.language.getNav('Global', this.api.getGlobal());
    this.movieFinder = this.language.getNav(
      'Movie Finder',
      this.api.getGlobal()
    );
  }
}

import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mf-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent implements OnInit {
  subTitle: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.subTitle = this.api.getGlobal() ? 'Top Rated' : 'Legjobbak';
    this.title.setTitle(
      `${this.subTitle} :: ${this.activatedRoute.snapshot.data['pageTitle']}`
    );
  }
}

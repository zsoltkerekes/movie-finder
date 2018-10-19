import {ApiService} from './../../services/api.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mf-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  subTitle: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.subTitle = this.api.getGlobal() ? 'Now Playing' : 'Most a Mozikban';
    this.title.setTitle(`${this.subTitle} :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
  }
}

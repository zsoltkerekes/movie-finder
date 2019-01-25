import {ApiService} from './../../services/api.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'mf-tv-show-episodes',
  templateUrl: './tv-show-episodes.component.html',
  styleUrls: ['./tv-show-episodes.component.scss']
})
export class TvShowEpisodesComponent implements OnInit {

  subTitle: string;

  constructor(private title: Title,
              private activatedRoute: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit() {
    this.subTitle = this.api.getGlobal() ? 'Episodes' : 'Epizódok';
    this.title.setTitle(`${this.subTitle} :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
  }

}

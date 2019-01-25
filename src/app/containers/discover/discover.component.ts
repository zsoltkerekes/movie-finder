import {ApiService} from './../../services/api.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'mf-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  subTitle: string;

  constructor(private title: Title,
              private activatedRoute: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.subTitle = this.api.getGlobal() ? 'Discover' : 'Felfedezés';
    this.title.setTitle(`${this.subTitle} :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
  }

}

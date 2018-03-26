import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mf-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.title.setTitle(`Felfedezés :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
  }

}

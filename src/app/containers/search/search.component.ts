import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.title.setTitle(`Keresés :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
  }

}
